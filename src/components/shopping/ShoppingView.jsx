import { ShoppingBag } from 'lucide-react';
import CheckListItem from './CheckListItem';
import { SHOPPING_LIST } from '@data/shopping';
import { useState, useEffect } from 'react';

export default function ShoppingView() {
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
      {/* 標題 */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
          <ShoppingBag size={20} className="text-rose-500" />
          必買清單
        </h2>
        <span className="text-xs font-medium px-2 py-1 bg-rose-100 text-rose-600 rounded-full">
          {checkedCount} / {SHOPPING_LIST.length} 項
        </span>
      </div>

      {/* 清單項目 */}
      <div className="space-y-3">
        {SHOPPING_LIST.map((item) => (
          <CheckListItem
            key={item.id}
            item={item}
            checkedItems={checkedItems}
            onToggle={toggleItem}
          />
        ))}
      </div>

      {/* 購物小貼士 */}
      <div className="mt-8 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
        <h4 className="text-sm font-bold text-indigo-900 mb-2">購物小貼士</h4>
        <p className="text-xs text-indigo-700 leading-relaxed">
          別府與由布院許多土產店約下午 5 點即關門，建議看到喜歡的商品直接購買。生鮮食品（如 B-Speak
          蛋糕捲）建議事先預約。
        </p>
      </div>
    </div>
  );
}
