const ChallengeDetailsSkeleton = () => {
  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <div className="max-w-5xl lg:mx-auto px-4 py-10 bg-white rounded-xl mx-4 shadow-sm animate-pulse">
        
        {/* Image Skeleton */}
        <div className="w-full h-64 md:h-96 rounded-xl bg-gray-200 mb-8"></div>

        {/* Meta Info Skeleton */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="h-7 w-24 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-4 space-y-2">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* Description Skeleton */}
        <div className="max-w-3xl space-y-3">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-2/3"></div>
        </div>

        {/* CTA Button Skeleton */}
        <div className="mt-8 h-12 w-44 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ChallengeDetailsSkeleton;