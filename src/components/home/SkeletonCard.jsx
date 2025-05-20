export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg h-full w-full">
      <div className="h-3/4 bg-gray-300 rounded-t-lg"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
