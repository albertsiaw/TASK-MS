import { useState } from "react";
import { IconArrow } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 left-0 z-[100] bg-white/95 backdrop-blur-md transition-all py-4 shadow-sm">
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
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[340px] bg-white z-[70] flex flex-col pt-8 px-6 pb-8 shadow-[-10px_0_40px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <span className="text-[20px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase">ATTENDX</span>
          <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex flex-col gap-2 flex-grow">
          <a href="#" className="py-3 px-4 text-[16px] font-medium text-gray-700 hover:text-forest-900 hover:bg-forest-50/50 rounded-xl transition-all duration-200" onClick={() => setOpen(false)}>Features</a>
          <a href="#" className="py-3 px-4 text-[16px] font-medium text-gray-700 hover:text-forest-900 hover:bg-forest-50/50 rounded-xl transition-all duration-200" onClick={() => setOpen(false)}>Attendance</a>
          <a href="#" className="py-3 px-4 text-[16px] font-medium text-gray-700 hover:text-forest-900 hover:bg-forest-50/50 rounded-xl transition-all duration-200" onClick={() => setOpen(false)}>Task Assignment</a>
          <a href="#pricing" className="py-3 px-4 text-[16px] font-medium text-gray-700 hover:text-forest-900 hover:bg-forest-50/50 rounded-xl transition-all duration-200" onClick={() => setOpen(false)}>Pricing</a>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4">
          <a href="#" className="w-full bg-forest-800 text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 text-[15px] font-medium hover:bg-forest-700 shadow-sm" onClick={() => setOpen(false)}>
            Get Started <IconArrow stroke="currentColor" strokeWidth="2.4" width="16" height="16" />
          </a>
        </div>
      </div>
    </nav>
  );
}
