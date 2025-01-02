import React from "react";
import Image from "next/image";

const Pick = () => {
  return (
    <div className="w-screen lg:wrappe bg-[#FFFFFF] h-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-[#000000] lg:text-4xl pb-2 font-semibold font-poppins">
          Top Picks For You
        </h1>
        <h2 className="text-[#9F9F9F] text-opacity-100 font-poppins pt-3 pb-10">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </h2>
      </div>
      <div className="lg:flex lg:justify-between items-center gap-6 px-6">
        {/* Product Card */}
        {[
          {
            src: "/pic04.jpg",
            title: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
          },
          {
            src: "/pic5.png",
            title: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
          },
          {
            src: "/pic005.jpg",
            title: "Outdoor bar table stool",
            price: "Rs. 25,000.00",
          },
          {
            src: "/pic7.png",
            title: "Plain console with teak mirror",
            price: "Rs. 25,000.00",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[287px] text-center px-4 py-6 bg-white shadow-lg rounded-lg"
          >
            <Image
              src={item.src}
              width={287}
              height={287}
              alt={item.title}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-[#000000] text-xl font-light font-poppins py-3">
              {item.title}
            </h2>
            <h2 className="text-[#000000] font-bold">{item.price}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="text-[#000000] text-2xl font-normal border-b-2 border-gray-900 pb-2">
          View More
        </button>
      </div>
    </div>
  );
};

export default Pick;