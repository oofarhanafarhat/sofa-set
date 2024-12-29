
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Title = () => {
  return (
    <div className="wrapper bg-[#FBEBB5] flex flex-col lg:flex-row  h-auto lg:h-[900px] overflow-hidden">
      {/* Text Section */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start px-4 lg:px-16 py-14 lg:py-24">
        <h1 className="text-4xl lg:text-6xl font-medium  text-center lg:text-left lg:ml-28 leading-10">
          Rocket 
          Single  </h1> 
         <h2 className="text-4xl lg:text-6xl font-medium  text-center lg:text-left lg:ml-28 pt-8"> Seater</h2>
      
       <Link href={"/shop"}> <button className="mt-6 px-6 py-3 lg:ml-28 text-lg lg:text-xl font-semibold text-[#000000]  transition-all border-b border-gray-950">
          Shop Now
        </button></Link>
      </div>

      
      <div className="w-full lg:w-[50%] flex justify-center items-center">
        <Image
          src="/pic1.png"
          width={853}
          height={900}
          alt="Rocket Seater"
          className="max-w-full h-auto"
        />
      </div>
      
    </div>
  );
};

export default Title;