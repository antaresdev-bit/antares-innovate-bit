import React from 'react';

function WideVideoSection({ src }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="3xl:h-[70vh] 2xl:h-[80vh] h-[70vh] flex justify-center items-center">
        <video
          color='#1a1431'
          autoPlay
          muted
          loop
          playsInline
          className="w-screen md:object-contain object-cover md:h-auto h-full"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
}

export default WideVideoSection;

