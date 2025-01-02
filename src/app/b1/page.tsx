import Nav from "@/component/Nav";
import React from "react";
import Image from "next/image";
import { GiWoodCanoe } from "react-icons/gi";


const ABOUT = () => {
  return (
    <div>
      <Nav bg={false} />
      <div className="w-screen lg:wrappe relative h-[316px] flex items-center justify-center bg-gray-50">
        <div className="absolute inset-0">
          <Image
            src="/shopbg.png"
            alt="Shop Background"
            fill
            className="opacity-100 object-cover"
            priority // Ensures this image loads first
          />
        </div>
        <div className="relative z-10 text-center px-4 flex flex-col justify-center items-center">
          <Image
            src="/shopa.png"
            width={77}
            height={77}
            alt="Shop Icon"
            priority
          />
          <h1 className="text-[#000000] text-4xl font-semibold pb-5 h-[72px]">
            Blogs
          </h1>
          <div className="flex items-center space-x-2">
            <button className="text-[#000000] text-xl font-semibold">
              Home
            </button>
            <Image
              src="/shopb.png"
              width={14}
              height={8}
              alt="arrow"
              priority
            />
            <button className="text-lg text-[#000000] font-normal">
              Blogs
            </button>
          </div>
        </div>
      </div>
      <div className="lg:wrappe w-full h-auto bg-[#FFFFFF]   lg:flex justify-center gap-10 mt-[150px]">
        {/* Blog Section */}
        <div className="text-center w-full lg:w-[700px]  pb-0 mb-0">
          <Image src="/pic002.jpeg" width={700} height={393} alt="Blog Image" />
          <div className="flex justify-start items-center mt-2 space-x-4 text-[#000000]">
            <Image src="/contact.png" width={18} height={18} alt="Admin" />
            <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
              admin
            </h3>
            <Image src="/uil.png" width={22} height={22} alt="Date Icon" />
            <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
              12th Oct 2022
            </h3>
            <GiWoodCanoe />
            <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
              wood
            </h3>
          </div>
          <h2 className="text-2xl font-semibold font-poppins mt-4 text-[#000000] py-4 text-start">
            Going all-in with millennial design
          </h2>
          <p className="text-[#9F9F9F] text-sm font-light font-poppins py-2 text-start leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias
            necessitatibus corrupti quam voluptate ad perspiciatis facilis sed
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            numquam, aspernatur voluptas voluptates harum neque quisquam
            dignissimos consectetur, nam deserunt sed error! Illum in,
            asperiores nostrum laudantium totam sunt iste. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptas, nesciunt placeat
          </p>
          <div className="flex justify-start pb-5 ">
            <button className=" px-4 py-2 text-[#000000] border-b border-gray-950 font-medium">
              Read More
            </button>
          </div>
          <div className="text-center w-full lg:w-[700px] ">
            <Image
              src="/b4.jpg"
              width={700}
              height={393}
              alt="Blog Image"
              className="pr-6"
            />
            <div className="flex justify-start items-center mt-2 space-x-4 text-[#000000]">
              <Image src="/contact.png" width={18} height={18} alt="Admin" />
              <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
                admin
              </h3>
              <Image src="/uil.png" width={22} height={22} alt="Date Icon" />
              <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
                12th Oct 2022
              </h3>
              <GiWoodCanoe />
              <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
                wood
              </h3>
            </div>
            <h2 className="text-2xl font-semibold font-poppins mt-4 text-[#000000] py-4 text-start">
              Exploring new way of decorating
            </h2>
            <p className="text-[#9F9F9F] text-sm font-light font-poppins py-2 text-start leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              alias necessitatibus corrupti quam voluptate ad perspiciatis
              facilis sed Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nostrum numquam, aspernatur voluptas voluptates harum neque
              quisquam dignissimos consectetur, nam deserunt sed error! Illum
              in, asperiores nostrum laudantium totam sunt iste.
            </p>
            <div className="flex justify-start py-4">
              <button className="mt-2 px-4 py-2 text-[#000000] border-b border-gray-950 font-medium">
                Read More
              </button>
            </div>
            <div className="text-center w-full lg:w-[700px] ">
              <Image
                src="/b3.jpg"
                width={700}
                height={393}
                alt="Blog Image"
                className="pr-6"
              />
              <div className="flex justify-start items-center mt-2 space-x-4 text-[#000000]">
                <Image src="/contact.png" width={18} height={18} alt="Admin" />
                <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
                  admin
                </h3>
                <Image src="/uil.png" width={22} height={22} alt="Date Icon" />
                <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
                  12th Oct 2022
                </h3>
                <GiWoodCanoe />
                <h3 className="text-[#9F9F9F] text-sm font-normal font-poppins">
                  wood
                </h3>
              </div>
              <h2 className="text-2xl font-semibold font-poppins mt-4 text-[#000000] py-4 text-start">
                Handmade pieces that took time to make
              </h2>
              <p className="text-[#9F9F9F] text-sm font-light font-poppins py-2 text-start leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                alias necessitatibus corrupti quam voluptate ad perspiciatis
                facilis sed Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nostrum numquam, aspernatur voluptas voluptates harum
                neque quisquam dignissimos consectetur, nam deserunt sed error!
                Illum in, asperiores nostrum laudantium totam sunt iste.
              </p>
              <div className="flex justify-start py-4">
                <button className=" px-4 py-2 text-[#000000] border-b border-gray-950 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[300px]  justify-center">
          <button className="border border-[#9F9F9F] py-4  rounded-lg w-[300px] flex items-center justify-center pl-48 pr-0">
            <Image src="/search.png" width={20} height={20} alt="Search Icon" />
          </button>
          <h1 className="text-[#000000] text-2xl font-bold font-poppins text-start py-6">
            Categories
          </h1>
          {["Crafts", "Design", "Handmade", "Interior", "Wood"].map(
            (category, index) => (
              <div
                key={index}
                className="flex justify-between py-5 text-[#9F9F9F]"
              >
                <span>{category}</span>
                <span>{index + 1}</span>
              </div>
            )
          )}

          <h1 className="text-[#000000] text-2xl font-bold font-poppins text-start pb-10 mt-14">
            Recent Posts
          </h1>
          <div className="flex flex-col">
            <div className="flex gap-5 mb-10">
              <Image src={"/b01.jpg"} width={100} height={100} alt={""} />{" "}
              <div>
                <h1 className="text-[#000000] font-semibold py-2 ">
                  {" "}
                  Going all-in with millennial design
                </h1>
                <h2 className="text-[#9F9F9F] text-lg "> 12th Oct 2022</h2>
              </div>
            </div>
            <div className="flex  gap-5 mb-10">
              <Image src={"/b02.jpg"} width={100} height={100} alt={""} />{" "}
              <div>
                <h1 className="text-[#000000] font-semibold py-2 ">
                  {" "}
                  Exploring new way of decorating
                </h1>
                <h2 className="text-[#9F9F9F] text-lg "> 12th Oct 2022</h2>
              </div>
            </div>
            <div className="flex gap-5 mb-10 ">
              <Image src={"/b2.jpg"} width={100} height={100} alt={""} />{" "}
              <div>
                <h1 className="text-[#000000] font-semibold py-2 ">
                  {" "}
                  Handmade pieces that took time to make
                </h1>
                <h2 className="text-[#9F9F9F] text-lg "> 12th Oct 2022</h2>
              </div>
            </div>
            <div className="flex gap-5 mb-10">
              <Image src={"/b4.jpg"} width={100} height={100} alt={""} />{" "}
              <div>
                <h1 className="text-[#000000] font-semibold py-2 ">
                  {" "}
                  Colorful office Redesign
                </h1>
                <h2 className="text-[#9F9F9F] text-lg "> 12th Oct 2022</h2>
              </div>
            </div>
            <div className="flex gap-5">
              <Image src={"/b3.jpg"} width={100} height={100} alt={""} />{" "}
              <div>
                <h1 className="text-[#000000] font-semibold py-2 ">
                  {" "}
                  Modern home in Milan
                </h1>
                <h2 className="text-[#9F9F9F] text-lg "> 12th Oct 2022</h2>
              </div>
            </div>{" "}
          </div>
        </div>
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
          <h1 className="text-xl font-bold  pb-5">Free Delivery</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            For all oders over $50, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mb-6 lg:mb-0">
          <h1 className="text-xl font-bold pb-5">90 Days Return</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            If goods have problems, consectetur adipim scing elit.
          </h2>
        </div>
        <div className="w-[376px] h-[108px]  text-[#000000] text-left lg:mx-4 mt-2 lg:mt-0">
          <h1 className="text-xl font-bold pb-5">Secure Payment</h1>
          <h2 className="text-[#9F9F9F] font-normal">
            100% secure payment, consectetur adipim scing elit.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ABOUT;
