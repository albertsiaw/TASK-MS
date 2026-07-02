import { IconInstagram, IconLinkedin } from "./icons";

function FooterWave() {
  return (
    <svg className="block w-full h-auto -mb-0.5" viewBox="0 0 1440 90" preserveAspectRatio="none">
      <path d="M0,40 C240,90 480,0 720,20 C960,40 1200,85 1440,30 L1440,90 L0,90 Z" fill="var(--color-forest-900)" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-forest-900 text-[#eaf3ee] overflow-hidden">
      <FooterWave />

      {/* Newsletter section — compact on mobile */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 text-center relative">
        <h2 className="font-baloo font-bold tracking-[0.02em] text-[clamp(1.8rem,5vw,3.2rem)] text-white uppercase leading-none mb-3">Newsletter</h2>
        <p className="text-[#eaf3ee] font-semibold text-[12.5px] leading-[1.6] max-w-[520px] mx-auto mb-0.5">ATTENDEX also has a newsletter!</p>
        <p className="text-[12px] text-[#c3d3c9] leading-[1.6] max-w-[520px] mx-auto hidden sm:block">On the agenda: product tips and workforce-management advice delivered to your inbox every week.</p>
        <div className="text-[12.5px] font-bold text-white mt-4 mb-3">Sign up for free</div>
        <form className="flex flex-col sm:flex-row justify-center gap-2.5 max-w-[420px] mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input className="flex-1 min-w-0 bg-white/5 border border-white/20 rounded-full py-2.5 px-4 text-[12.5px] text-white outline-none placeholder:text-[#9fb3a8] focus:border-[#8fd6ac]" type="email" placeholder="E-mail*" required />
          <button className="w-full sm:w-auto bg-[#b7f3c4] text-forest-950 font-bold text-xs py-2.5 px-5 rounded-full whitespace-nowrap transition-all duration-150 hover:bg-[#9fe8b1] hover:-translate-y-[1px]" type="submit">Subscribe me</button>
        </form>
        <p className="text-[10px] text-[#8fa79b] mt-2">By signing up, you agree to our privacy policy.</p>
      </section>

      <section className="pb-10 sm:pb-14 px-4 sm:px-6 relative">
        <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1.3fr] gap-y-7 gap-x-5 md:gap-7">
          <div>
            <h5 className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#8fd6ac] mb-3">Product</h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Attendance tracking</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Task assignment</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Reporting</a></li>
              <li><a href="#pricing" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#8fd6ac] mb-3">Features</h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Daily clock-in</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Weekly summaries</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Monthly reports</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Mobile app</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#8fd6ac] mb-3">ATTENDEX</h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">About us</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Contact us</a></li>
              <li><a href="#" className="text-[12px] text-[#d7e4dd] transition-colors duration-150 hover:text-white">Our blog</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h5 className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#8fd6ac] mb-3">Join the ATTENDEX Club</h5>
            <p className="text-xs text-[#c3d3c9] leading-[1.55] mb-3">Receive exclusive product tips and advice from ATTENDEX. It's free!</p>
            <form className="flex gap-2 mb-3" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 min-w-0 bg-white/5 border border-white/20 rounded-full py-2.5 px-3.5 text-[12px] text-white outline-none placeholder:text-[#9fb3a8] focus:border-[#8fd6ac]" type="email" placeholder="E-mail" required />
              <button className="bg-[#b7f3c4] text-forest-950 font-bold text-xs py-2.5 px-4 rounded-full transition-all duration-150 hover:bg-[#9fe8b1]" type="submit">Go</button>
            </form>
            <p className="text-[10px] text-[#8fa79b] mb-3">By signing up, you agree to our privacy policy.</p>
            <div className="flex gap-2.5">
              <a href="#" className="w-[28px] h-[28px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" className="w-[28px] h-[28px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" aria-label="LinkedIn"><IconLinkedin /></a>
            </div>
          </div>
        </div>
      </section>

      <div className="font-baloo font-extrabold text-white text-center text-[clamp(2.4rem,10vw,7rem)] leading-[0.85] tracking-[-0.01em] py-2 px-5 pb-6 select-none uppercase">ATTENDEX</div>

      <div className="border-t border-white/10 py-4 px-4 sm:px-6 flex flex-col sm:flex-row flex-wrap justify-between gap-3 max-w-[1180px] mx-auto">
        <div className="text-[10px] text-[#8fa79b]">
          © 2026 ATTENDEX. All rights reserved.
        </div>
        <div className="flex flex-row gap-4 text-[10.5px]">
          <a href="#" className="text-[#d7e4dd] hover:text-white">Legal notices</a>
          <a href="#" className="text-[#d7e4dd] hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
