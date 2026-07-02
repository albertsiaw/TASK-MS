import phonePng from "../../../assets/phone.png";

export default function CTA() {
  return (
    <section className="pb-14">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6">
        <div className="bg-forest-900 text-white rounded-3xl overflow-visible flex flex-col md:flex-row items-stretch justify-between relative">
          {/* Background dot pattern */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          </div>

          {/* Text side */}
          <div className="flex-1 p-8 sm:p-12 pb-8 sm:pb-10 relative z-10">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.2] mb-4">Change the way you<br />use your <span className="text-[#8fd6ac] font-playfair italic font-normal">pipeline</span></h2>
            <p className="text-[12px] text-[#c3d3c9] leading-[1.7] mb-6 max-w-[380px]">Join over a million project leads and developers who choose ATTENDEX for lightweight, lightning-fast platform monitoring.</p>
            <a href="#pricing" className="inline-block bg-white text-forest-900 py-[13px] px-[22px] rounded-lg font-semibold text-[12.5px] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.15)]">Get Started Now</a>
          </div>

          {/* Phone image — floats above card on desktop, contained on mobile */}
          <div className="relative flex items-end justify-center w-full md:w-[320px] shrink-0 z-20
            h-[220px] md:h-auto md:min-h-[260px]">
            {/* Mobile: normal in-flow image, centred */}
            <img
              src={phonePng}
              alt="ATTENDEX mobile app"
              className="block md:hidden h-[200px] w-auto object-contain mx-auto"
              style={{ filter: "drop-shadow(0 20px 32px rgba(0,0,0,0.5))" }}
            />
            {/* Desktop: absolute, floats out of card top */}
            <img
              src={phonePng}
              alt="ATTENDEX mobile app"
              className="hidden md:block object-contain transition-transform duration-500 hover:-translate-y-4"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                height: "140%",
                maxHeight: 420,
                filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.55))"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
