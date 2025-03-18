"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { teamMembers } from "./teamMembers";

function WorkTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedMember) {
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedMember]);

  return (
    <>
      <div className="flex flex-col gap-4 items-start min-h-[20vh] px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1300px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px] mt-[213px] mb-[90px]">
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestro <br /> Team
        </h1>
      </div>

      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mb-[90px] sm:mb-[90px] md:mb-[100px] mb-[143px]"
            >
              <div className="w-[209px] h-[209px] overflow-hidden rounded-full">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={209}
                  height={209}
                  className="object-cover"
                />
              </div>
              <h3
                className="text-white text-[18px] font-semibold mt-[30px]"
                style={{ fontFamily: "HandelGothic" }}
              >
                {member.name}
              </h3>
              <div className="mt-[5px]">
                <p
                  className="text-[18px]"
                  style={{ fontFamily: "UniteaSans-medium" }}
                >
                  {member.role}
                </p>
              </div>

              <div className="mt-[20px]">
                <button
                  onClick={() => openModal(member)}
                  className="flex items-center justify-center text-[20px] w-[181px] h-[40px] bg-white text-[#02021E] text-[18px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold"
                  style={{ fontFamily: "HandelGothic" }}
                >
                  <p>Ver Perfil</p>
                  <div className="ml-[13px]">
                    <Image
                      src="/assets/images/Gif Avion.gif"
                      alt="Botón Animado"
                      width={32}
                      height={32}
                      className="ml-2"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-[#1C5DE9] rounded-[48px] w-full sm:w-[871px] h-auto p-[22px] relative mx-4 sm:mx-0  z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#3874F5] rounded-[24px] p-[22px]">
              <div className="flex flex-col sm:flex-row items-center">
                <div className=" w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%]  flex justify-center order-1 sm:order-2 ">
                  <div className="w-[209px] h-[209px] overflow-hidden rounded-full ">
                    <Image
                      src={selectedMember.src}
                      alt={selectedMember.name}
                      width={209}
                      height={209}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className=" flex flex-col text-left w-full sm:w-[60%] pr-0 sm:pr-[20px] order-2 sm:order-1 mt-4 sm:mt-0">
                  <h3
                    className="text-white text-[28px] sm:text-[28px] md:text-[28px] lg:text-[35px] font-semibold"
                    style={{ fontFamily: "HandelGothic" }}
                  >
                    {selectedMember.name}
                  </h3>
                  <div className="mt-[5px]">
                    <p
                      className="text-[24px] sm:text-[24px] md:text-[26px] lg:text-[26px] text-white"
                      style={{ fontFamily: "UniteaSans-medium" }}
                    >
                      {selectedMember.role}
                    </p>
                  </div>
                  <p
                    className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] text-white mt-[20px]"
                    style={{ fontFamily: "UniteaSans" }}
                  >
                    {selectedMember.perfil}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkTeam;
