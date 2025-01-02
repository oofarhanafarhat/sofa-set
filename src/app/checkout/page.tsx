
import Nav from "@/component/Nav";
import React from "react";
import Image from "next/image";

const Checkout = () => {
  return (
    <div>
      <Nav bg={false} />
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
          <h1 className="text-[#000000] text-4xl font-semibold pb-5 h-[72px] w-[233px]">
            Check Out
          </h1>
          <div className="flex items-center space-x-2 mb-4">
            <button className="text-[#000000] text-xl font-semibold">
              Home
            </button>
            <Image src={"/shopb.png"} width={14} height={8} alt="arrow" />
            <button className="text-lg text-[#000000] font-normal">
              Check out
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-wrappe lg:h-[1839px] bg-[#FFFFFF] lg:flex justify-center lg:items-start">
        <div className=" w-full lg:w-[608px] lg:h-[1714px] flex flex-col">
          <h1 className="text-[#000000] text-3xl font-bold mt-[100px]">
            Billing details
          </h1>
          <div className="lg:flex">
            <div>
              <h2 className=" lg:h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
                First Name
              </h2>
              <button className="border border-[#9F9F9F] w-[150px] h-[50px]  lg:w-[211px] lg:h-[75px] rounded-lg mr-5"></button>
            </div>
            <div>
              <h2 className=" lg:h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
                Last Name
              </h2>
              <button className="border border-[#9F9F9F] w-[150px] h-[50px] lg:w-[211px] lg:h-[75px] rounded-lg mr-5"></button>{" "}
            </div>
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Company Name (Optional)
            </h2>
            <button className="border border-[#9F9F9F]  lg:w-[433px] lg:h-[75px] rounded-lg mr-5"></button>{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Country / Region
            </h2>
            <input
              type="text"
              placeholder="Siri Lanka"
              className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg pl-8"
            />{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Street address
            </h2>
            <button className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg mr-5"></button>{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Town / City
            </h2>
            <button className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg mr-5"></button>{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Province
            </h2>
            <input
              type="text"
              placeholder="westron Province"
              className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg pl-8"
            />{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              ZIP code
            </h2>
            <button className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg mr-5"></button>{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Phone
            </h2>
            <button className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg mr-5"></button>{" "}
          </div>
          <div>
            <h2 className=" h-[24px] text-[#000000] text-md font-poppins font-medium my-5 ">
              Email address
            </h2>
            <button className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg mr-5"></button>{" "}
          </div>
          <input
            type="text"
            placeholder="Additional information"
            className="border border-[#9F9F9F] w-[433px] h-[75px] rounded-lg mt-14 pl-8"
          />
        </div>
        <div className="w-[533px] h-[616px] mt-[100px]">
          <div className="flex justify-between text-[#000000] text-lg font-semibold  ">
            <h1 className="w-[94px] h-[36px]">Product</h1>
            <h1 className="w-[103px] h-[36px]">Subtotal</h1>
          </div>
          <div className="flex justify-between text-[#000000] text-lg font-semibold  ">
            <h1 className=" h-[36px] text-md text-[#9F9F9F] font-light">
              Asgaard sofa <b>x 1</b>
            </h1>
            <h1 className=" h-[36px] font-light">Rs. 250,000.00</h1>
          </div>
          <div className="flex justify-between text-[#000000] text-lg font-semibold  ">
            <h1 className=" h-[36px] text-md text-[#000000] font-medium">
              Subtotal
            </h1>
            <h1 className=" h-[36px] font-light">Rs. 250,000.00</h1>
          </div>
          <div className="flex justify-between text-[#000000] text-lg font-semibold pb-10   border-b border-[#9F9F9F] ">
            <h1 className=" h-[36px] text-md text-[#000000] font-medium">
              Total
            </h1>
            <h1 className=" h-[36px] font-bold text-[#B88E2F] text-xl">
              Rs. 250,000.00
            </h1>
          </div>
          <div className="flex pt-10 gap-4">
            <Image src={"/rounded.png"} width={14} height={14} alt="" />
            <span>Direct Bank Transfer</span>
          </div>
          <p className="text-[#9F9F9F] w-[528px] h-[72px] leading-6 text-sm font-light font-poppins">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex pt-10 gap-4">
            <Image
              src={"/rounded.png"}
              width={14}
              height={14}
              alt=""
              className="opacity-10"
            />
            <span className="text-[#9F9F9F] text-md">Direct Bank Transfer</span>
          </div>
          <div className="flex pt-10 gap-4 pb-5">
            <Image
              src={"/rounded.png"}
              width={14}
              height={14}
              alt=""
              className="opacity-10"
            />
            <span className="text-[#9F9F9F] text-md">Cash On Delivery</span>
          </div>
          <p className="text-[#9F9F9F] w-[528px] h-[72px] leading-6 text-sm font-light font-poppins">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b className="text-[#000000] font-medium"> privacy policy</b>
          </p>
          <div className="flex justify-center items-center pt-10 pb-24 lg:pb-0">
          <button className="w-[318px] h-[64px] border border-[#9F9F9F] rounded-xl  mb-64 lg:mb-0 ">Place order</button></div>
        </div>
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

export default Checkout;
