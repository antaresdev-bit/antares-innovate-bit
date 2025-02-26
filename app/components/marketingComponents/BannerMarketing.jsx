import Image from "next/image";

const BannerMarketing = () => {
  return (
    <div
      className="relative w-full h-[457px] bg-gradient-to-r from-[#0046DC] to-[#4D86FF] flex sm:items-center sm:justify-between justify-center px-4 sm:px-10"
      style={{ borderRadius: "0 0 48px 48px" }}
    >
      <div className="hidden sm:flex flex-col space-y-2 sm:space-y-4 text-left z-10 max-w-[50%] lg:ml-[140px] lg:w-[600px] mt-[100px] ">
        <h1
          className="text-3xl sm:text-5xl font-bold text-white md:text-[46px] lg:text-[65px] mb-[30px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Industria del Marketing
        </h1>

        <div className="flex items-center space-x-4 ">
          <div
            className="flex items-center justify-center rounded-full bg-white  "
            style={{ width: "65px", height: "40px" }}
          >
            <Image
              src="/assets/images/marketing/Vector marketing.png "
              alt="Icono"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>

          <p
            className="text-lg sm:text-xl text-white md:text-[25px] lg:text-[30px] "
            style={{ fontFamily: "UniteaSans" }}
          >
            En Antares, no solo anticipamos la revolución digital; la lideramos.
          </p>
        </div>
      </div>

      <div className="relative w-[511px] h-[501px] min-w-[511px] min-h-[501px] z-10 sm:-mr-10 mx-auto lg:mr-[100px]  mt-[95px]">
        <Image
          src="/assets/images/marketing/fondo-objetivo-realista 1.png"
          alt="Industria Inmobiliaria"
          width={604}
          height={467}
          className="rounded-lg object-contain max-w-none max-h-none"
          priority
        />
      </div>
    </div>
  );
};

export default BannerMarketing;
