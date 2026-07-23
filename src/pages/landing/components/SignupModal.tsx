import { useState, useEffect } from "react";


interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  planName?: string;
}

export default function SignupModal({ open, onClose, planName }: SignupModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/login";
    }, 1200);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Sign up modal"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-950/50 backdrop-blur-[3px]"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[860px] max-h-[90vh] bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.22)] overflow-hidden flex flex-col md:flex-row animate-modal-in">

        {/* Image side — hidden on mobile */}
        <div className="hidden md:flex md:w-[42%] relative flex-shrink-0 overflow-hidden">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950 to-forest-900" />
          {/* Content over image */}
          <div className="relative z-10 flex flex-col justify-between p-8 text-white w-full">
            <span className="text-[18px] font-extrabold tracking-[-0.02em] uppercase">ATTENDEX</span>
            <div>
              {planName && (
                <span className="inline-block mb-3 text-[10.5px] font-bold tracking-[0.1em] uppercase bg-[#8fd6ac]/20 text-[#8fd6ac] px-3 py-1 rounded-full border border-[#8fd6ac]/30">
                  {planName} Plan
                </span>
              )}
              <h2 className="text-[1.6rem] font-semibold leading-[1.2] mb-3">
                Start managing your<br />team smarter today
              </h2>
              <p className="text-[13px] text-white/70 leading-[1.6]">
                Join thousands of managers who use ATTENDEX to track attendance, assign tasks, and generate reports.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                {[
                  "14-day free trial, no credit card",
                  "Cancel any time",
                  "Onboarding support included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[12px] text-white/80">
                    <span className="w-4 h-4 rounded-full bg-[#8fd6ac]/30 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8fd6ac" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       {/* Form side */}
<div className="flex-1 p-6 sm:p-7 flex flex-col justify-center">
  {/* Close button */}
  <button
    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-20"
    onClick={onClose}
    aria-label="Close"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </button>

  <div className="mb-4">
    <span className="md:hidden block text-[17px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase mb-3">ATTENDEX</span>
    <h2 className="text-[1.4rem] font-bold text-forest-950 tracking-[-0.02em] mb-1">Create your account</h2>
    <p className="text-[13px] text-gray-500">
      {planName ? `Getting started with the ${planName} plan` : "Fill in the form below to get started"}
    </p>
  </div>

  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="modal-fullName" className="text-[12.5px] font-semibold text-forest-900">
          Full Name
        </label>
        <input
          id="modal-fullName"
          name="fullName"
          type="text"
          placeholder="John Doe"
          required
          value={form.fullName}
          onChange={handleChange}
          className="w-full border border-[#e0e0dc] rounded-xl px-3.5 py-2.5 text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="modal-companyName" className="text-[12.5px] font-semibold text-forest-900">
          Company Name
        </label>
        <input
          id="modal-companyName"
          name="companyName"
          type="text"
          placeholder="Acme Corp"
          required
          value={form.companyName}
          onChange={handleChange}
          className="w-full border border-[#e0e0dc] rounded-xl px-3.5 py-2.5 text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
        />
      </div>
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1.5">
      <label htmlFor="modal-email" className="text-[12.5px] font-semibold text-forest-900">
        Work Email
      </label>
      <input
        id="modal-email"
        name="email"
        type="email"
        placeholder="you@company.com"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full border border-[#e0e0dc] rounded-xl px-3.5 py-2.5 text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
      />
    </div>

    {/* Password + Confirm Password — side by side */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="modal-password" className="text-[12.5px] font-semibold text-forest-900">
          Password
        </label>
        <div className="relative">
          <input
            id="modal-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 characters"
            required
            minLength={8}
            value={form.password}
            onChange={handleChange}
            className="w-full border border-[#e0e0dc] rounded-xl px-3.5 py-2.5 pr-10 text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setShowPassword((v) => !v)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="modal-confirmPassword" className="text-[12.5px] font-semibold text-forest-900">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="modal-confirmPassword"
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Repeat your password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border border-[#e0e0dc] rounded-xl px-3.5 py-2.5 pr-10 text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setShowConfirm((v) => !v)}
            aria-label="Toggle confirm password visibility"
          >
            {showConfirm ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-forest-900 hover:bg-forest-700 text-white font-semibold text-[14px] py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-0.5"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0110 10" /></svg>
          Creating account…
        </span>
      ) : (
        "Create Account"
      )}
    </button>

    <div className="relative flex items-center gap-3 my-0.5">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-[11px] text-gray-400 font-medium">or continue with</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>

    <button
      type="button"
      className="w-full flex items-center justify-center gap-2.5 border border-[#e0e0dc] rounded-xl py-2.5 text-[13px] font-medium text-forest-950 bg-white hover:bg-gray-50 transition-colors"
    >
      <svg width="17" height="17" viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
      </svg>
      Sign up with Google
    </button>

    <p className="text-center text-[12px] text-gray-500 mt-0.5">
      Already have an account?{" "}
      <a href="/login" className="text-forest-900 font-semibold hover:underline">
        Sign in
      </a>
    </p>
  </form>
</div>
      </div>
    </div>
  );
}
