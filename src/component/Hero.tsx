import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-[#FAF4F4] py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-evenly gap-12">
        {/* First Item */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-md group">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
            <Image
              src="/pic02.jpg"
              alt="Side Table"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Side Table</h1>
          <Link href="/shop">
           <button className="px-6 py-3 rounded-full text-base lg:text-lg font-semibold border border-black text-black bg-white transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 shadow-sm hover:shadow-md">
  View More
</button>

          </Link>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-md group">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
            <Image
              src="/pic03.jpg"
              alt="Arm Chair"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Arm Chair</h1>
          <Link href="/shop">
          <button className="px-6 py-3 rounded-full text-base lg:text-lg font-semibold border border-black text-black bg-white transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 shadow-sm hover:shadow-md">
  View More
</button>

          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
