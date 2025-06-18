import React from "react";
import Image from "next/image";
import Link from "next/link";

const Title = () => {
  return (
  <section className="w-full bg-gradient-to-r from-[#FBEBB5] to-[#FFF4D2] 16C] py-12 lg:py-24">

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Rocket Single
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold">Seater</h2>
          <Link href="/shop">
            <button className="mt-4 inline-block px-6 py-3 text-lg font-semibold border-b border-black hover:bg-black hover:text-white transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
<Image
  src="/pic1.png" // ✅ Static image from public folder
  width={600}     // ✅ Informing Next.js actual size
  height={600}
  alt="Rocket Single Seater Sofa" // ✅ Clear & keyword-based alt for SEO      // ✅ 🚀 Force preload to improve LCP
  className="w-full max-w-[500px] h-auto object-contain"
/>
        </div>
      </div>
    </section>
  );
};

export default Title;
