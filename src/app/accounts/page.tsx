import React from "react";
import Image from "next/image";
import Com from "@/component/Com";
import Nav from "@/component/Nav";

const Account = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav bg={false} />

      {/* Main Wrapper */}
      <div className="w-full">
        {/* Background Section */}
        <div className=" w-full lg:wrappe relative h-[316px] flex items-center justify-center bg-gray-50">
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
            <h1 className="text-[#000000] text-4xl font-semibold pb-5 h-[72px]">
              My Account
            </h1>
            <div className="flex items-center space-x-2">
              <button className="text-[#000000] text-xl font-semibold">
                Home
              </button>
              <Image src={"/shopb.png"} width={14} height={8} alt="arrow" />
              <button className="text-lg text-[#000000] font-normal">
                My account
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:flex justify-center items-center bg-[#FFFFFF] p-4">
          {/* Login Section */}
          <div className="w-full lg:w-[608px]  h-[630px] max-w-md mx-auto mb-8 lg:mb-0">
            <h1 className="text-[#000000] font-semibold text-3xl font-poppins mb-8">
              Log In
            </h1>
            <h2 className="text-[#000000] font-medium text-2xl font-poppins mb-8">
              Username or email address
            </h2>
            <input
              type="text"
              className="w-full h-[50px] rounded-lg mb-8 border-2 border-[#9F9F9F] p-2"
            />
            <h2 className="text-[#000000] font-medium text-2xl font-poppins mb-8">
              Password
            </h2>
            <input
              type="password"
              className="w-full h-[50px] rounded-md border-2 border-[#9F9F9F] mb-8 p-2"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" /> Remember me
            </div>
            <button className="border-2 px-6 py-2 rounded-full mt-4 border-[#9F9F9F]">
              Log In
            </button>
            <span className="ml-4 text-sm text-blue-500 cursor-pointer">
              Lost Your Password?
            </span>
          </div>

          {/* Register Section */}
          <div className="w-full lg:w-[608px] h-[630px] max-w-md mx-auto">
            <h1 className="text-[#000000] font-semibold text-3xl font-poppins mb-8">
              Register
            </h1>
            <h2 className="text-[#000000] font-medium text-2xl font-poppins mb-8">
              Email address
            </h2>
            <input
              type="email"
              className="w-full h-[50px] rounded-lg mb-8 border-2 border-[#9F9F9F] p-2"
            />
            <p className="text-sm text-[#000000] w-[453px] h-[48px] mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-[#000000] w-[453px] h-[96px] mb-8 leading-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy.</b>
            </p>
            <button className="border-2 px-6 py-2 rounded-full border-[#9F9F9F]">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Com />
    </div>
  );
};

export default Account;