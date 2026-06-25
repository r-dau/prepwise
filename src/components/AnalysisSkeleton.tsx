export default function AnalysisSkeleton() {
  return (
    <section id="analysis" className="bg-[#F5F3FF] w-full">
      <div className="w-full mx-auto py-8 sm:py-12 lg:py-16 px-8 sm:px-6 lg:px-8 max-w-[1200px] flex flex-col items-center">
        {/* Title Skeleton */}
        <div className="h-8 w-48 bg-purple-100 rounded-lg mb-6 sm:mb-8 self-start animate-pulse" />

        {/* Summary Skeleton */}
        <div
          className="rounded-lg p-6 border w-full mb-6 bg-white"
          style={{ borderColor: "#E5E7EB" }}
        >
          <div className="h-4 bg-purple-100 rounded w-full mb-2 animate-pulse" />
          <div className="h-4 bg-purple-100 rounded w-3/4 animate-pulse" />
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-8 w-full">
          {/* Match Score Skeleton */}
          <div
            className="rounded-lg p-6 border bg-white md:col-span-1"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div className="h-5 w-28 bg-purple-100 rounded mb-6 animate-pulse" />
            <div className="flex flex-col items-center gap-4">
              <div className="w-[120px] h-[120px] rounded-full bg-purple-100 animate-pulse" />
              <div className="h-6 w-16 bg-purple-100 rounded animate-pulse" />
            </div>
          </div>

          {/* Skill Gap Skeleton */}
          <div
            className="rounded-lg p-6 border bg-white md:col-span-2"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div className="h-5 w-36 bg-purple-100 rounded mb-6 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[100, 80, 120, 90].map((w, i) => (
                <div
                  key={i}
                  className={`h-7 w-${w} bg-purple-100 rounded-full animate-pulse`}
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
          </div>

          {/* Strengths Skeleton */}
          <div
            className="rounded-lg p-6 border bg-white md:col-span-1"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div className="h-5 w-24 bg-purple-100 rounded mb-6 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[80, 100, 70].map((w, i) => (
                <div
                  key={i}
                  className="h-7 bg-purple-100 rounded-full animate-pulse"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interview Questions Skeleton */}
        <div
          className="rounded-lg p-6 sm:p-8 border w-full"
          style={{ backgroundColor: "#FAFAFA", borderColor: "#E5E7EB" }}
        >
          <div className="h-7 w-56 bg-purple-100 rounded mb-6 animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white border"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="h-4 bg-purple-100 rounded w-full mb-2 animate-pulse" />
                <div className="h-4 bg-purple-100 rounded w-2/3 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
