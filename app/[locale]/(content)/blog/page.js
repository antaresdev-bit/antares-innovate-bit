import React from 'react';
import Image from 'next/image';

function PageBlog() {
  return (
    <div className='relative flex justify-center items-center min-h-screen px-4'>
      <div className=" mx-auto px-[21px] sm:px-[21px] md:px-[49px] lg:px-[60px]">
        <div className="max-w-[3500px] mx-auto flex justify-center">
          <Image 
            src="/assets/images/blog/construccion.jpg" 
            alt="Construcción" 
            width={3500} 
            height={1400} 
            className="rounded-lg shadow-lg w-full max-w-full lg:max-w-[3500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default PageBlog;