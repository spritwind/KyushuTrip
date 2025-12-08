import { Calendar, Utensils, Map, ShoppingBag } from 'lucide-react';

export default function TabNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'timeline', label: '行程', icon: Calendar },
    { id: 'gourmet', label: '美食', icon: Utensils },
    { id: 'map', label: '地圖', icon: Map },
    { id: 'shopping', label: '必買', icon: ShoppingBag },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 pb-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50 flex justify-between items-center max-w-md mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
            activeTab === tab.id
              ? 'text-indigo-900 transform -translate-y-2'
              : 'text-gray-400'
          }`}
        >
          <div className={`p-2 rounded-full ${activeTab === tab.id ? 'bg-indigo-50' : ''}`}>
            <tab.icon size={24} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
          </div>
          <span className="text-[10px] font-medium tracking-wide">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
