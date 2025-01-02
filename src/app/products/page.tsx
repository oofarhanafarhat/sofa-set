"use client";
import Nav from "@/component/Nav";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false); // State to control sidebar visibility

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="bg-[#FFFFFF] wrappe">
      <Nav bg={false} />
      <div className="w-screen lg:w-wrappe h-[100px] ">
        <nav className="text-sm text-[#000000] mb-6">
          <Link  href="/" ><span  className="text-center text-lg text-[#9F9F9F] ml-10 pl-10 pr-5">
            Home
            </span></Link>
          &gt;{"   "}
          <Link href="/shop" ><span className="text-center text-lg text-[#9F9F9F] pr-5">
            Shop
            </span> </Link>
          &gt;{"     "}
          <button className="px-5 border-l border-gray-300 text-[#000000] font-semibold text-xl">
            Asgaard Sofa
          </button>
        </nav>
      </div>

      <div>
        <div className=" gird-cols-1 lg:flex justify-between gap-6 wrappe h-[820px] bg-[#FFFFFF] ">
          <div className="flex gap-4 lg:gap-0 lg:flex-col lg:space-y-6  ml-0 lg:ml-10 mr-5 ">
            <Image
              src="/t11.jpg"
              width={80}
              height={80}
              alt="Thumbnail 1"
              className="w-20 h-20 object-cover border bg-[#FFF9E5]"
            />
            <Image
              src="/as2.png"
              width={80}
              height={80}
              alt="Thumbnail 2"
              className="w-20 h-20 object-cover border bg-[#FFF9E5]"
            />
            <Image
              src="/as3.png"
              width={80}
              height={80}
              alt="Thumbnail 3"
              className="w-20 h-20 object-cover border bg-[#FFF9E5]"
            />
            <Image
              src="/as4.png"
              width={80}
              height={80}
              alt="Thumbnail 4"
              className="w-20 h-20 object-cover border bg-[#FFF9E5]"
            />
          </div>

          <div className="w-[481px] h-[391px] bg-[#FFF9E5] mr-10">
            <Image
              src="/pic8.png"
              width={481}
              height={391}
              alt="Asgaard Sofa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details Column */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#000000] py-2 ">
              Asgaard Sofa
            </h1>
            <p className="text-xl text-[#9F9F9F] mt-2 ">Rs. 250,000.00</p>
            <button className="text-sm text-yellow-500 mt-1 mr-4">
              ★★★★★
            </button>
            <button className="text-xl text-[#9F9F9F] mt-2 px-5 border-l border-gray-300 ">
          
              5 Customer Reviews
            </button>
            <p className=" text-[#9F9F9F] font-normal text-sm  mt-4 w-[420px] h-[80px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          
            <div className=" mt-4">
              <h3 className="text-md font-semibold text-[#9F9F9F]">Size</h3>
              <div className="flex space-x-2 mt-2">
                <button className="px-4 py-2 border rounded bg-[#FBEBB5] text-[#000000]">
                  L
                </button>
                <button className="px-4 py-2 border rounded text-[#000000] ">
                  XL
                </button>
                <button className="px-4 py-2 border rounded text-[#000000] ">
                  XS
                </button>
              </div>
            </div>
            {/* Color Options */}
            <div className="mt-4">
              <h3 className="text-md font-semibold text-[#9F9F9F]">Color</h3>
              <div className="flex space-x-2 mt-2">
                <div className="w-[30px] h-[30px] rounded-full bg-[#816DFA] border"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#000000] border"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#CDBA7B] border"></div>
              </div>
            </div>
            {/* Quantity Controls */}
            <div className="mt-4 flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className=" py-2  rounded"
              >
                -
              </button>
              <span className=" py-2 ">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2  rounded"
              >
                +
              </button>
              <button
                className="mt-6 px-6 py-3  text-[#000000] rounded md border border-gray-400"
                onClick={toggleCart} // Open cart sidebar on click
              >
                Add To Cart
              </button>
            </div>
            {/* Add to Cart Button */}
            {/* Additional Product Details */}
            <div className="gird-cols-1 mb-40 lg:mb-0">
              <div className="flex  items-center mt-10">
                <h1 className="mr-8 text-[#9F9F9F] font-semibold mb-4">SKU</h1>
                <h2 className="mr-8 text-[#9F9F9F] font-semibold mb-4 ml-8">
                  :
                </h2>
                <h2 className="mr-8 text-[#9F9F9F] font-semibold mb-4">
                  SS001
                </h2>
              </div>
              <div className="   lg:flex  items-center">
                <h1 className="mr-8 text-[#9F9F9F] font-semibold mb-4">
                  Category
                </h1>
                <h2 className="mr-6 text-[#9F9F9F] font-semibold mb-4">:</h2>
                <h2 className=" text-[#9F9F9F] font-semibold mb-4">Sofas</h2>
              </div>
              <div className="flex  items-center">
                <h1 className="mr-8 text-[#9F9F9F] font-semibold mb-4">Tags</h1>
                <h2 className="mr-8 text-[#9F9F9F] font-semibold mb-4 ml-8">
                  :
                </h2>
                <h2 className="mr-8 text-[#9F9F9F] font-semibold mb-4">
                  Sofa, Chair, Home, Shop
                </h2>
              </div>
              <div className="flex  items-center">
                <h1 className="mr-8 text-[#9F9F9F] font-semibold mb-4">
                  Share
                </h1>
                <h2 className="mr-8 text-[#9F9F9F] font-semibold mb-4 ml-5">
                  :
                </h2>
                <Image
                  src={"/v01.png"}
                  width={20}
                  height={20}
                  alt=""
                  className="mr-4"
                />
                <Image
                  src={"/v02.png"}
                  width={20}
                  height={20}
                  alt=""
                  className="mr-4"
                />
                <Image
                  src={"/v03.png"}
                  width={25}
                  height={25}
                  alt=""
                  className="mr-4"
                />
                <Image
                  src={"/v04.png"}
                  width={25}
                  height={31.21}
                  alt=""
                  className="ml-16 text-[#FF0000]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar for Shopping Cart */}
        {cartOpen && (
          <div className="fixed top-0 right-0 w-[417px] h-[746px] z-50 bg-[#FFFFFF]">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button onClick={toggleCart} className="text-gray-500">
                ✖
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between space-x-4 mb-96 ">
                <Image
                  src="/pic8.png"
                  width={80}
                  height={80}
                  alt="Asgaard Sofa"
                  className="w-16 h-16 object-cover border bg-[#FFF9E5]"
                />
                <div className=" text-xl font-poppins font-semibold">
                  <p>Asgaard Sofa</p>
                  <p className="text-[#B88E2F] mr-20 mt-5">Rs. 250,000.00</p>
                </div>
              </div>
              <div className="flex justify-between text-xl text-[#000000]">
                <p>subtotal: {quantity}</p>
                <p className="text-[#B88E2F] mr-20">Rs. 250,000.00</p>
              </div>
            </div>
            <div className="p-4 border-t flex justify-between bg-[#FFFFFF] text-[#000000] items-baseline ">
              <Link href={"/cart"}>
        
                <button className=" px-4 py-2 border border-gray-300  rounded-full">
                  VIEW cart
                </button>
              </Link>
              <Link href={"/checkout"}>
              
                <button className="border border-gray-300 px-4 py-2 bg-[#FFFFFF] text-[#000000]  rounded-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="wrappe h-[744px]">
        <div className=" gird-cols-1 w-full lg:w-wrappe mt-96 lg:mt-0 lg:flex justify-center items-center gap-5">
          <h1 className="text-xl text-center text-[#000000] font-poppins font-semibold lg:border-b lg:border-gray-950 py-4 ">
      
            Description
          </h1>
          <h1 className="text-xl text-center text-[#9F9F9F] py-4 font-poppins font-medium  lg:border-b border-gray-400 ">
            Additional Information
          </h1>
          <h1 className="text-xl text-center text-[#9F9F9F] py-4 font-poppins font-medium  lg:border-b border-gray-400">
            Reviews [5]
          </h1>
        </div>
        <div className=" w-full mb-40 lg:mb-0 lg:w-[1026px] h-[176px] text-[#9F9F9F] font-poppins font-light text-sm mt-5 justify-center ml-10">
          <p>
            Embodying the raw, wayward spirit of rock roll, the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of
            Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="lg:flex justify-center items-center gap-8 lg:w-[1239px] lg:h-[348px] ml-5  lg:mb-0 my-4 lg:my-0  ">
          <div className="bg-[#FFF9E5] px-5 mb-6 lg:mb-0  ">
            <Image src={"/pro2.png"} width={605} height={348} alt="" />
          </div>
          <div className="bg-[#FFF9E5] px-5 ">
            {" "}
            <Image src={"/pro1.png"} width={605} height={348} alt="" />
          </div>
        </div>
      </div>
      <div className=" text-center   lg:flex lg:justify-center lg:items-center text-3xl text-[#000000] font-semibold mb-5  lg:mt-0 pt-96 lg:pt-0">
        <h1>Related Products</h1>
      </div>
      <div className="lg:flex justify-between items-center ml-20 lg:ml-0  lg:gap-6 lg:px-6 ">
      
        {[
          {
            src: "/pic04.jpg",
            title: "Trenton modular sofa_3",
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
        ].map((item, index) => (
          <div
            key={index}
            className="w-[287px] text-center px-4 py-6  rounded-lg"
          >
            <Image
              src={item.src}
              width={287}
              height={287}
              alt={item.title}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-[#000000] text-xl font-light font-poppins py-3">
              {item.title}
            </h2>
            <h2 className="text-[#000000] font-bold">{item.price}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 mb-auto lg:mb-0">
        <Link href={"/shop"}> <button className="text-[#000000] text-2xl font-normal border-b-2 border-gray-900 pb-2">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;