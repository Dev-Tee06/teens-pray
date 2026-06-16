import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaLock, FaSignInAlt } from "react-icons/fa";
import {
  isAuthorizedAdmin,
  isSupabaseConfigured,
  supabase,
} from "../lib/supabase";
import SEO from "../Components/SEO";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const denied = new URLSearchParams(location.search).get("denied") === "1";

  useEffect(() => {
    if (!denied || message) return;
    setMessage("Access Denied. You are not authorized to access this section.");
  }, [denied, message]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!isSupabaseConfigured) {
      setMessage("Supabase is not configured for this website yet.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setLoading(false);
      setMessage(error.message || "Unable to sign in.");
      return;
    }

    if (!isAuthorizedAdmin(data.user.email)) {
      await supabase.auth.signOut();
      setLoading(false);
      setMessage("Access Denied. You are not authorized to access this section.");
      window.setTimeout(() => navigate("/", { replace: true }), 1800);
      return;
    }

    setLoading(false);
    navigate("/admin/registrations", { replace: true });
  };

  return (
    <div className="min-h-[75vh] bg-white px-6 pt-40 pb-20">
      <SEO 
        title="Admin Login - TeenSpray"
        description="Login to the TeenSpray administration area."
        url="/admin/login"
      />
      <div className="max-w-md mx-auto rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.07)]">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
          <FaLock className="text-2xl" />
        </div>
        <h1 className="text-center text-3xl font-black text-gray-900">
          Admin Login
        </h1>
        <p className="mt-3 text-center font-medium text-gray-600">
          Sign in with an approved TeenSpray administrator account.
        </p>

        {message && (
          <div
            className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700"
            role="alert"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-bold text-gray-800">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              type="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-gray-800">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3.5 font-black text-white shadow-[0_14px_35px_rgba(239,68,68,0.25)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-65"
          >
            <FaSignInAlt />
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <Link
          to="/"
          className="mt-6 block text-center text-sm font-bold text-orange-600 hover:text-red-600"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
