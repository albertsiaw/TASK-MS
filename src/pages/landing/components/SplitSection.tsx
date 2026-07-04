import pcImagePng from "../../../assets/pc-image.png";

export default function SplitSection() {
  return (
    <section className="pb-16" id="task-assignment">
      <div className="max-w-[1180px] mx-auto px-[18px] md:px-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-5">
        {/* Left card: Attendance chart */}
        <div className="rounded-[22px] p-7 min-h-[300px] flex flex-col justify-between bg-forest-900 text-white overflow-hidden relative group">
          <div className="absolute -right-12 -bottom-10 opacity-30 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
           <img 
                src={pcImagePng} 
                alt="" 
                className="w-[280px] md:w-[320px] object-contain drop-shadow-lg rotate-[-5deg] [backface-visibility:hidden] [transform:translateZ(0)]" 
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-[1.15rem] font-semibold mb-2">Track attendance the easy way</h3>
            <span className="text-[10.5px] font-mono tracking-[0.08em] text-[#8fd6ac]">TODAY: 96% PRESENT</span>
          </div>
          <div className="flex items-end gap-2.5 h-[110px] mt-6 relative z-10">
            <div className="flex-1 rounded-md bg-forest-700" style={{ height: 44 }} />
            <div className="flex-1 rounded-md bg-forest-700" style={{ height: 72 }} />
            <div className="flex-1 rounded-md bg-white flex flex-col items-center justify-between py-2 text-forest-900 text-[9.5px] font-bold" style={{ height: 104 }}><span>↑</span><span>96%</span></div>
            <div className="flex-1 rounded-md bg-forest-700" style={{ height: 58 }} />
            <div className="flex-1 rounded-md bg-forest-700" style={{ height: 88 }} />
          </div>
        </div>

        {/* Right card: Task assignment */}
        <div className="rounded-[22px] p-7 min-h-[300px] flex flex-col justify-between bg-mist">
          <div>
            <h3 className="text-[1.15rem] font-semibold mb-2">Assign tasks to your team</h3>
            <p className="text-[11.5px] text-gray max-w-[270px] leading-[1.6]">Assign daily, weekly, or monthly tasks to employees or departments, set due dates, and track progress.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <div className="bg-white p-3.5 rounded-2xl border border-cdc-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col gap-[7px] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] relative z-10">
              <span className="text-[9px] font-bold tracking-[0.08em] uppercase text-gray-600">Leave Requests</span>
              <span className="text-[1.05rem] font-bold text-forest-900">12 Pending</span>
              <div className="flex gap-1.5 items-center mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                <span className="text-[9.5px] text-gray-600 font-medium">Require approval</span>
              </div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-cdc-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col gap-[7px] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] relative z-10">
              <span className="text-[9px] font-bold tracking-[0.08em] uppercase text-gray-600">Overtime</span>
              <span className="text-[1.05rem] font-bold text-forest-900">45 Hrs Logged</span>
              <div className="flex gap-2 items-center mt-0.5">
                <div className="w-4 h-4 bg-[#f87171] rounded-full flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M12 5v14M5 12h14" /></svg>
                </div>
                <span className="text-[9.5px] color-[#8a8a86]">+12% vs last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
