// ✅ file: app/contact/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[316px] flex items-center justify-center bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/shopbg.png"
          alt="Shop background"
          fill
          style={{ objectFit: "cover", opacity: 0.9 }}
          className="z-0"
        />
        {/* Overlay Content */}
        <div className="relative z-10 text-center flex flex-col items-center gap-2 px-4">
          <Image src="/shopa.png" width={77} height={77} alt="Shop icon" />
          <h1 className="text-4xl font-semibold text-black">Contact</h1>
          <div className="flex items-center gap-2">
          <Link href={"/"} >  <button className="text-lg font-semibold text-black">Home</button></Link>
            <Image src="/shopb.png" width={14} height={8} alt="Arrow icon" />
            <button className="text-lg font-normal text-black">Contact</button>
          </div>
        </div>
      </div>

      {/* ✅ Intro Section */}
      <div className="text-center max-w-2xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">
          For more information about our products & services, feel free to drop
          us an email. Our team is always here to help you out. Don’t hesitate!
        </p>
      </div>

      {/* ✅ Contact Details + Form Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
        {/* ✅ Left Column - Contact Info */}
        <div className="space-y-10">
          {/* Address */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Image src="/v10.png" width={23} height={23} alt="Address" />
              <h3 className="text-xl font-bold text-black">Address</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              236 5th SE Avenue,
              <br />
              New York, NY 10000,
              <br />
              United States
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Image src="/v11.png" width={23} height={23} alt="Phone" />
              <h3 className="text-xl font-bold text-black">Phone</h3>
            </div>
            <p className="text-gray-700">
              Mobile: +(84) 546-6789
              <br />
              Hotline: +(84) 456-6789
            </p>
          </div>

          {/* Working Time */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Image src="/v12.png" width={23} height={23} alt="Time" />
              <h3 className="text-xl font-bold text-black">Working Time</h3>
            </div>
            <p className="text-gray-700">
              Monday - Friday: 9:00 - 22:00
              <br />
              Saturday - Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* ✅ Right Column - Contact Form */}
        <form className="space-y-6 max-w-lg w-full">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="abc@domain.com"
              className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Inquiry about services"
              className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              placeholder="Hi! I'd like to ask about..."
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-48 bg-[#0C2340] text-white font-medium py-3 rounded-xl hover:bg-[#08172c] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;