import { ShoppingBag, Store } from 'lucide-react';
import CheckListItem from './CheckListItem';
import ShoppingCard from './ShoppingCard';
import { SHOPPING_LIST } from '@data/shopping';
import { ITINERARY_DATA_ENHANCED } from '@data/itinerary_enhanced';
import { useState, useEffect } from 'react';

export default function ShoppingView({ navigationMode }) {
  // 收集所有天數的購物資訊
  const allShoppingSpots = ITINERARY_DATA_ENHANCED.filter(day => day.shopping && day.shopping.length > 0)
    .flatMap(day => day.shopping.map(shop => ({ ...shop, dayTitle: day.title })));
  // 從 localStorage 讀取已勾選項目
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('shopping-checked');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 保存到 localStorage
  useEffect(() => {
    localStorage.setItem('shopping-checked', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (itemId) => {
    setCheckedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const checkedCount = checkedItems.length;

  return (
    <div className="animate-in slide-in-from-right duration-300">
      {/* 推薦商店與土產 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 px-2">
          <Store size={20} className="text-rose-500" />
          <h2 className="text-xl font-bold text-indigo-900">推薦商店 & 土產</h2>
        </div>

        {/* 按天數分組顯示 */}
        {ITINERARY_DATA_ENHANCED.filter(day => day.shopping && day.shopping.length > 0).map((day) => (
          <div key={day.id} className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 mb-3 px-2">
              {day.date} - {day.title}
            </h3>
            <div className="space-y-3">
              {day.shopping.map((shop, idx) => (
                <ShoppingCard key={`${day.id}-${idx}`} shop={shop} navigationMode={navigationMode} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 必買伴手禮清單 */}
      <div className="border-t-2 border-gray-100 pt-6">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
            <ShoppingBag size={20} className="text-rose-500" />
            必買伴手禮清單
          </h2>
          <span className="text-xs font-medium px-2 py-1 bg-rose-100 text-rose-600 rounded-full">
            {checkedCount} / {SHOPPING_LIST.length} 項
          </span>
        </div>

        {/* 清單項目 */}
        <div className="space-y-3 mb-6">
          {SHOPPING_LIST.map((item) => (
            <CheckListItem
              key={item.id}
              item={item}
              checkedItems={checkedItems}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>

      {/* 購物小貼士 */}
      <div className="mt-6 bg-rose-50 p-4 rounded-xl border border-rose-100">
        <h4 className="text-sm font-bold text-rose-900 mb-2">💡 購物小貼士</h4>
        <p className="text-xs text-rose-700 leading-relaxed">
          別府與由布院許多土產店約下午 5 點即關門，建議看到喜歡的商品直接購買。生鮮食品（如 B-Speak
          蛋糕捲）建議事先預約。血池軟膏、溫泉粉等特色土產建議在景點直接購買。
        </p>
      </div>
    </div>
  );
}
