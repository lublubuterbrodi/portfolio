export default function MangaMockup() {
  return (
    <div className="w-56 rounded-[22px] border border-white/70 bg-white/70 p-4 shadow-2xl backdrop-blur-xl sm:w-64 sm:rounded-3xl sm:p-5 lg:w-75 lg:rounded-[28px] lg:p-5">
      <div className="relative h-36 overflow-hidden rounded-xl bg-linear-to-br from-[#CFEBD5] to-[#91C49B] sm:h-44 sm:rounded-2xl lg:h-48">
        <div className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-[#4F8F5A] sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
          Premium
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl">
          📚
        </div>
      </div>

      <div className="mt-4 sm:mt-5">
        <h4 className="text-sm font-semibold sm:text-base">Shadow Hunter</h4>

        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">Chapter 18</p>

        <div className="mt-4 sm:mt-5">
          <div className="mb-2 flex justify-between text-[11px] sm:text-xs">
            <span>Reading Progress</span>
            <span>72%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#E8EFE9]">
            <div className="h-full w-[72%] rounded-full bg-[#4F8F5A]" />
          </div>
        </div>

        <button className="mt-5 w-full rounded-xl bg-[#4F8F5A] py-2.5 text-sm font-medium text-white transition hover:bg-[#42784C] sm:mt-6 sm:rounded-2xl sm:py-3">
          Continue Reading
        </button>
      </div>
    </div>
  );
}
