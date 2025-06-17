"use client";
import React from 'react';
import Image from 'next/image';

const Insta = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/insta.jpeg"
          fill
          style={{ objectFit: 'cover', opacity: 0.8 }}
          alt="Instagram Background"
          className="opacity-20"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6 py-12 backdrop-blur-sm w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-poppins drop-shadow-md animate-fadeIn">
          Our Instagram
        </h1>
        <h3 className="text-base sm:text-lg text-gray-800 font-medium mt-3 mb-6 font-poppins animate-fadeIn delay-100">
          Follow our store on Instagram
        </h3>
        <button className="w-[200px] md:w-[255px] h-[50px] md:h-[64px] rounded-full bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300 font-semibold shadow-lg animate-fadeIn delay-200">
          Follow Us
        </button>
      </div>

      {/* Tailwind animation (optional if using custom CSS animations) */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Insta;
