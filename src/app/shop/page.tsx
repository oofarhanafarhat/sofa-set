import Nav from "@/component/Nav";
import React from "react";
import Image from "next/image";

const Shop = () => {
  return (
    <div className="min-h-screen w-screen lg:wrappe">
      {/* Navbar Section */}
      <Nav bg={false} />

      {/* Image Section */}
      <div className=" w-screen lg:wrappe relative h-[316px] flex items-center justify-center bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src="/shopbg.png"
            alt="Shop Background"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
          />
        </div>
        <div className="relative z-10 text-center px-4 flex flex-col justify-center items-center">
          <Image src="/shopa.png" width={77} height={77} alt="Shop Icon" />
          <h1 className="text-[#000000] text-4xl font-semibold pb-5 h-[72px]">Shop</h1>
          <div className="flex items-center space-x-2 mb-3">
            <button className="text-[#000000] text-xl font-semibold">
              Home
            </button>
            <Image src={"/shopb.png"} width={14} height={8} alt="arrow" />
            <button className="text-lg text-[#000000] font-normal">Shop</button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mt-10 bg-[#9F9F9F] h-[100px] py-4 bg-opacity-30 lg:flex lg:flex-wrap items-center justify-between  px-4  md:px-8  text-[#000000] font-poppins">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Image src={"/v1.png"} width={25} height={25} alt="" />
          <h2 className="text-sm md:text-base">Filter</h2>
          <Image src={"/v2.png"} width={28} height={28} alt="" />
          <Image src={"/v3.png"} width={24} height={24} alt="" />
        </div>
        <button className="text-sm md:text-base font-normal lg:mr-96 lg:pr-10 border-l border-gray-950 pl-10">
          Showing 1–16 of 32 results
        </button>
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold text-sm md:text-base">Show</h2>
          <button className="w-12 h-12 bg-[#FFFFFF] text-[#9F9F9F] rounded-md">
            16
          </button>
          <h2 className="font-semibold text-sm md:text-base">Short by</h2>
          <button className="w-40 h-12 bg-[#FFFFFF] text-[#9F9F9F] rounded-md">
            Default
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="wrappe bg-[#FFFFFF] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-8">
        {[
          {
            src: "/pic04.jpg",
            title: "Trenton modular sofa----3",
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
          {
            src: "/t4.png",
            title: "Grain coffee table",
            price: " Rs. 15,000.00",
          },
          {
            src: "/t5.png",
            title: "Kent coffee table",
            price: "Rs.225,000.00",
          },
          {
            src: "/pic00.jpg",
            title: "Round coffee table_color ",
            price: "Rs.251,000.00",
          },
          {
            src: "/t7.png",
            title: "Reclaimed  teak coffee ",
            price: "Rs.25,200.00",
          },
          {
            src: "/t8.png",
            title: "Plain console",
            price: "Rs.258,200.00",
          },
          {
            src: "/pic11.jpg",
            title: "Reclaimed teak ",
            price: "Rs.20,000.00",
          },
          {
            src: "/t10.png",
            title: "SJP_0825 ",
            price: "Rs.200,000.00",
          },
          {
            src: "/t11.png",
            title: "Bella chair and table",
            price: "Rs.100,000.00",
          },
          {
            src: "/pic22.jpg",
            title: "Granite square side table",
            price: "Rs.258,800.00",
          },
          {
            src: "/t11.jpg",
            title: "Asgaard sofa",
            price: "Rs.250,000.00",
          },
          {
            src: "/t12.jpg",
            title: "Maya sofa three seater",
            price: "Rs.115,000.00",
          },
          {
            src: "/t13.jpg",
            title: "Outdoor sofa set",
            price: "Rs,244,000.00",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs mx-auto text-center p-10 bg-[#FFFFFF] rounded-lg  "
          >
            <Image
              src={item.src}
              width={287}
              height={287}
              alt={item.title}
              className="rounded-lg"
            />
            <h2 className="text-[#000000] text-base md:text-lg font-light font-poppins py-2">
              {item.title}
            </h2>
            <h2 className="text-[#000000] font-bold text-sm md:text-base">
              {item.price}
            </h2>
          </div>
        ))}
      </div>
      <div className="space-x-4 flex justify-center items-center m-20">
        <button className="bg-[#FBEBB5] w-[60px] h-[60px] rounded-[10px]">
          1
        </button>
        <button className="w-[60px] h-[60px] rounded-[10px] bg-[#FFF9E5]">
          2
        </button>
        <button className="w-[60px] h-[60px] rounded-[10px] bg-[#FFF9E5]">
          3
        </button>
        <button className="w-[60px] h-[60px] rounded-[10px] bg-[#FFF9E5] font-medium">
          NEXT
        </button>
      </div>
      <div className="wrappe h-[300px] bg-[#FAF4F4] lg:flex justify-center items-center">
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mb-6 lg:mb-0">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            For all oders over $50, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mb-6 lg:mb-0">
          <h1 className="text-xl font-bold">90 Days Return</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            If goods have problems, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mt-2 lg:mt-0">
          <h1 className="text-xl font-bold">Secure Payment</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            100% secure payment, consectetur adipim scing elit.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;