// ✅ File: app/account/page.tsx
// Purpose: Responsive, modern My Account page with login and registration, using Nav and improved layout

import React from "react";
import Image from "next/image";
import Nav from "@/component/Nav";
import Link from "next/link";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
     

      {/* ✅ Hero Section with background image */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-gray-100">
        {/* Background Image */}
        <Image
          src="/shopbg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover", opacity: 0.9 }}
          className="z-0"
        />
        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <Image src="/shopa.png" width={77} height={77} alt="Icon" />
          <h1 className="text-black text-3xl md:text-4xl font-semibold py-4">My Account</h1>
          <div className="flex items-center gap-2">
           <Link href={"/"}> <span className="text-black text-lg font-semibold">Home</span></Link>
            <Image src="/shopb.png" width={14} height={8} alt="arrow" />
            <span className="text-black text-lg">My Account</span>
          </div>
        </div>
      </section>

      {/* ✅ Login and Register Section */}
      <section className="w-full bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 🔐 Login Form */}
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-black mb-6">Log In</h2>

            {/* Username/Email Input */}
            <label className="block mb-2 text-lg font-medium text-black">
              Username or Email
            </label>
            <input
              type="text"
              className="w-full h-[48px] px-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password Input */}
            <label className="block mb-2 text-lg font-medium text-black">
              Password
            </label>
            <input
              type="password"
              className="w-full h-[48px] px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <button className="text-blue-500 hover:underline">
                Lost your password?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
              Log In
            </button>
          </div>

          {/* 🆕 Register Form */}
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-black mb-6">Register</h2>

            {/* Email Input */}
            <label className="block mb-2 text-lg font-medium text-black">
              Email Address
            </label>
            <input
              type="email"
              className="w-full h-[48px] px-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Info Paragraph */}
            <p className="text-sm text-gray-700 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-700 mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold underline cursor-pointer">
                privacy policy
              </span>.
            </p>

            {/* Register Button */}
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Bottom Info Section */}
      <section className="bg-[#FAF4F4] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-black mb-2">Free Delivery</h3>
            <p className="text-gray-600 text-sm">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-2">90 Days Return</h3>
            <p className="text-gray-600 text-sm">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;