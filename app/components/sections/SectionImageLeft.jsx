import React from 'react';

const SectionImageLeft = ({
  titleText = '',
  descriptionText = '',
  buttonText = '',
  buttonLink = '',
  imageUrl = '',
  showButton = true,
  prDescription = false,
  smallTitle = false,
  first = false
}) => {
  const isDescriptionObject = React.isValidElement(descriptionText);
  return (
    <div className={`z-[1] relative px-10 flex justify-center items-center ${first ? 'min-h-[100vh]' : 'min-h-[65vh]'}`}>
      <div className="relative z-10 flex flex-wrap items-center lg:ml-20 pt-16 pb-5 lg:pt-10 lg:pb-10 justify-center w-full">

        <div className="w-full hidden lg:block lg:w-1/2 pr-20" data-aos="fade-right" data-aos-duration="1000">
          <div>
            <img src={imageUrl} alt="section image" className="w-full lg:max-h-[60vh] 2xl:max-h-[50vh] h-auto object-contain max-w-[700px]" />
          </div>
        </div>
        <div className={`w-full lg:w-1/2 pr-0 ${isDescriptionObject ?  '2xl:pr-0':'2xl:pr-40'}`} data-aos="fade-left" data-aos-duration="1000">
          <h1 className={`${smallTitle ? 'text-3xl lg:text-5xl min-[2500px]:text-[4rem]' : 'text-5xl lg:text-[4rem]'} font-bold mb-10 lg:mb-0 leading-tight`}>

            {titleText}
          </h1>
          {isDescriptionObject ? (
            <div className={`text-base xl:text-lg leading-7 mt-4 font-[500] w-full ${prDescription ? 'lg:pr-16 pr-0' : ''}`}>
              {descriptionText}
            </div>
          ) : (
            <p className={`mb-10 lg:mb-0 text-base xl:text-lg leading-7 mt-4 font-[500] ${prDescription ? 'lg:pr-16 pr-0' : ''}`}>{descriptionText}</p>
          )}
          {showButton && (
            <div className={`mt-10 text-center hover:bg-blue-500 bg-white hover:text-white text-black border-solid border-[1px] border-white font-bold py-3 px-4 rounded-full inline-block text-lg min-w-40`}>
              <a href={buttonLink}>




                <button className='font-bold text-xl lg:w-auto w-full' href={buttonLink}>

                  {buttonText}
                </button>
              </a>
            </div>
          )}
        </div>
        <div className="w-full lg:hidden block pt-7" data-aos="fade-right" data-aos-duration="1000">
          <div>
            <img src={imageUrl} alt="section image" className="w-full max-h-[30vh] h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImageLeft;
