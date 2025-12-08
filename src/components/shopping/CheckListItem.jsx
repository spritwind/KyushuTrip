import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CheckListItem({ item, checkedItems, onToggle }) {
  const isChecked = checkedItems.includes(item.id);

  return (
    <div
      onClick={() => onToggle(item.id)}
      className={`flex items-center gap-4 p-4 bg-white rounded-xl border transition-all cursor-pointer ${
        isChecked ? 'border-indigo-100 bg-indigo-50/50' : 'border-gray-100'
      }`}
    >
      {/* 勾選圓圈 */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
          isChecked ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'
        }`}
      >
        {isChecked && <CheckCircle2 size={14} className="text-white" />}
      </div>

      {/* 內容 */}
      <div className="flex-1">
        <h4 className={`font-bold text-sm ${isChecked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
          {item.item}
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">
          {item.location} • {item.note}
        </p>
      </div>
    </div>
  );
}
