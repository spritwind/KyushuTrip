import { Check, Dot } from 'lucide-react';

export default function CheckListItem({ item, checkedItems, onToggle }) {
  const isChecked = checkedItems.includes(item.id);

  return (
    <div
      onClick={() => onToggle(item.id)}
      className={`relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer group active:scale-95 ${isChecked
          ? 'border-gray-100 bg-gray-50/50 grayscale opacity-80'
          : 'border-white bg-white shadow-card hover:border-rose-100 hover:shadow-soft'
        }`}
    >
      {/* 勾選圓圈 */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center border-[3px] transition-all duration-300 ${isChecked
            ? 'bg-rose-400 border-rose-400 scale-110'
            : 'border-rose-200 bg-rose-50 group-hover:border-rose-300'
          }`}
      >
        <Check
          size={16}
          className={`text-white transition-all duration-300 ${isChecked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
          strokeWidth={4}
        />
      </div>

      {/* 內容 */}
      <div className="flex-1">
        <h4 className={`font-bold text-sm transition-colors ${isChecked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
          {item.item}
        </h4>
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
          <span className="font-medium text-rose-400 bg-rose-50 px-1.5 py-0.5 rounded">{item.location}</span>
          <Dot size={12} />
          <span>{item.note}</span>
        </div>
      </div>
    </div>
  );
}
