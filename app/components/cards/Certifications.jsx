import React from "react";
import Image from "next/image";

const certificationsData = [
  { label: "UI/UX", imgSrc: "/assets/images/certifications/google-logo.png", altText: "Google Partner" },
  { label: "UI/UX", imgSrc: "/assets/images/certifications/google-logo.png", altText: "Google Partner" },
  { label: "UI/UX", imgSrc: "/assets/images/certifications/google-logo.png", altText: "Google Partner" }
];

const Certifications = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-100 bg-black bg-opacity-50 border border-white rounded-lg p-4">
      {certificationsData.map((cert, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <p>{cert.label}</p>
          <Image src={cert.imgSrc} alt={cert.altText} width={70} height={60} />
        </div>
      ))}
    </div>
  );
};

export default Certifications;
