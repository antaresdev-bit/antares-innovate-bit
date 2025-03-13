import Image from "next/image";

const BannerRealEstate = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto relative overflow-hidden ">
      <div
        className="relative w-full h-[457px] bg-gradient-to-r from-[#FDC548] to-[#FFDC8E] flex sm:items-center sm:justify-between justify-center px-4 sm:px-10 overflow-hidden"
        style={{ borderRadius: "0 0 48px 48px" }}
      >
        <div className="hidden sm:flex flex-col space-y-2 sm:space-y-4 text-left z-10 max-w-[50%] lg:ml-[140px] lg:w-[600px] mt-[100px]">
          <h1
            className="text-3xl sm:text-5xl font-bold text-white md:text-[46px] lg:text-[65px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            Industria Inmobiliaria
          </h1>

          <div className="flex items-center space-x-4">
            <div
              className="flex items-center justify-center rounded-full bg-white"
              style={{ width: "55.66px", height: "55.66px" , aspectRatio: "1 / 1", }}
            >
              <Image
                src="/assets/images/inmobiliaria/Vector.png"
                alt="Icono"
                width={25}
                height={25}
                className="object-contain"
              />
            </div>

            <p
              className="text-lg sm:text-xl text-white md:text-[25px] lg:text-[30px] "
              style={{ fontFamily: "UniteaSans" }}
            >
              Arquitectos Expertos en Innovación
            </p>
          </div>
        </div>

        <div className="relative w-[511px] h-[501px] min-w-[500px] min-h-[450px] z-10 sm:-mr-10 mx-auto lg:mr-[90px]">
          <Image
            src="/assets/images/inmobiliaria/renderEdf.png"
            alt="Industria Inmobiliaria"
            width={490}
            height={490}
            className="rounded-lg object-contain max-w-none max-h-none"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default BannerRealEstate;
