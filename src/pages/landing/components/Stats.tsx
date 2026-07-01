export default function Stats() {
  return (
    <section className="py-4 pb-[26px]">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6">
        <div className="rounded-3xl py-8 px-5 sm:p-[44px_36px] text-white relative overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[26px] items-center"
             style={{
               background: "linear-gradient(135deg, var(--color-forest-850) 0%, #0d3020 45%, var(--color-forest-950) 100%)",
               backgroundImage: "radial-gradient(ellipse 60% 90% at 15% 20%, rgba(255,255,255,.05), transparent 60%), radial-gradient(ellipse 50% 80% at 85% 80%, rgba(255,255,255,.05), transparent 60%), linear-gradient(135deg, var(--color-forest-850) 0%, #0d3020 45%, var(--color-forest-950) 100%)"
             }}>
          <div>
            <span className="text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold tracking-[-0.02em] block">10,000+</span>
            <span className="text-[11px] text-[#8fd6ac] mt-2 block">Employees tracked every day</span>
          </div>
          <div>
            <span className="text-[clamp(1.9rem,3.6vw,2.7rem)] font-bold tracking-[-0.02em] block">1.2M+</span>
            <span className="text-[11px] text-[#8fd6ac] mt-2 block">Tasks assigned and completed</span>
          </div>
          <div className="md:col-span-2 lg:col-span-1 lg:border-l lg:border-[rgba(255,255,255,.15)] lg:pl-[26px] border-t lg:border-t-0 border-[rgba(255,255,255,.15)] pt-5 lg:pt-0">
            <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#8fd6ac] block mb-2.5">BY THE NUMBERS</span>
            <p className="text-[1.05rem] font-medium leading-[1.4]">Built to keep every team, on every shift, perfectly in sync.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
