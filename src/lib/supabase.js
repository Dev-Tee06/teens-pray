import { createClient } from "@supabase/supabase-js";

/**
 * ============================================================
 * SUPABASE CLIENT INITIALIZATION
 * ============================================================
 */

export const AUTHORIZED_ADMIN_EMAILS = [
  "babayodetestimony0318@gmail.com",
  "teenspray01@gmail.com",
];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * ============================================================
 * AUTHENTICATION HELPERS
 * ============================================================
 */

/**
 * Check if email is an authorized admin
 */
export function isAuthorizedAdmin(email) {
  return AUTHORIZED_ADMIN_EMAILS.includes(String(email || "").toLowerCase());
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser() {
  if (!isSupabaseConfigured) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
}

/**
 * Get current session
 */
export async function getCurrentSession() {
  if (!isSupabaseConfigured) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error) return null;
  return data.session;
}

/**
 * Sign out current user
 */
export async function signOutUser() {
  if (!isSupabaseConfigured) return { error: "Supabase not configured" };
  return await supabase.auth.signOut();
}

/**
 * ============================================================
 * REGISTRATION API ROUTES
 * ============================================================
 */

/**
 * Create a new registration
 * @param {Object} formData - Registration form data
 * @returns {Promise<{data, error}>}
 */
export async function createRegistration(formData) {
  if (!isSupabaseConfigured) {
    return {
      data: null,
      error: { message: "Supabase is not configured" },
    };
  }

  const payload = {
    name: formData.name?.trim(),
    phone_number: formData.phone_number?.trim(),
    church: formData.church?.trim(),
    attended_before:
      formData.attended_before === "Yes" || formData.attended_before === true,
    heard_about: formData.heard_about,
    heard_about_other: formData.heard_about_other?.trim() || null,
    location: formData.location?.trim(),
    willing_to_travel: formData.willing_to_travel,
  };

  return await supabase.from("registrations").insert([payload]).select();
}

/**
 * Get all registrations (admin only)
 * @returns {Promise<{data, error}>}
 */
export async function getAllRegistrations() {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });
}

/**
 * Get registrations with search and filters
 * @param {Object} options - Query options
 * @returns {Promise<{data, count, error}>}
 */
export async function getRegistrationsFiltered(options = {}) {
  if (!isSupabaseConfigured) {
    return {
      data: null,
      count: 0,
      error: { message: "Supabase not configured" },
    };
  }

  const {
    search = "",
    attended = "",
    willing = "",
    heard = "",
    date = "",
    page = 0,
    pageSize = 100,
  } = options;

  let query = supabase.from("registrations").select("*", { count: "exact" });

  // Search by name, phone, or church
  if (search && search.trim()) {
    const searchTerm = search.trim().replaceAll(",", " ");
    query = query.or(
      `name.ilike.%${searchTerm}%,phone_number.ilike.%${searchTerm}%,church.ilike.%${searchTerm}%`,
    );
  }

  // Filter by attended before
  if (attended === "Yes") {
    query = query.eq("attended_before", true);
  } else if (attended === "No") {
    query = query.eq("attended_before", false);
  }

  // Filter by willing to travel
  if (willing) {
    query = query.eq("willing_to_travel", willing);
  }

  // Filter by heard about
  if (heard) {
    query = query.eq("heard_about", heard);
  }

  // Filter by date
  if (date) {
    const start = new Date(`${date}T00:00:00`);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    query = query
      .gte("created_at", start.toISOString())
      .lt("created_at", end.toISOString());
  }

  // Pagination
  const from = page * pageSize;
  query = query.range(from, from + pageSize - 1);

  // Order by newest first
  query = query.order("created_at", { ascending: false });

  return await query;
}

/**
 * Get a single registration by ID
 * @param {string} id - Registration ID
 * @returns {Promise<{data, error}>}
 */
export async function getRegistrationById(id) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.from("registrations").select("*").eq("id", id).single();
}

/**
 * Update a registration (admin only)
 * @param {string} id - Registration ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<{data, error}>}
 */
export async function updateRegistration(id, updates) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase
    .from("registrations")
    .update(updates)
    .eq("id", id)
    .select();
}

/**
 * Delete a registration (admin only)
 * @param {string} id - Registration ID
 * @returns {Promise<{data, error}>}
 */
export async function deleteRegistration(id) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.from("registrations").delete().eq("id", id);
}

/**
 * ============================================================
 * STATISTICS & ANALYTICS
 * ============================================================
 */

/**
 * Get registration statistics
 * @returns {Promise<{data, error}>}
 */
export async function getRegistrationStats() {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.rpc("get_registration_stats");
}

/**
 * Get unique values for filters
 * @param {string} column - Column name to get unique values from
 * @returns {Promise<{data, error}>}
 */
export async function getUniqueFilterValues(column) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  const { data, error } = await supabase
    .from("registrations")
    .select(column, { count: "exact" })
    .order(column, { ascending: true });

  if (error) return { data: null, error };

  // Extract unique values
  const unique = [...new Set(data.map((row) => row[column]).filter(Boolean))];
  return { data: unique, error: null };
}

/**
 * ============================================================
 * EXPORT FUNCTIONALITY
 * ============================================================
 */

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateString));
}

/**
 * Escape CSV field value
 * @param {*} value - Field value
 * @returns {string} Escaped CSV value
 */
export function escapeCsv(value) {
  const text = value == null ? "" : String(value);
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

/**
 * Export registrations to CSV
 * @param {Array} registrations - Array of registration objects
 * @returns {void} Downloads CSV file
 */
export function exportRegistrationsToCSV(registrations) {
  const headers = [
    "Name",
    "Phone Number",
    "Church",
    "Attended Before",
    "Heard About Program",
    "Heard About Other",
    "Location",
    "Willing To Travel",
    "Date Registered",
  ];

  const rows = (registrations || []).map((row) => [
    row.name,
    row.phone_number,
    row.church,
    row.attended_before ? "Yes" : "No",
    row.heard_about,
    row.heard_about_other || "",
    row.location,
    row.willing_to_travel,
    formatDate(row.created_at),
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map(escapeCsv).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "teenspray-registrations.csv";
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * ============================================================
 * ADMIN USERS API
 * ============================================================
 */

/**
 * Get all admin users (admin only)
 * @returns {Promise<{data, error}>}
 */
export async function getAllAdminUsers() {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.from("admin_users").select("*").order("created_at");
}

/**
 * Check if user is admin (using is_admin function)
 * @returns {Promise<boolean>}
 */
export async function checkIfUserIsAdmin() {
  if (!isSupabaseConfigured) return false;

  try {
    const { data, error } = await supabase.rpc("is_admin");
    if (error) return false;
    return data === true;
  } catch {
    return false;
  }
}

/**
 * Add new admin user (admin only)
 * @param {string} email - Admin email
 * @returns {Promise<{data, error}>}
 */
export async function addAdminUser(email) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase
    .from("admin_users")
    .insert([{ email: email.toLowerCase() }])
    .select();
}

/**
 * Remove admin user (admin only)
 * @param {string} id - Admin user ID
 * @returns {Promise<{data, error}>}
 */
export async function removeAdminUser(id) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.from("admin_users").delete().eq("id", id);
}

/**
 * ============================================================
 * AUTHENTICATION ACTIONS
 * ============================================================
 */

/**
 * Sign in with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{data, error}>}
 */
export async function signInWithPassword(email, password) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });
}

/**
 * Sign up new user (for future extension)
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{data, error}>}
 */
export async function signUpWithPassword(email, password) {
  if (!isSupabaseConfigured) {
    return { data: null, error: { message: "Supabase not configured" } };
  }

  return await supabase.auth.signUp({
    email: email.trim(),
    password,
  });
}

/**
 * Listen to authentication state changes
 * @param {Function} callback - Callback function
 * @returns {Function} Unsubscribe function
 */
export function onAuthStateChange(callback) {
  if (!isSupabaseConfigured) return () => {};

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });

  return () => subscription?.unsubscribe();
}

/**
 * ============================================================
 * REAL-TIME SUBSCRIPTIONS
 * ============================================================
 */

/**
 * Subscribe to real-time registration changes
 * @param {Function} callback - Callback function
 * @returns {Function} Unsubscribe function
 */
export function subscribeToRegistrations(callback) {
  if (!isSupabaseConfigured) return () => {};

  const subscription = supabase
    .channel("registrations:*")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "registrations",
      },
      callback,
    )
    .subscribe();

  return () => supabase.removeChannel(subscription);
}

/**
 * ============================================================
 * ERROR HANDLING UTILITIES
 * ============================================================
 */

/**
 * Get user-friendly error message
 * @param {Object} error - Supabase error object
 * @returns {string} User-friendly error message
 */
export function getErrorMessage(error) {
  if (!error) return "An unknown error occurred";

  if (error.message === "duplicate key value violates unique constraint") {
    return "This phone number is already registered. Please use a different number.";
  }

  if (error.message?.includes("unique_phone_registration")) {
    return "This phone number has already been registered.";
  }

  if (error.status === 400) {
    return "Invalid form data. Please check your entries.";
  }

  if (error.status === 401) {
    return "You are not authorized. Please log in again.";
  }

  if (error.status === 403) {
    return "Access denied. You do not have permission to perform this action.";
  }

  if (error.status === 404) {
    return "Resource not found.";
  }

  if (error.status === 409) {
    return "This record already exists.";
  }

  return error.message || "An error occurred. Please try again.";
}
