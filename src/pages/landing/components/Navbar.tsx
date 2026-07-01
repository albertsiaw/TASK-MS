import { useState } from "react";
import { IconArrow } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-4 relative">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-11">
          <span className="text-[21px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase">ATTENDX</span>
          <div className="hidden md:flex gap-[30px] text-[13.5px] font-medium text-[#4b4b48]">
            <a href="#" className="hover:text-forest-900 transition-colors duration-150">Features</a>
            <a href="#" className="hover:text-forest-900 transition-colors duration-150">Attendance</a>
            <a href="#" className="hover:text-forest-900 transition-colors duration-150">Task Assignment</a>
            <a href="#pricing" className="hover:text-forest-900 transition-colors duration-150">Pricing</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-[18px] text-[13.5px] font-medium">
          <a href="#" className="text-[#3f3f3c] hover:text-forest-900 transition-colors duration-150">Login</a>
          <a href="#" className="bg-forest-800 text-white py-[9px] px-[18px] rounded-full inline-flex items-center gap-1.5 transition-all duration-150 text-[13.5px] hover:bg-forest-700 hover:-translate-y-[1px]">
            Get Started <IconArrow stroke="currentColor" strokeWidth="2.4" width="14" height="14" />
          </a>
        </div>
        <button className="md:hidden flex p-1.5 z-50 relative" aria-label="Menu" onClick={() => setOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
      </div>

      <div className={`fixed inset-0 bg-forest-950/35 backdrop-blur-[2px] z-[60] transition-opacity duration-280 ease-out ${open ? "block opacity-100" : "hidden opacity-0"}`} onClick={() => setOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-[78%] max-w-[320px] bg-white z-[70] flex flex-col pt-[26px] px-[26px] pb-[30px] shadow-[-8px_0_30px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between mb-[18px]">
          <span className="text-[19px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase">ATTENDX</span>
          <button className="p-1.5" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <a href="#" className="py-3.5 px-0.5 text-[15px] font-medium border-b border-cdc-border text-[#3f3f3c]" onClick={() => setOpen(false)}>Features</a>
        <a href="#" className="py-3.5 px-0.5 text-[15px] font-medium border-b border-cdc-border text-[#3f3f3c]" onClick={() => setOpen(false)}>Attendance</a>
        <a href="#" className="py-3.5 px-0.5 text-[15px] font-medium border-b border-cdc-border text-[#3f3f3c]" onClick={() => setOpen(false)}>Task Assignment</a>
        <a href="#pricing" className="py-3.5 px-0.5 text-[15px] font-medium border-b border-cdc-border text-[#3f3f3c]" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#" className="py-3.5 px-0.5 text-[15px] font-medium border-b border-cdc-border text-[#3f3f3c]" onClick={() => setOpen(false)}>Login</a>
        <a href="#" className="mt-[18px] bg-forest-800 text-white py-[9px] px-[18px] rounded-full inline-flex items-center justify-center gap-1.5 transition-colors duration-150 text-[13.5px] hover:bg-forest-700" onClick={() => setOpen(false)}>Get Started</a>
      </div>
    </nav>
  );
}
