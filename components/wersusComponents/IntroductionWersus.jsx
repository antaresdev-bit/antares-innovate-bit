import React from "react";

function IntroductionWersus() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white lg:m-[161px] md:m-[161px] sm:m-[50px]">
      <div className=" mb-2" style={{ fontFamily: "HandelGothic" }}>
        <h1 className="leading-[40px] text-[45px] font-bold text-white mb-[-30px] ml-[40px]">
          Transformando la Logística con Tecnología Centrada en el Conductor
        </h1>
        <p
          className="mt-[75px] leading-[40px] text-[25px]   text-white  text-transparent bg-clip-text ml-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          UI UX | APP Development | Geolocalización | Monitoreo | Branding
        </p>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="font-extrabold text-white leading-[35px] tracking-tight mt-[40px] 
             lg:text-[30px] 
             md:text-[20px] 
             sm:text-[30px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Wersus es un ecosistema digital en desarrollo que busca transformar la
          industria del transporte en Estados Unidos, poniendo al conductor en
          el centro de la experiencia.
        </p>
      </div>
    </div>
  );
}

export default IntroductionWersus;
