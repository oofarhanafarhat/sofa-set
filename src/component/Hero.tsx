import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="wrapper h-auto bg-[#FAF4F4] flex flex-col md:flex-row justify-around items-center gap-10 font-poppins p-4">
      {/* First Item */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[605px] lg:h-[562px]">
          <Image 
            src="/pic02.jpg" 
            alt="Side Table" 
            layout="fill" 
            objectFit="contain" 
          />
        </div>
        <h1 className="mt-4 text-xl md:text-2xl lg:text-4xl font-medium mb-5">Side Table</h1>
       <Link href={"/shop"}> <button className="mt-2 border-b-2 border-gray-900 font-semibold text-2xl md:text-xl mb-20 pb-5">
          View More
        </button></Link>
      </div>

      {/* Second Item */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[605px] lg:h-[562px]">
          <Image 
            src="/pic03.jpg" 
            alt="Arm Chair" 
            layout="fill" 
            objectFit="contain" 
          />
        </div>
        <h1 className="mt-4 text-xl md:text-2xl lg:text-4xl font-medium mb-5">Side Table</h1>
      <Link href={"/shop"}>  <button className="mt-2 border-b-2 border-gray-900 font-semibold text-2xl md:text-xl mb-20 pb-5">
          View More
        </button></Link>
      </div>
    </div>
  );
};

export default Hero;