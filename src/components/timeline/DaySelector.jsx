export default function DaySelector({ days, activeDay, setActiveDay }) {
  return (
    <div className="flex overflow-x-auto gap-3 p-4 -mx-4 px-4 scrollbar-hide">
      {days.map((day) => (
        <button
          key={day.id}
          onClick={() => setActiveDay(day.id)}
          className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
            activeDay === day.id
              ? 'bg-indigo-900 text-white shadow-lg shadow-indigo-900/20'
              : 'bg-white text-gray-500 border border-gray-100'
          }`}
        >
          {day.date}
        </button>
      ))}
    </div>
  );
}
