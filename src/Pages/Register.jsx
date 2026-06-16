import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaChevronDown,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import SEO from "../Components/SEO";

const heardAboutOptions = [
  "Friend",
  "Church",
  "Social Media",
  "WhatsApp",
  "Facebook",
  "Instagram",
  "Flyer",
  "Previous Attendee",
  "Other",
];

const initialForm = {
  name: "",
  phone_number: "",
  church: "",
  attended_before: "",
  heard_about: "",
  heard_about_other: "",
  location: "",
  willing_to_travel: "",
};

function validateForm(form) {
  const errors = {};
  const phonePattern = /^[+\d][\d\s().-]{6,19}$/;

  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.phone_number.trim()) {
    errors.phone_number = "Phone number is required.";
  } else if (!phonePattern.test(form.phone_number.trim())) {
    errors.phone_number = "Enter a valid phone number.";
  }
  if (!form.church.trim()) errors.church = "Church is required.";
  if (!form.attended_before) {
    errors.attended_before = "Select an option.";
  }
  if (!form.heard_about) errors.heard_about = "Select an option.";
  if (form.heard_about === "Other" && !form.heard_about_other.trim()) {
    errors.heard_about_other = "Please specify how you heard about us.";
  }
  if (!form.location.trim()) errors.location = "Location is required.";
  if (!form.willing_to_travel) {
    errors.willing_to_travel = "Select an option.";
  }

  return errors;
}

function FieldError({ children }) {
  if (!children) return null;
  return <p className="mt-2 text-sm font-semibold text-red-600">{children}</p>;
}

export default function Register() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const isOtherSelected = form.heard_about === "Other";
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "heard_about" && value !== "Other"
        ? { heard_about_other: "" }
        : {}),
    }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    setSuccess(false);

    if (Object.keys(nextErrors).length > 0) return;

    if (!isSupabaseConfigured) {
      setSubmitError(
        "Registration is not available yet. Supabase environment variables are missing.",
      );
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const payload = {
      name: form.name.trim(),
      phone_number: form.phone_number.trim(),
      church: form.church.trim(),
      attended_before: form.attended_before === "Yes",
      heard_about: form.heard_about,
      heard_about_other: isOtherSelected ? form.heard_about_other.trim() : null,
      location: form.location.trim(),
      willing_to_travel: form.willing_to_travel,
    };

    const { error } = await supabase.from("registrations").insert(payload);

    setSubmitting(false);

    if (error) {
      setSubmitError(
        "We could not save your registration right now. Please try again.",
      );
      return;
    }

    setForm(initialForm);
    setErrors({});
    setSuccess(true);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Register for TeenSpray"
        description="Register for the upcoming TeensPray Conference and secure your participation."
        url="/register"
      />
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#090909] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.22),transparent_34%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wide text-orange-300">
            TeensPray Conference
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
            TeensPray Conference Registration
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            Register for the upcoming TeensPray Conference and secure your
            participation.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        {success && (
          <div
            className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900"
            role="status"
          >
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 text-emerald-600" />
              <div>
                <h2 className="text-xl font-black">Registration received</h2>
                <p className="mt-2 font-medium">
                  Thank you for registering for TeensPray. We look forward to
                  seeing you at the conference.
                </p>
              </div>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[2rem] border border-gray-100 bg-white p-6 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
        >
          {submitError && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
              {submitError}
            </div>
          )}

          {hasErrors && (
            <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-800">
              Please review the highlighted fields and try again.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="flex items-center gap-2 text-sm font-bold text-gray-800">
                <FaUser className="text-orange-500" /> Name
              </span>
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                type="text"
                required
                autoComplete="name"
              />
              <FieldError>{errors.name}</FieldError>
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-sm font-bold text-gray-800">
                <FaPhoneAlt className="text-orange-500" /> Phone Number
              </span>
              <input
                value={form.phone_number}
                onChange={(event) =>
                  updateField("phone_number", event.target.value)
                }
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                type="tel"
                required
                autoComplete="tel"
              />
              <FieldError>{errors.phone_number}</FieldError>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-gray-800">Church</span>
              <input
                value={form.church}
                onChange={(event) => updateField("church", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                type="text"
                required
              />
              <FieldError>{errors.church}</FieldError>
            </label>

            <label className="block">
              <span className="flex items-center gap-2 text-sm font-bold text-gray-800">
                <FaMapMarkerAlt className="text-orange-500" /> Location
              </span>
              <input
                value={form.location}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                type="text"
                placeholder="City, State"
                required
              />
              <FieldError>{errors.location}</FieldError>
            </label>
          </div>

          <fieldset className="mt-8">
            <legend className="text-sm font-bold text-gray-800">
              Have You Attended TeensPray Before?
            </legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 transition has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50"
                >
                  <input
                    type="radio"
                    name="attended_before"
                    checked={form.attended_before === option}
                    onChange={() => updateField("attended_before", option)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
            <FieldError>{errors.attended_before}</FieldError>
          </fieldset>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-bold text-gray-800">
                How Did You Hear About The Program?
              </span>
              <div className="relative mt-2">
                <select
                  value={form.heard_about}
                  onChange={(event) =>
                    updateField("heard_about", event.target.value)
                  }
                  className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-3 pr-10 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  required
                >
                  <option value="">Select an option</option>
                  {heardAboutOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <FieldError>{errors.heard_about}</FieldError>
            </label>

            {isOtherSelected && (
              <label className="block">
                <span className="text-sm font-bold text-gray-800">
                  Please Specify
                </span>
                <input
                  value={form.heard_about_other}
                  onChange={(event) =>
                    updateField("heard_about_other", event.target.value)
                  }
                  className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  type="text"
                  required
                />
                <FieldError>{errors.heard_about_other}</FieldError>
              </label>
            )}
          </div>

          <fieldset className="mt-8">
            <legend className="text-sm font-bold text-gray-800">
              If Outside Akure Are You Willing To Travel Down For The Program?
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {["Yes", "No", "Not Applicable (I Live In Akure)"].map(
                (option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 transition has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50"
                  >
                    <input
                      type="radio"
                      name="willing_to_travel"
                      checked={form.willing_to_travel === option}
                      onChange={() => updateField("willing_to_travel", option)}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ),
              )}
            </div>
            <FieldError>{errors.willing_to_travel}</FieldError>
          </fieldset>

          <button
            type="submit"
            disabled={submitting}
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-lg font-black text-white shadow-[0_14px_35px_rgba(239,68,68,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(239,68,68,0.34)] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
          >
            {submitting ? "Registering..." : "Register Now"}
          </button>
        </form>
      </section>
    </div>
  );
}
