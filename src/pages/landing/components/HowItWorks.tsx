import { IconClock, IconCalendar, IconChart } from "./icons";

const steps = [
  { label: "01 — DAILY", icon: <IconClock />, title: "Clock in, clock out", text: "Employees check in and out from any device. Managers see who's present, late, or absent in real time." },
  { label: "02 — WEEKLY", icon: <IconCalendar />, title: "Weekly summaries", text: "Attendance and completed tasks roll into a clear weekly summary for stand-ups or HR." },
  { label: "03 — MONTHLY", icon: <IconChart />, title: "Monthly reports", text: "Get a full attendance and task report per employee or department, ready for payroll." },
];

export default function HowItWorks() {
  return (
    <section className="py-12 pb-14">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6">
        <div className="max-w-[600px] mx-auto mb-9 text-center">
          <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted-lt block mb-2.5">HOW IT WORKS</span>
          <h2 className="text-[clamp(1.45rem,2.5vw,1.9rem)] font-semibold text-forest-900 tracking-[-0.01em] mb-2.5">Built around your team's rhythm</h2>
          <p className="text-[12px] sm:text-[13px] text-600 leading-[1.65]">ATTENDEX follows the rhythm your business already runs on, so records stay accurate without chasing paperwork.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {steps.map((s) => (
            <div className="border border-cdc-border rounded-2xl p-6 transition-all duration-250 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1" key={s.label}>
              <span className="text-[10px] font-bold tracking-[0.1em] text-muted-lt block mb-3.5">{s.label}</span>
              <div className="w-8 h-8 rounded-[10px] bg-mist flex items-center justify-center mb-4">{s.icon}</div>
              <h4 className="text-[14.5px] font-semibold text-forest-900 mb-[7px]">{s.title}</h4>
              <p className="text-[11.5px] text-600 leading-[1.6]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
