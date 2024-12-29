import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pick1 = () => {
  return (
    <div className="wrappe bg-[#FFF9E5] h-auto py-10">
      <div className="lg:flex justify-between items-center">
        <div className="relative w-full lg:w-[983px] h-[639px]">
          <Image
            src={"/pic8.png"}
            alt="Asgaard sofa"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center px-5 lg:px-0 lg:w-[331px] mt-10 lg:mt-0">
          <h2 className="text-2xl font-semibold text-[#000000] font-poppins">
            New Arrivals
          </h2>
          <h1 className="text-4xl font-bold text-[#000000] mt-4 mb-6">
            Asgaard sofa
          </h1>
         <Link href={"/products"}> <button className="px-14 py-4 border border-gray-950 text-[#000000] text-2xl">
            Order Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Pick1;