// 骨架屏元件 - 用於載入狀態

export function TimelineSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4">
          <div className="w-12 h-4 bg-gray-200 rounded"></div>
          <div className="flex-1">
            <div className="h-20 bg-gray-200 rounded-xl mb-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function GourmetSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="h-24 bg-gray-200"></div>
          <div className="p-4 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center">
        <div className="text-gray-400">地圖載入中...</div>
      </div>
    </div>
  );
}
