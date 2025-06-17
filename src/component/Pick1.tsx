"use client"; // if you plan to add interactivity later

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pick1 = () => {
  return (
    <div className="w-full bg-[#FFF9E5] py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10 px-4">
        {/* Image Section */}
        <div className="relative w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[600px]">
          <Image
            src="/pic8.png"
            alt="Asgaard sofa"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3 space-y-5">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#000000] font-poppins">
            New Arrivals
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#000000] font-poppins">
            Asgaard Sofa
          </h1>
          <Link href="/shop" className="w-full">
            <button className="mt-4 px-8 py-3 border border-gray-900 text-black text-lg font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pick1;
