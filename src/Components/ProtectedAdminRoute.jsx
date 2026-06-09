import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  isAuthorizedAdmin,
  isSupabaseConfigured,
  supabase,
} from "../lib/supabase";

export default function ProtectedAdminRoute({ children }) {
  const [status, setStatus] = useState("checking");
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setStatus("missing-config");
      return undefined;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setStatus("ready");
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setStatus("ready");
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-[60vh] px-6 pt-40 text-center">
        <p className="text-gray-600 font-semibold">Checking admin access...</p>
      </div>
    );
  }

  if (status === "missing-config") {
    return (
      <div className="max-w-2xl mx-auto px-6 pt-40 pb-20 text-center">
        <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-black text-gray-900 mb-3">
            Supabase is not configured
          </h1>
          <p className="text-gray-600 font-medium">
            Add your Supabase URL and anon key to the environment variables to
            use the admin dashboard.
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAuthorizedAdmin(session.user.email)) {
    return <Navigate to="/admin/login?denied=1" replace />;
  }

  return children;
}
