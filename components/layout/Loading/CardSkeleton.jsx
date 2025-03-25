import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <main className="flex flex-col gap-4">
      <div className="w-screen max-w-[1500px] mx-auto px-[22px] md:px-[105px] lg:px-[223px]">
        <div className=" border-l-0  sm:border-l-0 md:border-l border-white mt-[50px] lg:mt-[50px] gap-y-4">
          <div className="lg:mr-0 mr-6">

          <Skeleton className="h-[100px] w-full sm:h-[120px] md:h-[140px] lg:h-[100px] text-[32px] sm:text-[32px] md:text-[40px] lg:text-[45px] ml-[22px] md:ml-[53px] lg:ml-[53px] mb-10 mt-2" />

          <Skeleton className="w-full h-6 lg:h-8 ml-[22px] md:ml-[53px] lg:ml-[53px] lg:mb-6 mb-2" />
          <Skeleton className="w-full h-6 lg:h-8 ml-[22px] md:ml-[53px] lg:ml-[53px] lg:mb-6 mb-2" />
          <Skeleton className="w-full h-6 lg:h-8 ml-[22px] md:ml-[53px] lg:ml-[53px] lg:mb-6 mb-2" />

          </div>

          <div className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] mt-[28px] sm:mt-[28px] md:mt-[30px] lg:mt-[57px] sm:ml-[22px] md:ml-[53px] lg:ml-[53px]">
            <div className="flex items-center text-left  mt-[49px] ml-[21px] sm:ml-[21px] md:ml-[0px] lg:ml-[0px] mb-[100px]">
              <Skeleton className="ImageButtonIntroduction sm:ml-[22px] md:ml-[53px] lg:ml-[0px] border-none w-[48px] h-[48px] rounded-[20px]" />
              <Skeleton className="w-full sm:w-[230px] h-[48px] rounded-[32px]" />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}