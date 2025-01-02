import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="bg-[#FFFFFF] w-screen  lg:wrappe flex flex-col items-center ">
      {/* Centered Headings */}
      <div className="text-center my-6">
        <h1 className="text-2xl font-bold pb-5 text-[#000000] ">Our Blogs</h1>
        <h2 className="text-lg text-[#000000] pb-5">
          Find a bright idea to suit your taste with our great selection
        </h2>
      </div>
      <div className=" lg:flex lg:flex-row justify-center space-x-6">
        <div className="text-center lg:w-[393] lg:h-[555]">
          <Image src="/pic001.jpeg" width={393} height={393} alt="" />
          <h2 className="text-xl font-light mt-4 text-[#000000]">
            Going all-in with millennial design
          </h2>
          <button className="mt-2 px-4 py-2 border-b  border-gray-950 font-medium text-[#000000]">
            Read More
          </button>
          <div className="flex justify-center items-center mt-2 space-x-4 text-[#000000]">
            <Image src="/vector.png" width={18} height={18} alt="" />
            <h3>5 min</h3>
            <Image src="/uil.png" width={22} height={22} alt="" />
            <h3>12th Oct 2022</h3>
          </div>
        </div>

        <div className="text-center lg:w-[393] lg:h-[555]  ">
          <Image src="/pic002.jpeg" width={393} height={393} alt="" />
          <h2 className="text-xl font-light mt-4 text-[#000000]">
            Going all-in with millennial design
          </h2>
          <button className="mt-2 px-4 py-2 text-[#000000] border-b  border-gray-950 font-medium">
            Read More
          </button>
          <div className="flex justify-center items-center mt-2 space-x-4 text-[#000000]">
            <Image src="/vector.png" width={18} height={18} alt="" />
            <h3>5 min</h3>
            <Image src="/uil.png" width={22} height={22} alt="" />
            <h3>12th Oct 2022</h3>
          </div>
        </div>

        <div className="text-center lg:w-[393] lg:h-[555]  lg:mb-0">
          <Image src="/pic003.jpeg" width={393} height={393} alt="" />
          <h2 className="text-xl font-light mt-4 text-[#000000]">
            Going all-in with millennial design
          </h2>
          <button className="mt-2 px-4 py-2 border-b  border-gray-950 font-medium text-[#000000] ">
            Read More
          </button>
          <div className="flex justify-center items-center mt-2 space-x-4 text-[#000000]">
            <Image src="/vector.png" width={18} height={18} alt="" />
            <h3>5 min</h3>
            <Image src="/uil.png" width={22} height={22} alt="" />
            <h3>12th Oct 2022</h3>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <Link href={"/b1"}>
          {" "}
          <button className="py-2 border-b border-gray-950  text-[#000000] font-medium text-lg items-center ">
            View All Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
