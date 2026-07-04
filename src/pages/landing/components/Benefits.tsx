import { IconClock, IconCalendar, IconCheck, IconArrow } from "./icons";
import dashboardDesignPng from "../../../assets/Dashboard-pc.png";

const cards = [
  { icon: <IconClock />, title: "Daily Attendance Tracking", text: "Employees clock in and out with a tap. ATTENDEX timestamps every entry and flags late arrivals automatically.", accent: false },
  { icon: <IconCalendar />, title: "Weekly & Monthly Reports", text: "Auto-generated summaries by employee, department, or location — exportable as CSV or PDF.", accent: false },
  { icon: <IconCheck />, title: "Manager Task Assignment", text: "Assign tasks to employees or teams, set priorities and due dates, and follow progress live.", accent: true },
];

export default function Benefits() {
  return (
    <>
      <section className="py-10 pb-16" id="benefits">
        <div className="max-w-[1180px] mx-auto px-[18px] md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-3.5 lg:gap-6 mb-[30px] items-center">
            <div>
              <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-600 block mb-2.5">WHY ATTENDEX</span>
              <h2 className="text-[clamp(1.45rem,2.5vw,1.9rem)] font-semibold text-forest-900 tracking-[-0.01em]">Give managers visibility, give employees clarity</h2>
            </div>
            <p className="text-[12px] sm:text-[13px] text-gray-600 leading-[1.65] max-w-[500px]">From clock-in to task completion, ATTENDEX keeps every record organized and ready for payroll or reporting.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {cards.map((c) => (
              <div
                className={`border rounded-2xl p-6 min-h-[210px] flex flex-col justify-between transition-all duration-150 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${c.accent ? "bg-tan border-transparent" : "border-cdc-border"}`}
                key={c.title}
              >
                <div>
                  <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center mb-5 ${c.accent ? "bg-white" : "bg-mist"}`}>{c.icon}</div>
                  <h4 className="text-[14px] font-semibold text-forest-900 mb-[7px]">{c.title}</h4>
                  <p className={`text-[11.5px] leading-[1.55] ${c.accent ? "text-tan-ink" : "text-gray-600"}`}>{c.text}</p>
                </div>
                <div className={`self-start mt-3 ${c.accent ? "w-6 h-6 rounded-full bg-forest-900 flex items-center justify-center" : "text-muted-lt"}`}>
                  {c.accent
                    ? <IconArrow stroke="#fff" strokeWidth="2.6" width="12" height="12" />
                    : <IconArrow stroke="#a3a39d" strokeWidth="2" width="16" height="16" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className="py-14 sm:py-20 bg-[#f7f9f7] overflow-hidden min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            
            <h2 className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold text-forest-950 tracking-[-0.01em] leading-[1.2] mb-4">Your entire workforce,<br />visible at a glance</h2>
            <p className="text-[13px] text-gray-600 leading-[1.7] mb-6 max-w-[420px]">The ATTENDEX dashboard centralises attendance records, leave requests, overtime logs, and task statuses into one clean, real-time view — so managers spend less time chasing and more time leading.</p>
            <ul className="flex flex-col gap-3">
              {[
                "Live attendance status for every employee",
                "Leave & overtime approvals in one click",
                "Exportable reports — CSV or PDF",
                "Role-based access for managers & HR",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-forest-900">
                  <span className="mt-1 w-4 h-4 rounded-full bg-forest-900 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#pricing" className="mt-8 inline-flex items-center gap-2 bg-forest-900 text-white py-3 px-6 rounded-full text-[13px] font-semibold transition-all duration-150 hover:bg-forest-800 hover:-translate-y-0.5 hover:shadow-lg">
              Explore the dashboard
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H9M17 7v8" /></svg>
            </a>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
               src={dashboardDesignPng}
               alt="ATTENDEX Dashboard UI"
               className="w-full max-w-[800px] h-auto object-contain"
               style={{ imageRendering: "-webkit-optimize-contrast" }}
/>
          </div>
        </div>
      </section>
    </>
  );
}
