import { useState } from "react";
import { IconTick } from "./icons";

const PLANS = [
  {
    name: "Starter",
    monthly: 9,
    yearly: 7,
    desc: "For small teams getting off spreadsheets.",
    cta: "Start free trial",
    featured: false,
    features: [
      "Up to 25 employees",
      "Daily clock-in / clock-out",
      "Basic attendance dashboard",
      "Email support",
    ],
  },
  {
    name: "Team",
    monthly: 19,
    yearly: 15,
    desc: "For growing teams that need tasks and reporting.",
    cta: "Get Started Now",
    featured: true,
    features: [
      "Unlimited employees",
      "Everything in Starter",
      "Manager task assignment",
      "Weekly & monthly reports (CSV/PDF)",
      "Priority email support",
    ],
  },
  {
    name: "Business",
    monthly: null,
    yearly: null,
    desc: "For multi-location or franchise operations.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Team",
      "HR system integrations",
      "Custom roles & permissions",
      "Dedicated account manager",
    ],
  },
];

function PlanCard({ plan, yearly }: { plan: any; yearly: boolean }) {
  const price = yearly ? plan.yearly : plan.monthly;
  return (
    <div className={`rounded-3xl p-7 lg:p-9 flex flex-col transition-all duration-300 relative group overflow-hidden ${
      plan.featured 
      ? "bg-forest-900 text-white border-none shadow-2xl scale-[1.02] lg:scale-[1.05] z-10 lg:-my-4" 
      : "bg-white border border-[#eaeaea] shadow-sm hover:shadow-md z-0"
    }`}>
      {plan.featured && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8fd6ac] to-transparent opacity-20 rounded-bl-full" />
          <span className="absolute top-6 right-6 lg:right-9 bg-[#8fd6ac] text-forest-950 text-[10px] font-bold tracking-[0.1em] uppercase py-1.5 px-3 rounded-full">Most Popular</span>
        </>
      )}
      
      <span className={`text-[14px] font-bold tracking-[0.05em] uppercase mb-2 ${plan.featured ? "text-[#8fd6ac]" : "text-forest-900"}`}>{plan.name}</span>
      <p className={`text-[13px] leading-[1.6] mb-6 min-h-[40px] ${plan.featured ? "text-[#c3d3c9]" : "text-muted"}`}>{plan.desc}</p>
      
      <div className="flex items-end gap-1.5 mb-6">
        {price !== null ? (
          <>
            <span className={`text-[2.5rem] lg:text-[3rem] font-bold leading-none tracking-[-0.03em] ${plan.featured ? "text-white" : "text-forest-950"}`}>${price}</span>
            <span className={`text-[13px] font-medium pb-2 ${plan.featured ? "text-white/60" : "text-muted-lt"}`}>/ user / mo</span>
          </>
        ) : (
          <span className={`text-[2rem] font-bold tracking-[-0.02em] ${plan.featured ? "text-white" : "text-forest-950"}`}>Custom</span>
        )}
      </div>
      
      <a href="#" className={`text-center py-3.5 px-4 rounded-xl font-semibold text-[14px] mb-8 transition-all duration-200 ${
        plan.featured 
        ? "bg-[#8fd6ac] text-forest-950 hover:bg-[#a6e2bf] shadow-[0_4px_14px_rgba(143,214,172,0.3)] hover:-translate-y-0.5" 
        : "bg-mist text-forest-900 hover:bg-[#e2e8e5] border border-[#d3d9d6]"
      }`}>{plan.cta}</a>
      
      <div className="mt-auto">
        <span className={`text-[11px] font-bold tracking-[0.08em] uppercase mb-4 block ${plan.featured ? "text-white/50" : "text-muted-lt"}`}>What's included</span>
        <ul className="list-none flex flex-col gap-3.5">
          {plan.features.map((f: string) => (
            <li key={f} className={`flex items-start gap-3 text-[13.5px] leading-[1.5] ${plan.featured ? "text-[#eaf3ee]" : "text-[#4b4b48]"}`}>
              <IconTick stroke={plan.featured ? "#8fd6ac" : "#1b4e3a"} className="shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section className="py-20 lg:py-28 bg-[#f9faf9] border-t border-cdc-border" id="pricing">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6">
        <div className="max-w-[600px] mx-auto mb-14 text-center">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-forest-950 tracking-[-0.02em] mb-4">Simple plans that scale with your team</h2>
          <p className="text-[14px] sm:text-[15px] text-muted leading-[1.65]">Start free for 14 days. No credit card required, cancel anytime.</p>
          <div className="inline-flex items-center gap-1.5 bg-white border border-[#eaeaea] rounded-full p-1.5 mt-8 shadow-sm">
            <button className={`text-[13px] font-semibold py-2.5 px-6 rounded-full transition-all duration-200 ${!yearly ? "bg-forest-900 text-white shadow-md" : "text-muted hover:text-forest-900"}`} onClick={() => setYearly(false)}>Monthly</button>
            <button className={`text-[13px] font-semibold py-2.5 px-6 rounded-full transition-all duration-200 flex items-center gap-2 ${yearly ? "bg-forest-900 text-white shadow-md" : "text-muted hover:text-forest-900"}`} onClick={() => setYearly(true)}>
              Yearly <span className={`text-[10px] font-bold py-0.5 px-2 rounded-full ${yearly ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-[1000px] mx-auto">
          {PLANS.map((plan) => (
            <PlanCard plan={plan} yearly={yearly} key={plan.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
