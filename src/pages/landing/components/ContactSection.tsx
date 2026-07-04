import { useState, useEffect } from "react";

interface ContactSectionProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactSection({ open, onClose }: ContactSectionProps) {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact sales modal"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-950/50 backdrop-blur-[3px]"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[780px] max-h-[95vh] bg-white rounded-2xl sm:rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.22)] overflow-hidden animate-modal-in">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-20"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div>
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-10 sm:py-16 px-6 sm:px-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e8f5ee] flex items-center justify-center mb-4 sm:mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1b4e3a" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-[1.3rem] sm:text-[1.5rem] font-bold text-forest-950 mb-2">Message Sent!</h3>
              <p className="text-[13.5px] sm:text-[14px] text-gray-500 max-w-[340px] leading-[1.6]">
                Thank you for reaching out. Our team will get back to you within 1 business day to discuss your custom plan.
              </p>
              <button
                className="mt-6 sm:mt-8 bg-forest-900 text-white font-semibold text-[14px] py-3 px-8 rounded-xl hover:bg-forest-700 transition-colors"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">
              {/* Left info panel — hidden on mobile, shown from md breakpoint up */}
              <div className="hidden md:flex bg-forest-900 text-white p-8 flex-col justify-between">
                <div>
                  <span className="text-[18px] font-extrabold tracking-[-0.02em] uppercase">ATTENDEX</span>
                  <div className="mt-8">
                    <span className="inline-block mb-3 text-[10.5px] font-bold tracking-[0.1em] uppercase bg-[#8fd6ac]/20 text-[#8fd6ac] px-3 py-1 rounded-full border border-[#8fd6ac]/30">
                      Business Plan
                    </span>
                    <h2 className="text-[1.5rem] font-semibold leading-[1.25] mb-3">
                      Let's build a plan<br />for your business
                    </h2>
                    <p className="text-[12.5px] text-white/65 leading-[1.65]">
                      For multi-location teams, franchise operations, or organisations that need custom integrations and dedicated support.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {[
                    { icon: "📍", label: "Custom seat limits & roles" },
                    { icon: "🔗", label: "HR system integrations" },
                    { icon: "👤", label: "Dedicated account manager" },
                    { icon: "⚡", label: "Priority SLA support" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-[12.5px] text-white/80">
                      <span className="text-[16px]">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[11px] text-white/50 mb-2">Prefer to talk directly?</p>
                  <a href="mailto:sales@attendex.io" className="text-[12.5px] text-[#8fd6ac] hover:underline font-medium">
                    sales@attendex.io
                  </a>
                </div>
              </div>

              {/* Right form panel — full width on mobile */}
              <div className="p-5 sm:p-8">
                {/* Logo shown only on mobile since left panel is hidden */}
                <span className="md:hidden block text-[15px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase mb-2.5">ATTENDEX</span>

                <h3 className="text-[1rem] sm:text-[1.25rem] font-bold text-forest-950 mb-0.5 sm:mb-1">Get in touch</h3>
                <p className="text-[11.5px] sm:text-[13px] text-gray-500 mb-3 sm:mb-6">Tell us about your team and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="contact-fullName" className="text-[11px] sm:text-[12px] font-semibold text-forest-900">Full Name *</label>
                      <input
                        id="contact-fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0dc] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[12.5px] sm:text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="contact-companyName" className="text-[11px] sm:text-[12px] font-semibold text-forest-900">Company Name *</label>
                      <input
                        id="contact-companyName"
                        name="companyName"
                        type="text"
                        placeholder="Acme Corp"
                        required
                        value={form.companyName}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0dc] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[12.5px] sm:text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Work Email + Phone side by side on mobile to save vertical space */}
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5 sm:gap-4">
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="contact-email" className="text-[11px] sm:text-[12px] font-semibold text-forest-900">Work Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0dc] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[12.5px] sm:text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="contact-phone" className="text-[11px] sm:text-[12px] font-semibold text-forest-900">Phone <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0dc] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[12.5px] sm:text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400"
                      />
                    </div>

                    {/* Team Size */}
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="contact-teamSize" className="text-[11px] sm:text-[12px] font-semibold text-forest-900">Team Size *</label>
                      <select
                        id="contact-teamSize"
                        name="teamSize"
                        required
                        value={form.teamSize}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0dc] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[12.5px] sm:text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select size</option>
                        <option value="50-100">50 – 100 employees</option>
                        <option value="100-250">100 – 250 employees</option>
                        <option value="250-500">250 – 500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                  </div>

                  {/* Message — fewer rows on mobile */}
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label htmlFor="contact-message" className="text-[11px] sm:text-[12px] font-semibold text-forest-900">Message <span className="text-gray-400 font-normal">(optional)</span></label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={2}
                      placeholder="Tell us about your use case or any specific requirements…"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-[#e0e0dc] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[12.5px] sm:text-[13px] text-forest-950 bg-[#fafafa] outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-100 transition-all placeholder:text-gray-400 resize-none sm:rows-3"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-forest-900 hover:bg-forest-700 text-white font-semibold text-[13px] sm:text-[14px] py-2.5 sm:py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-0.5 sm:mt-1"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                          <path d="M12 2a10 10 0 0110 10" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Contact Sales"
                    )}
                  </button>

                  <p className="text-center text-[10px] sm:text-[11px] text-gray-400">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-forest-700 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}