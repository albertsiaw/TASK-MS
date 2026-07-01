import humanTablePng from "../../../assets/human-table.png";

export default function About() {
  return (
    <section className="py-10 border-t border-cdc-border">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center">
        <div className="flex flex-col justify-center">
          <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted-lt block mb-2.5">ABOUT ATTENDX</span>
          <h2 className="text-[clamp(1.55rem,2.6vw,2.15rem)] font-semibold text-forest-900 mb-3.5 max-w-[520px]">One system for attendance, tasks, and everything in between</h2>
          <p className="text-muted text-[12px] sm:text-[13px] max-w-[440px] leading-[1.65]">Stop juggling spreadsheets and sign-in sheets. ATTENDX brings clock-ins, attendance summaries, and tasks into one dashboard — giving your managers the visibility they need and your employees the clarity they deserve.</p>
        </div>
        <div className="flex justify-center">
          <img
            src={humanTablePng}
            alt="Teams collaborating with ATTENDX"
            className="w-full max-w-[400px] object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
