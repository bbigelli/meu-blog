export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-pulse">
      <div className="h-10 bg-gray-200 rounded mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
      <div className="h-64 bg-gray-200 rounded mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}