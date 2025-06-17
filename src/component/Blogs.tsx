import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const blogData = [
    {
      img: "/pic001.jpeg",
      title: "Going all-in with millennial loving design",
      time: "5 min",
      date: "12th Oct 2022",
    },
    {
      img: "/pic002.jpeg",
      title: "Embracing minimalist living to spaces",
      time: "4 min",
      date: "15th Oct 2022",
    },
    {
      img: "/pic003.jpeg",
      title: "Crafting comfort with modular design",
      time: "6 min",
      date: "18th Oct 2022",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 font-poppins">
      {/* Headings */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Our Blogs
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          Explore stylish ideas, smart furniture tips, and the latest design
          trends to inspire your space.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {blogData.map((blog, i) => (
          <div
            key={i}
            className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden transform hover:scale-[1.03] cursor-pointer"
          >
            <div className="overflow-hidden">
              <Image
                src={blog.img}
                width={393}
                height={393}
                alt={blog.title}
                className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center p-5">
              <h2 className="text-xl font-semibold text-gray-800 mt-3 text-center">
                {blog.title}
              </h2>

              <button className="mt-4 px-6 py-2 border border-gray-900 rounded-full text-gray-900 font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white">
                Read More
              </button>

              <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <Image src="/vector.png" width={8} height={6} alt="clock" />
                  <span>{blog.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/uil.png" width={16} height={16} alt="calendar" />
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link href="/b1">
          <button className="px-8 py-3 border border-gray-900 rounded-full text-gray-900 font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white">
            View All Posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
