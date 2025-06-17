"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pick = () => {
  const products = [
  
    {
      src: "/pic5.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
    },
    {
      src: "/pic5.png",
      title: "Outdoor bar table stool",
      price: "Rs. 25,000.00",
    },
    {
      src: "/pic7.png",
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-black font-poppins">
          Top Picks For You
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto font-poppins">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 group transition-all duration-300 hover:shadow-xl flex flex-col items-center"
          >
            <div className="overflow-hidden rounded-lg w-full">
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={300}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300 object-cover mx-auto"
              />
            </div>
            <h2 className="mt-4 text-lg font-medium text-gray-900 font-poppins">
              {item.title}
            </h2>
            <p className="text-black font-bold mt-1">{item.price}</p>
          <Link href={"/shop"}> <button
              className="mt-4 px-5 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 w-full"
           
              
            >
              SEE MORE
            </button></Link> 
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 border border-black rounded-full text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
          View More
        </button>
      </div>
    </section>
  );
};

export default Pick;
