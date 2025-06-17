// app/blog/page.tsx (or app/about/page.tsx)
// ✅ Modernized, end-to-end responsive, professional blog/about page using Tailwind + Framer Motion

"use client";

import React from "react";
import Image from "next/image";
import { GiWoodCanoe } from "react-icons/gi";
import Nav from "@/component/Nav";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // ✅ correct format
    },
  }),
};





export default function BlogOrAboutPage() {
  return (
    <div className="font-poppins text-[#000]">
 

      {/* 🖼 Hero Section */}
      <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="relative w-full h-[320px] flex items-center justify-center bg-gray-50"
>
        <Image
          src="/shopbg.png"
          alt="Shop Background"
          fill
          style={{ objectFit: "cover" }}
          className="object-cover opacity-90"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <Image src="/shopa.png" width={77} height={77} alt="Icon" />
          <h1 className="text-4xl font-bold mt-4">Blogs</h1>
          <div className="flex items-center justify-center gap-2 mt-2 text-[#4B5563]">
            <span className="text-xl font-semibold">Home</span>
            <Image src="/shopb.png" width={14} height={8} alt="Arrow" />
            <span className="text-lg">Blogs</span>
          </div>
        </div>
      </motion.div>

      {/* 📄 Main Content */}
      <div className="w-full max-w-7xl mx-auto mt-24 px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* 📚 Blog Posts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-2 space-y-16"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-4"
            >
              <Image
                src={["/pic002.jpeg", "/b4.jpg", "/b3.jpg"][i]}
                width={700}
                height={393}
                alt={`Blog Cover ${i + 1}`}
                className="rounded-lg hover:scale-[1.02] transition-transform"
              />
              <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                <Image
                  src="/contact.png"
                  width={18}
                  height={18}
                  alt="Author"
                />
                <span>admin</span>
                <Image src="/uil.png" width={18} height={18} alt="Date" />
                <span>12th Oct 2022</span>
                <GiWoodCanoe className="text-[#6B7280]" />
                <span>wood</span>
              </div>
              <h2 className="text-2xl font-semibold">
                Blog Title {i + 1}
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                dolores aliquid eius voluptas laborum esse provident.
              </p>
              <button className="mt-2 text-black border-b border-gray-800 font-medium hover:opacity-80 transition-all">
                Read More
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* 🧭 Sidebar */}
        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-10"
        >
          {/* 🔍 Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 py-3 px-5 rounded-lg outline-none"
            />
            <Image
              src="/search.png"
              width={20}
              height={20}
              alt="Search"
              className="absolute right-4 top-3.5"
            />
          </div>

          {/* 🧩 Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Categories</h3>
            {["Crafts", "Design", "Handmade", "Interior", "Wood"].map(
              (cat, i) => (
                <div
                  key={i}
                  className="flex justify-between text-[#6B7280] py-2 border-b border-gray-100"
                >
                  <span>{cat}</span>
                  <span>{i + 1}</span>
                </div>
              )
            )}
          </div>

          {/* 🕓 Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
            {[
              "/b01.jpg",
              "/b02.jpg",
              "/b2.jpg",
              "/b4.jpg",
              "/b3.jpg",
            ].map((img, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <Image
                  src={img}
                  width={100}
                  height={100}
                  alt={`Recent ${i + 1}`}
                  className="rounded-md"
                />
                <div>
                  <h4 className="font-medium leading-snug">
                    Recent Post {i + 1}
                  </h4>
                  <p className="text-[#6B7280] text-sm">12th Oct 2022</p>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      {/* 📦 Pagination */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex justify-center items-center gap-4 my-20"
      >
        {["1", "2", "3", "NEXT"].map((pg, i) => (
          <button
            key={i}
            className={`w-14 h-14 rounded-xl ${
              pg === "1" ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
            } font-medium hover:brightness-95`}
          >
            {pg}
          </button>
        ))}
      </motion.div>

      {/* 🎁 Bottom Feature Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#FAF4F4] py-16 px-4"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 text-black">
          {[
            {
              title: "Free Delivery",
              desc: "For all orders over $50, consectetur adipiscing elit.",
            },
            {
              title: "90 Days Return",
              desc: "If goods have problems, consectetur adipiscing elit.",
            },
            {
              title: "Secure Payment",
              desc: "100% secure payment, consectetur adipiscing elit.",
            },
          ].map((item, i) => (
            <div key={i} className="w-full lg:w-[30%]">
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-[#6B7280]">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}