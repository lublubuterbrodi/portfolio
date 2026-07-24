export default function DietTrackerMockup() {
  return (
    <div className="w-56 overflow-hidden rounded-2xl border border-[#E7ECE8] bg-white sm:w-64 lg:w-72.5">
      <div className="border-b border-[#EEF2EF] px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-500 sm:text-sm">Today</p>
            <h4 className="text-sm font-semibold text-[#252525] sm:text-base">
              Diet Tracker
            </h4>
          </div>

          <div className="h-2.5 w-2.5 rounded-full bg-[#62B270] sm:h-3 sm:w-3" />
        </div>
      </div>

      <div className="space-y-4 px-4 py-5 sm:space-y-5 sm:px-5 sm:py-6 lg:px-6 lg:py-7">
        <Item name="Chicken" value="180 / 250g" progress={72} />
        <Item name="Rice" value="140 / 200g" progress={70} />
        <Item name="Vegetables" value="95 / 100g" progress={95} />

        <div className="rounded-xl border border-[#EEF2EF] bg-[#FAFCFA] p-3 sm:p-4">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-neutral-600">Weight</span>
            <span className="font-medium text-[#252525]">68.5 kg</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({
  name,
  value,
  progress,
}: {
  name: string;
  value: string;
  progress: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs sm:text-sm">
        <span className="text-[#252525]">{name}</span>
        <span className="text-neutral-500">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[#E8EFEA]">
        <div
          className="h-full rounded-full bg-[#5BA469]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
