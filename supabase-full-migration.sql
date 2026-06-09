-- ============================================================
-- TeenSpray Registration System - Complete Migration
-- ============================================================

-- ============================================================
-- EXTENSION: Enable pgcrypto for UUID generation
-- ============================================================
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- TABLE 1: Registrations
-- ============================================================
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone_number TEXT NOT NULL UNIQUE,
  church TEXT NOT NULL,
  attended_before BOOLEAN NOT NULL,
  heard_about TEXT NOT NULL,
  heard_about_other TEXT,
  location TEXT NOT NULL,
  willing_to_travel TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- TABLE 2: Admin Users
-- ============================================================
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- SEED ADMIN USERS
-- ============================================================
-- This will fail if users already exist, which is fine
INSERT INTO public.admin_users (email)
VALUES
  ('babayodetestimony0318@gmail.com'),
  ('teenspray01@gmail.com')
ON CONFLICT (email) DO NOTHING;

-- ============================================================
-- INDEXES for Performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_registration_name
ON public.registrations(name);

CREATE INDEX IF NOT EXISTS idx_registration_phone
ON public.registrations(phone_number);

CREATE INDEX IF NOT EXISTS idx_registration_church
ON public.registrations(church);

CREATE INDEX IF NOT EXISTS idx_registration_created_at
ON public.registrations(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_admin_email
ON public.admin_users(email);

-- ============================================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- ADMIN CHECK FUNCTION
-- ============================================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE LOWER(email) = LOWER(auth.jwt()->>'email')
  );
$$;

-- ============================================================
-- REGISTRATION POLICIES
-- ============================================================

-- Public can insert registrations
DROP POLICY IF EXISTS "Public Can Register" ON public.registrations;
CREATE POLICY "Public Can Register"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can select registrations
DROP POLICY IF EXISTS "Admins Can View Registrations" ON public.registrations;
CREATE POLICY "Admins Can View Registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (public.is_admin());

-- Only admins can update registrations
DROP POLICY IF EXISTS "Admins Can Update Registrations" ON public.registrations;
CREATE POLICY "Admins Can Update Registrations"
ON public.registrations
FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Only admins can delete registrations
DROP POLICY IF EXISTS "Admins Can Delete Registrations" ON public.registrations;
CREATE POLICY "Admins Can Delete Registrations"
ON public.registrations
FOR DELETE
TO authenticated
USING (public.is_admin());

-- ============================================================
-- ADMIN USERS POLICIES
-- ============================================================

-- Only admins can read admin users list
DROP POLICY IF EXISTS "Admin Read Admin Users" ON public.admin_users;
CREATE POLICY "Admin Read Admin Users"
ON public.admin_users
FOR SELECT
TO authenticated
USING (public.is_admin());

-- Only admins can insert admin users
DROP POLICY IF EXISTS "Admin Insert Admin Users" ON public.admin_users;
CREATE POLICY "Admin Insert Admin Users"
ON public.admin_users
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

-- ============================================================
-- HELPER FUNCTIONS
-- ============================================================

-- Get registration count by date range
CREATE OR REPLACE FUNCTION public.get_registration_stats()
RETURNS TABLE (
  total_registrations BIGINT,
  returning_attendees BIGINT,
  first_time_attendees BIGINT,
  outside_akure_count BIGINT,
  willing_to_travel_count BIGINT,
  today_count BIGINT,
  this_week_count BIGINT,
  this_month_count BIGINT
)
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COUNT(*)::BIGINT,
    COUNT(*) FILTER (WHERE attended_before = true)::BIGINT,
    COUNT(*) FILTER (WHERE attended_before = false)::BIGINT,
    COUNT(*) FILTER (WHERE LOWER(location) NOT LIKE '%akure%')::BIGINT,
    COUNT(*) FILTER (WHERE willing_to_travel = 'Yes')::BIGINT,
    COUNT(*) FILTER (WHERE DATE(created_at AT TIME ZONE 'Africa/Lagos') = CURRENT_DATE)::BIGINT,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days')::BIGINT,
    COUNT(*) FILTER (WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE))::BIGINT
  FROM public.registrations;
$$;

-- Check if user is admin
CREATE OR REPLACE FUNCTION public.check_admin_access(user_email TEXT)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE LOWER(email) = LOWER(user_email)
  );
$$;

-- ============================================================
-- GRANT PERMISSIONS
-- ============================================================

-- Allow anon users to call is_admin function
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated;

-- Allow authenticated users to call stats function
GRANT EXECUTE ON FUNCTION public.get_registration_stats() TO authenticated;

-- Allow authenticated users to call check_admin_access
GRANT EXECUTE ON FUNCTION public.check_admin_access(TEXT) TO authenticated;

-- ============================================================
-- COMMENTS for Documentation
-- ============================================================
COMMENT ON TABLE public.registrations IS 'Stores all TeenSpray conference registrations';
COMMENT ON TABLE public.admin_users IS 'Stores approved administrator accounts';
COMMENT ON FUNCTION public.is_admin() IS 'Returns true if current authenticated user is an approved admin';
COMMENT ON FUNCTION public.get_registration_stats() IS 'Returns registration statistics for dashboard';
COMMENT ON FUNCTION public.check_admin_access(TEXT) IS 'Checks if a specific email is an admin';
