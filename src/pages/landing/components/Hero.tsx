import phonePng from "../../../assets/phone.png";

export default function Hero() {
  return (
    <header className="py-7 md:py-8 lg:pb-14 min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center">
        <div className="flex flex-col justify-center order-1 lg:order-none">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-forest-950 mb-6">
            Change the way<br />
            you manage<br />
            <span className="font-playfair italic font-normal text-forest-900">attendance</span>
          </h1>
          <p className="text-[#5c5c58] text-[14px] leading-[1.65] lg:max-w-[400px] mb-8">
            From daily clock-ins, to planning for your future with better reporting, ATTENDEX helps you get more from your workforce.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <a href="#pricing" className="bg-forest-900 text-white py-3.5 px-7 rounded-full font-semibold text-[14px] transition-all duration-150 hover:bg-forest-800 hover:shadow-lg">Get Started Now</a>
            <div className="flex flex-col gap-0.5">
              <span className="text-amber text-[15px] tracking-[2px]">★★★★★ <span className="text-forest-950 font-bold ml-1 text-[13px]">5.0</span></span>
              <span className="text-[11px] text-gray-600 font-medium">from 120+ <span className="underline cursor-pointer decoration-muted-lt">reviews</span></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-4 order-2 lg:order-none w-full min-h-[380px] lg:min-h-[460px]">
          {/* Card 1: Top Left — phone mockup */}
          <div className="bg-[#e2e8e5] rounded-tl-[32px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[4px] flex flex-col items-center justify-center relative overflow-hidden h-[190px] lg:h-[230px]">
            <img
              src={phonePng}
              alt="ATTENDEX mobile app"
              className="absolute bottom-0 right-0 h-[140%] max-w-none w-auto object-contain drop-shadow-2xl"
              style={{ transform: "translateX(12%) translateY(18%) rotate(-6deg)" }}
            />
            <div className="absolute top-5 left-5 z-10">
              <span className="text-[11px] font-bold text-forest-950 block"></span>
              <span className="text-[10px] text-forest-800 opacity-70">Clock in anywhere</span>
            </div>
          </div>

          {/* Card 2: Top Right */}
          <div className="bg-[#f2efe8] rounded-tr-[32px] rounded-tl-[4px] rounded-br-[4px] rounded-bl-[4px] relative overflow-hidden flex flex-col p-5 h-[190px] lg:h-[230px]">
            <div className="absolute -left-10 top-0 bottom-0 w-[60%] bg-[#e6e2d8] rounded-[100%]" />
            <div className="relative z-10 flex flex-col items-end h-full w-full">
              <span className="text-[2.4rem] lg:text-[3.2rem] font-medium text-forest-950 tracking-[-0.04em] leading-none mt-1">98%</span>
              <span className="text-[13px] font-medium text-forest-900 mt-4">Attendance Rate</span>
              <svg className="mt-auto w-12 h-12 opacity-80 stroke-forest-900" viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                <path d="M2.5 8h19M2.5 16h19" />
              </svg>
            </div>
          </div>

          {/* Card 3: Bottom Left */}
          <div className="bg-[#e4ece7] rounded-bl-[32px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] p-5 flex flex-col relative overflow-hidden h-[190px] lg:h-[230px]">
            <div className="absolute top-0 right-0 w-[65%] h-[60%] bg-white rounded-bl-[100%]" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex gap-1.5 mt-2 ml-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#1b4e3a"><path d="M12 2l2.4 8.2L22 12l-7.6 1.8L12 22l-2.4-8.2L2 12l7.6-1.8z" /></svg>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#1b4e3a"><path d="M12 2l2.4 8.2L22 12l-7.6 1.8L12 22l-2.4-8.2L2 12l7.6-1.8z" /></svg>
              </div>
              <div className="flex flex-col items-end w-full">
                <span className="text-[14px] font-medium text-forest-950 mb-6 mr-1">Users Active</span>
                <div className="flex items-center w-full justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#fcd34d] border-[2px] border-[#e4ece7] z-30" />
                    <div className="w-8 h-8 rounded-full bg-[#f87171] border-[2px] border-[#e4ece7] z-20" />
                    <div className="w-8 h-8 rounded-full bg-[#60a5fa] border-[2px] border-[#e4ece7] z-10" />
                  </div>
                  <div className="w-[34px] h-[34px] rounded-full bg-forest-950 flex items-center justify-center cursor-pointer hover:bg-forest-900 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M7 17L17 7M17 7H9M17 7v8" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom Right */}
          <div className="bg-[#1b4e3a] rounded-br-[32px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] p-5 flex flex-col justify-between h-[190px] lg:h-[230px]">
            <div className="flex justify-between items-center text-white">
              <span className="text-[1.7rem] lg:text-[2rem] font-medium tracking-tight">312 hrs</span>
              <span className="text-[16px]">↑</span>
            </div>
            <svg className="w-full h-14 my-auto opacity-95" viewBox="0 0 100 30" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0,25 L5,24 L10,22 L15,26 L20,18 L25,19 L30,12 L35,14 L40,8 L45,11 L50,15 L55,5 L60,8 L65,0 L70,3 L75,-5 L80,2 L85,-10 L90,-5 L100,-15" transform="translate(0, 10) scale(1, 0.7)" />
            </svg>
            <div className="text-right text-white/90 text-[14px] font-medium mt-auto">Saved</div>
          </div>
        </div>
      </div>
    </header>
  );
}
