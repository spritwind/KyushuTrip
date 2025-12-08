import { Calendar, Utensils, Map, ShoppingBag } from 'lucide-react';

export default function TabNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'timeline', label: '行程', icon: Calendar },
    { id: 'gourmet', label: '美食', icon: Utensils },
    { id: 'map', label: '地圖', icon: Map },
    { id: 'shopping', label: '必買', icon: ShoppingBag },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-[380px]">
      <div className="glass-effect rounded-4xl p-2 shadow-cute border border-white/60 flex justify-between items-center bg-white/80 backdrop-blur-xl">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ${isActive
                  ? 'bg-gradient-to-tr from-primary-400 to-primary-300 text-white shadow-lg translate-y-[-8px]'
                  : 'text-gray-400 hover:bg-gray-50'
                }`}
            >
              <tab.icon
                size={isActive ? 22 : 20}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}
              />

              {isActive && (
                <span className="absolute -bottom-6 text-[10px] font-bold text-primary-600 bg-white/80 px-2 py-0.5 rounded-full shadow-sm animate-in fade-in slide-up">
                  {tab.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
