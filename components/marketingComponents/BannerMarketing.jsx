import Image from "next/image";

const BannerMarketing = () => {
  return (
    <div
      className="relative w-full h-[457px] bg-gradient-to-r from-[#0046DC] to-[#4D86FF] flex sm:items-center sm:justify-between justify-center px-4 sm:px-10 overflow-hidden"
      style={{ borderRadius: "0 0 48px 48px" }}
    >
      <div className="hidden sm:flex flex-col space-y-2 sm:space-y-4 text-left z-10 max-w-[50%] lg:ml-[140px] lg:w-[600px] mt-[100px]">
        <h1
          className="text-3xl sm:text-5xl font-bold text-white md:text-[46px] lg:text-[65px] mb-[30px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Industria del Marketing
        </h1>

        <div className="flex items-center space-x-4  ">
          <div
            className="flex items-center justify-center rounded-full bg-white"
            style={{ width: "65px", height: "40px" }}
          >
            <Image
              src="/assets/images/marketing/Vector marketing.png"
              alt="Icono"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>

          <p
            className="text-lg sm:text-xl text-white md:text-[25px] lg:text-[30px]"
            style={{ fontFamily: "UniteaSans" }}
          >
            En Antares, no solo anticipamos la revolución digital; la lideramos.
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-w-[480px] h-full  max-w-[100%] sm:max-w-[100%] lg:max-w-[35%] z-10 sm:-mr-10 mx-auto lg:mr-[100px]">
        <div className="w-full h-full flex items-center justify-center relative">
          <Image
            src="/assets/images/marketing/fondo-objetivo-realista 1.png"
            alt="Industria Inmobiliaria"
            width={500}
            height={500}
            className="object-contain w-full h-full absolute bottom-[-48px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default BannerMarketing;
