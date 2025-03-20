export default function Loading() {
    return (
      <div className="relative bg-opacity-70">
        <div className="max-w-[1500px] mx-auto">
          <div className="mt-[187px] mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
            <div className="h-16 bg-gray-800 animate-pulse rounded-lg w-[200px]" />
          </div>
          
          <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1,2,3].map((i) => (
              <div key={i} className="h-64 bg-gray-800 rounded-[24px] animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  } 