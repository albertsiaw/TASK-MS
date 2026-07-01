
/*Add compainy logos and name after launch*/
export default function LogoWall() {
  const logos = [""];
  return (
    <section className="border-y border-cdc-border py-[22px]">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 flex flex-col items-start gap-4">
        <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted-lt block opacity-100 mb-0">TRUSTED BY GROWING TEAMS AT</span>
        <div className="flex flex-wrap justify-start sm:justify-between items-center gap-5 sm:gap-x-9 gap-y-[22px] w-full opacity-40 grayscale contrast-200">
          {logos.map((l) => <span key={l} className="font-bold text-base tracking-[-0.01em] whitespace-nowrap">{l}</span>)}
        </div>
      </div>
    </section>
  );
}
