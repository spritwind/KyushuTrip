export default function DaySelector({ days, activeDay, setActiveDay }) {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-3 py-3 px-1.5 mx-[-10px] sm:mx-0 scrollbar-hide snap-x snap-mandatory">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            className={`snap-center flex-shrink-0 px-5 py-2.5 rounded-pill text-sm font-bold transition-all duration-300 whitespace-nowrap border-2 ${activeDay === day.id
                ? 'bg-primary-500 text-white border-primary-500 shadow-cute scale-105'
                : 'bg-white text-gray-400 border-gray-100 hover:border-primary-200 hover:text-primary-400'
              }`}
          >
            <span className="mr-1 opacity-70">Day</span>
            {day.date.split('(')[0]}
          </button>
        ))}
        {/* Spacer for easier scrolling */}
        <div className="w-4 flex-shrink-0"></div>
      </div>

      {/* Scroll Hint Fade (Optional) */}
      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/0 to-transparent pointer-events-none"></div>
    </div>
  );
}
