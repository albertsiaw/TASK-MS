import { useState } from "react";
import { IconArrow } from "./icons";

const NAV_LINKS = [
  { label: "Features", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Task Assignment", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
];

function smoothScrollTo(href: string, closeMenu?: () => void) {
  if (closeMenu) closeMenu();
  if (href.startsWith("#")) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    smoothScrollTo(href, () => setOpen(false));
  };

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-[100] bg-white/95 backdrop-blur-md transition-all py-4 shadow-sm">
        <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-11">
            <button
              className="text-[21px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase cursor-pointer"
              onClick={() => smoothScrollTo("#hero")}
              aria-label="Go to top"
            >
              ATTENDEX
            </button>
            <div className="hidden md:flex gap-[30px] text-[13.5px] font-medium text-[#4b4b48]">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-forest-900 transition-colors duration-150 cursor-pointer bg-transparent border-none font-medium text-[13.5px] text-[#4b4b48]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-[18px] text-[13.5px] font-medium">
            <a href="/login" className="text-[#3f3f3c] hover:text-forest-900 transition-colors duration-150">Login</a>
            <button
              onClick={() => handleNavClick("#pricing")}
              className="bg-forest-800 text-white py-[9px] px-[18px] rounded-full inline-flex items-center gap-1.5 transition-all duration-150 text-[13.5px] hover:bg-forest-700 hover:-translate-y-[1px] cursor-pointer border-none font-medium"
            >
              Get Started <IconArrow stroke="currentColor" strokeWidth="2.4" width="14" height="14" />
            </button>
          </div>
          <button className="md:hidden flex p-1.5 z-50 relative" aria-label="Menu" onClick={() => setOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-forest-950/35 backdrop-blur-[2px] z-[150] transition-opacity duration-280 ease-out ${open ? "block opacity-100" : "hidden opacity-0"}`} onClick={() => setOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[340px] bg-white z-[160] flex flex-col pt-8 px-6 pb-8 shadow-[-10px_0_40px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <span className="text-[20px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase">ATTENDEX</span>
          <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f2e20" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex flex-col gap-2 flex-grow">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="py-3 px-4 text-[16px] font-medium text-gray-700 hover:text-forest-900 hover:bg-forest-50/50 rounded-xl transition-all duration-200 text-left cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-3">
          <a href="/login" className="w-full text-center border border-[#e0e0dc] text-forest-900 py-3.5 px-6 rounded-full flex items-center justify-center text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Login
          </a>
          <button
            onClick={() => handleNavClick("#pricing")}
            className="w-full bg-forest-800 text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 text-[15px] font-medium hover:bg-forest-700 shadow-sm cursor-pointer border-none"
          >
            Get Started <IconArrow stroke="currentColor" strokeWidth="2.4" width="16" height="16" />
          </button>
        </div>
      </div>
    </>
  );
}
