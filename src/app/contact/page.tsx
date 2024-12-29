import React from "react";
import Nav from "@/component/Nav";
import Image from "next/image";
import Com from "@/component/Com";

const Contact = () => {
  return (
    <div>
      <Nav bg={false} />
      <div className=" w-full wrappe relative h-[316px] flex items-center justify-center bg-gray-50">
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
          <h1 className="text-[#000000] text-4xl font-semibold pb-5 h-[72px] w-[233px]">
            Contact
          </h1>
          <div className="flex items-center space-x-2 mb-4">
            <button className="text-[#000000] text-xl font-semibold">
              Home
            </button>
            <Image src={"/shopb.png"} width={14} height={8} alt="arrow" />
            <button className="text-lg text-[#000000] font-normal">
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="w-[365px] h-[54px] text-[#000000] text-3xl font-semibold font-poppins mt-[98px]">Get In Touch With Us</h1>
        <p className="w-[644px] h-[48px] text-[#9F9F9F] text-[16px]  font-light font-poppins leading-6">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="wrappe h-[1144px] bg-[#FFFFFF] lg:flex justify-center lg:mt-40">
        <div className="w-[393px] h-[537px] ml-14 py-8">
          <div className="flex "> <Image src={"/v10.png"} width={23} height={23} alt=""/>
          <h1 className="text-[#000000] text-xl pr-3 font-bold font-poppins py-4  pl-8  ">Address</h1>
          </div>
          <p className="w-[212px] h-[72px] px-7 text-[#000000] font-light">236 5th SE Avenue, New York NY10000, United States</p> 
          <div className="flex "> <Image src={"/v11.png"} width={23} height={23} alt="" />
          <h1 className="text-[#000000] text-lg pr-3 font-bold font-poppins py-3 pl-8 ">Phone</h1>
          </div>
          <p className="w-[212px] h-[48px] pr-3 text-[#000000] font-light mb-6 pl-8">Mobile: +(84) 546-6789
          Hotline: +(84) 456-6789</p> 
          <div className="flex mt-7 "> <Image src={"/v12.png"} width={23} height={23} alt="" />
          <h1 className="text-[#000000] text-lg  font-bold font-poppins py-3 pl-4 ">Working Time</h1>
          </div>
          <p className="w-[212px] h-[96px] px-7 text-[#000000] font-light pl-8">Monday-Friday: 9:00 - 22:00
          Saturday-Sunday: 9:00 - 21:00</p> 
          

        </div>
        <div className="w-[635px] h-[923px] ">
            <h1 className="w-[111.25px] h-[24px] text-[#000000] text-lg font-poppins font-semibold pt-10 pb-16">Your name</h1>
            <input type="text"placeholder="abc" className="w-[528.75px] h-[75px] rounded-md pl-4 border border-[#9F9F9F] " />
            <h1 className="w-[143.75px] h-[24px] text-[#000000] text-lg font-poppins font-semibold pt-10 pb-16">Email address</h1>
            <input type="text"placeholder="Abc@def.com" className="w-[528.75px] h-[75px] rounded-md pl-4 border border-[#9F9F9F] " />
            <h1 className="w-[143.75px] h-[24px] text-[#000000] text-lg font-poppins font-semibold pt-10 pb-16">Subject</h1>
            <input type="text"placeholder="This is an optional" className="w-[528.75px] h-[75px] rounded-md pl-4 border border-[#9F9F9F] " />
            <h1 className="w-[75.95px] h-[24px] text-[#000000] text-lg font-poppins font-semibold pt-10 pb-16">Message</h1>
            <input type="text"placeholder="Hi! i'd like to ask about" className="w-[527.75px] h-[120px] rounded-md pl-4 border border-[#9F9F9F] " />
            <button className="w-[237px] h-[48px] rounded-[15px] border border-[#9F9F9F] mt-16 mb-96 lg:mb-0 "> Sbumit</button>

        </div>

      </div>

      <Com />
    </div>
  );
};

export default Contact;
