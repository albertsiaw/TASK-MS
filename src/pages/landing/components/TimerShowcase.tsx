import { IconClock, IconCalendar, IconChart } from "./icons";
import timerAppPng from "../../../assets/Timer_App.png";

export default function TimerShowcase() {
  return (
    <section className="py-12">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-forest-100 to-forest-50 rounded-3xl blur-2xl opacity-50" />
            <img
              src={timerAppPng}
              alt="ATTENDEX time management"
              className="relative w-full max-w-[360px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
        <div>
          <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted-lt block mb-2.5">PROJECT MANAGEMENT</span>
          <h2 className="text-[clamp(1.45rem,2.5vw,1.9rem)] font-semibold text-forest-900 tracking-[-0.01em] mb-4">Everything in sync, all the time</h2>
          <p className="text-[13px] text-gray-600 leading-[1.7] mb-6">From setting schedules to tracking project milestones — ATTENDEX gives you the tools to coordinate your entire workforce from a single, streamlined hub.</p>
          <div className="flex flex-col gap-3">
            {[
              { icon: <IconClock width="14" height="14" stroke="#1b4e3a" />, text: "Real-time attendance dashboard" },
              { icon: <IconCalendar width="14" height="14" stroke="#1b4e3a" />, text: "Automated weekly & monthly reports" },
              { icon: <IconChart width="14" height="14" stroke="#1b4e3a" />, text: "HR-ready analytics & exports" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-forest-50 border border-forest-200 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-[13px] text-forest-900 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
