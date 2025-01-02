import React from 'react';
import Image from 'next/image';

const Insta = () => {
  return (
    <div className="w-screen   lg:wrappe min-h-screen flex items-center justify-center relative l:mt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/insta.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Instagram Background"
          className="opacity-20"
        />
      </div>


      <div className="flex flex-col justify-center items-center relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#000000]">
          Our Instagram
        </h1>
        <h3 className="text-sm md:text-base lg:text-lg text-[#000000] pb-6 font-semibold font-poppins">
          Follow our store on Instagram
        </h3>
        <button className="w-[200px] md:w-[255px] h-[50px] md:h-[64px] rounded-full bg-gray-300 bg-opacity-25 font-normal text-[#000000] text-sm md:text-lg">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Insta;