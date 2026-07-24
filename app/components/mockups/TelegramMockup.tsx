export default function TelegramMockup() {
  return (
    <div className="w-56 rounded-[22px] border border-white/70 bg-white/70 p-4 shadow-2xl backdrop-blur-xl sm:w-64 sm:rounded-3xl sm:p-5 lg:w-75 lg:rounded-[28px]">
      <div className="mb-4 flex items-center gap-3 sm:mb-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F8F5A] text-base text-white sm:h-11 sm:w-11 sm:text-lg">
          ✈
        </div>

        <div>
          <h4 className="text-sm font-semibold sm:text-base">Content Bot</h4>

          <p className="text-xs text-neutral-500 sm:text-sm">Online</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="max-w-[85%] rounded-xl bg-[#F3F8F4] p-2.5 text-xs sm:rounded-2xl sm:p-3 sm:text-sm">
          Choose a category
        </div>

        <div className="ml-auto max-w-[80%] rounded-xl bg-[#4F8F5A] p-2.5 text-xs text-white sm:rounded-2xl sm:p-3 sm:text-sm">
          English 🇬🇧
        </div>

        <div className="max-w-[85%] rounded-xl bg-[#F3F8F4] p-2.5 sm:rounded-2xl sm:p-3">
          <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
            <button className="rounded-lg bg-white py-1.5 shadow-sm sm:rounded-xl sm:py-2">
              Vocabulary
            </button>

            <button className="rounded-lg bg-white py-1.5 shadow-sm sm:rounded-xl sm:py-2">
              Grammar
            </button>

            <button className="rounded-lg bg-white py-1.5 shadow-sm sm:rounded-xl sm:py-2">
              Reading
            </button>

            <button className="rounded-lg bg-white py-1.5 shadow-sm sm:rounded-xl sm:py-2">
              Listening
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
