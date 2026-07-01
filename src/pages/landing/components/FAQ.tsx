import { useState } from "react";

const FAQ_ITEMS = [
  { q: "How does daily attendance tracking work?", a: "Employees clock in and out from the web app, mobile app, or a shared kiosk. Every entry is timestamped automatically, and managers see a live status board — no manual sign-in sheet required." },
  { q: "Can I see weekly and monthly attendance summaries?", a: "Yes. ATTENDX rolls up daily clock-ins into weekly and monthly summaries per employee, team, or department, including hours worked, late arrivals, and absences — exportable as CSV or PDF." },
  { q: "How do managers assign tasks to employees?", a: "A manager picks an employee or team, describes the task, sets a due date and priority, and assigns it in a few clicks. The employee is notified instantly and updates progress until it's marked complete." },
  { q: "Can I import our existing employee list?", a: "Yes — bulk-import your team in one click from a CSV file, or connect your existing HR system. Every employee gets their own attendance record and task history from day one." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);
  return (
    <section className="py-14 max-w-[1180px] mx-auto px-[18px] md:px-6 grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-6 md:gap-[46px]">
      <div>
        <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted-lt block mb-2.5">FAQ</span>
        <h2 className="text-[clamp(1.45rem,2.5vw,1.9rem)] font-semibold text-forest-900 tracking-[-0.01em]">Frequently asked questions</h2>
      </div>

      <div className="border-t border-cdc-border">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className="border-b border-cdc-border py-4" key={item.q}>
              <button className="w-full flex items-center justify-between text-left text-[13.5px] font-medium text-[#2c2c2a]" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                <span>{item.q}</span>
                {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted-lt)" strokeWidth="2" strokeLinecap="round" className="shrink-0"><path d="M5 12h14" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted-lt)" strokeWidth="2" strokeLinecap="round" className="shrink-0"><path d="M12 5v14M5 12h14" /></svg>
                )}
              </button>
              <div className={`text-xs text-muted leading-[1.65] max-w-[600px] mt-3 ${isOpen ? "block" : "hidden"}`}>{item.a}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
