import React from 'react';

const CenterElementsSection = () => {
  return (
    <div className="relative bg-black bg-opacity-70">
        <button className="absolute top-10 right-16 z-50 bg-white text-black px-4 py-2 rounded-md">chat</button>
        <div className="flex flex-col gap-4 items-center min-h-[20vh] py-24 px-16 ">
            <h1 className="text-white text-4xl font-bold" data-aos="fade-up">Qué hacemos</h1>
            <p className="text-white text-lg" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-md" data-aos="fade-up">Ver más</button>
        </div>
    </div>
  )
};

export default CenterElementsSection;
