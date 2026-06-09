import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaDownload,
  FaSearch,
  FaSignOutAlt,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import { supabase } from "../lib/supabase";

const pageSize = 100;

const emptyFilters = {
  search: "",
  attended: "",
  willing: "",
  heard: "",
  date: "",
};

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function escapeCsv(value) {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

function isOutsideAkure(location) {
  return !String(location || "")
    .toLowerCase()
    .includes("akure");
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-gray-500">{label}</p>
      <p className="mt-2 text-3xl font-black text-gray-900">{value}</p>
    </div>
  );
}

export default function AdminRegistrations() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [statsRows, setStatsRows] = useState([]);
  const [filters, setFilters] = useState(emptyFilters);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const buildQuery = useCallback(
    (includeRange = true) => {
      let query = supabase
        .from("registrations")
        .select("*", { count: includeRange ? "exact" : undefined })
        .order("created_at", { ascending: false });

      const search = filters.search.trim().replaceAll(",", " ");
      if (search) {
        query = query.or(
          `name.ilike.%${search}%,phone_number.ilike.%${search}%,church.ilike.%${search}%`,
        );
      }

      if (filters.attended) {
        query = query.eq("attended_before", filters.attended === "Yes");
      }

      if (filters.willing) {
        query = query.eq("willing_to_travel", filters.willing);
      }

      if (filters.heard) {
        query = query.eq("heard_about", filters.heard);
      }

      if (filters.date) {
        const start = new Date(`${filters.date}T00:00:00`);
        const end = new Date(start);
        end.setDate(end.getDate() + 1);
        query = query
          .gte("created_at", start.toISOString())
          .lt("created_at", end.toISOString());
      }

      if (includeRange) {
        const from = page * pageSize;
        query = query.range(from, from + pageSize - 1);
      }

      return query;
    },
    [filters, page],
  );

  const fetchRegistrations = useCallback(async () => {
    setLoading(true);
    setError("");

    const [{ data, error: tableError, count }, statsResult] = await Promise.all(
      [buildQuery(true), buildQuery(false)],
    );

    if (tableError || statsResult.error) {
      setError("Unable to load registrations.");
      setRegistrations([]);
      setStatsRows([]);
    } else {
      setRegistrations(data || []);
      setStatsRows(statsResult.data || []);
      setTotalCount(count || 0);
    }

    setLoading(false);
  }, [buildQuery]);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const heardOptions = useMemo(
    () =>
      Array.from(
        new Set(statsRows.map((row) => row.heard_about).filter(Boolean)),
      )
        .sort()
        .map((value) => value),
    [statsRows],
  );

  const stats = useMemo(() => {
    const total = statsRows.length;
    const returning = statsRows.filter((row) => row.attended_before).length;
    const firstTime = total - returning;
    const outsideAkure = statsRows.filter((row) =>
      isOutsideAkure(row.location),
    ).length;
    const willing = statsRows.filter(
      (row) => row.willing_to_travel === "Yes",
    ).length;

    return { total, returning, firstTime, outsideAkure, willing };
  }, [statsRows]);

  const recent = statsRows.slice(0, 5);
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const updateFilter = (field, value) => {
    setFilters((current) => ({ ...current, [field]: value }));
    setPage(0);
  };

  const exportCsv = async () => {
    const { data, error: exportError } = await buildQuery(false);
    if (exportError) {
      setError("Unable to export registrations.");
      return;
    }

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

    const rows = (data || []).map((row) => [
      row.name,
      row.phone_number,
      row.church,
      row.attended_before ? "Yes" : "No",
      row.heard_about,
      row.heard_about_other,
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
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="bg-[#fafafa] px-6 pt-36 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-black uppercase tracking-wide text-orange-600">
              <FaUsers /> Registration Admin
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl font-black text-gray-900">
              Teenspray Registrations
            </h1>
            <p className="mt-3 max-w-2xl text-gray-600 font-medium">
              Search, filter, review, and export conference participant records.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={fetchRegistrations}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 font-bold text-gray-700 shadow-sm transition hover:border-orange-200 hover:text-orange-600"
            >
              <FaSyncAlt /> Refresh
            </button>
            <button
              type="button"
              onClick={exportCsv}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5"
            >
              <FaDownload /> Export CSV
            </button>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 font-bold text-gray-700 shadow-sm transition hover:border-red-200 hover:text-red-600"
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard label="Total Registrations" value={stats.total} />
          <StatCard label="First-Time Attendees" value={stats.firstTime} />
          <StatCard label="Returning Attendees" value={stats.returning} />
          <StatCard label="Outside Akure" value={stats.outsideAkure} />
          <StatCard label="Willing To Travel" value={stats.willing} />
        </div>

        <div className="mt-8 rounded-[2rem] border border-gray-100 bg-white p-5 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
            <label className="block">
              <span className="text-sm font-bold text-gray-700">Search</span>
              <div className="relative mt-2">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={filters.search}
                  onChange={(event) =>
                    updateFilter("search", event.target.value)
                  }
                  className="w-full rounded-2xl border border-gray-200 py-3 pl-11 pr-4 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  placeholder="Name, phone, or church"
                  type="search"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-gray-700">Attended</span>
              <select
                value={filters.attended}
                onChange={(event) =>
                  updateFilter("attended", event.target.value)
                }
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              >
                <option value="">All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-gray-700">Travel</span>
              <select
                value={filters.willing}
                onChange={(event) =>
                  updateFilter("willing", event.target.value)
                }
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              >
                <option value="">All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable (I Live In Akure)">
                  Not Applicable
                </option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-gray-700">
                Heard About
              </span>
              <select
                value={filters.heard}
                onChange={(event) => updateFilter("heard", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              >
                <option value="">All</option>
                {heardOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-gray-700">Date</span>
              <input
                value={filters.date}
                onChange={(event) => updateFilter("date", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                type="date"
              />
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_20rem]">
          <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
            {error && (
              <div className="border-b border-red-100 bg-red-50 p-4 font-semibold text-red-700">
                {error}
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left">
                <thead className="bg-gray-50 text-sm font-black uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-5 py-4">Name</th>
                    <th className="px-5 py-4">Phone Number</th>
                    <th className="px-5 py-4">Church</th>
                    <th className="px-5 py-4">Attended Before</th>
                    <th className="px-5 py-4">Heard About Program</th>
                    <th className="px-5 py-4">Location</th>
                    <th className="px-5 py-4">Willing To Travel</th>
                    <th className="px-5 py-4">Date Registered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-700">
                  {loading ? (
                    <tr>
                      <td className="px-5 py-8 text-center" colSpan="8">
                        Loading registrations...
                      </td>
                    </tr>
                  ) : registrations.length === 0 ? (
                    <tr>
                      <td className="px-5 py-8 text-center" colSpan="8">
                        No registrations found.
                      </td>
                    </tr>
                  ) : (
                    registrations.map((row) => (
                      <tr key={row.id} className="hover:bg-orange-50/40">
                        <td className="px-5 py-4 font-bold text-gray-900">
                          {row.name}
                        </td>
                        <td className="px-5 py-4">{row.phone_number}</td>
                        <td className="px-5 py-4">{row.church}</td>
                        <td className="px-5 py-4">
                          {row.attended_before ? "Yes" : "No"}
                        </td>
                        <td className="px-5 py-4">
                          {row.heard_about}
                          {row.heard_about_other
                            ? ` - ${row.heard_about_other}`
                            : ""}
                        </td>
                        <td className="px-5 py-4">{row.location}</td>
                        <td className="px-5 py-4">{row.willing_to_travel}</td>
                        <td className="px-5 py-4">
                          {formatDate(row.created_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-gray-500">
                Showing page {page + 1} of {totalPages} ({totalCount} records)
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={page === 0}
                  onClick={() => setPage((current) => Math.max(0, current - 1))}
                  className="rounded-full border border-gray-200 px-4 py-2 font-bold text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page + 1 >= totalPages}
                  onClick={() =>
                    setPage((current) => Math.min(totalPages - 1, current + 1))
                  }
                  className="rounded-full border border-gray-200 px-4 py-2 font-bold text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-gray-900">
              Recent Registrations
            </h2>
            <div className="mt-5 space-y-4">
              {recent.length === 0 ? (
                <p className="font-medium text-gray-500">
                  No recent registrations yet.
                </p>
              ) : (
                recent.map((row) => (
                  <div
                    key={row.id}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <p className="font-black text-gray-900">{row.name}</p>
                    <p className="mt-1 text-sm font-medium text-gray-600">
                      {row.church}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-orange-600">
                      {formatDate(row.created_at)}
                    </p>
                  </div>
                ))
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
