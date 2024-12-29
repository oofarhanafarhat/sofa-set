import React from 'react';

const Footer = () => {
  return (
    <div className="wrapper h-auto lg:h-[555px] bg-[#FFFFFF] mb-0 ">
      <div className="w-full lg:w-[1240px] mx-auto lg:h-[419px] flex flex-col lg:flex-row lg:justify-around items-center border-b border-gray-400 pt-20 ">
        <div className="w-full lg:w-[285px] mt-20 lg:mb-0  ">
          <h1 className="text-md lg:w-[285] text-[#9F9F9F] font-light text-center ">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </h1>
        </div>

        {/* Links Section */}
        <div className="w-full text-center lg:auto mb-6 lg:mb-0 ml-">
          <h1 className="font-poppins text-lg text-[#9F9F9F] font-light mt-9">Links</h1>
          <h2 className="pb-6 font-poppins text-lg text-[#000000] font-medium mt-2">Home</h2>
          <h2 className="pb-6 font-poppins text-lg text-[#000000] font-medium">Shop</h2>
          <h2 className="pb-6 font-poppins text-lg text-[#000000] font-medium">About</h2>
          <h2 className="pb-6 font-poppins text-lg text-[#000000] font-medium">Contact</h2>
        </div>

        {/* Help Section */}
        <div className="w-full text-center lg:auto mb-6 lg:mb-0">
          <h1 className="font-poppins text-lg text-[#9F9F9F] font-light mb-4">Help</h1>
          <h1 className="pb-6 font-poppins text-lg text-[#000000] font-medium">Payment Options</h1>
          <h1 className="pb-6 font-poppins text-lg text-[#000000] font-medium">Returns</h1>
          <h1 className="pb-6 font-poppins text-lg text-[#000000] font-medium">Privacy Policies</h1>
        </div>

        {/* Newsletter Section */}
        <div className="w-full lg:w-auto">
          <h1 className="font-poppins text-lg text-[#9F9F9F] font-light mb-4 text-center">Newsletter</h1>
          <div className="lg:flex lg:justify-center lg:items-center gap-2  ">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-950 text-sm py-2 w-[200px] text-[#9F9F9F] "
            />
            <button className="border-b border-gray-950 text-md font-bold py-2 w-[100px] text-[#000000]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-start pt-8 ml-10">
        <h1 className="text-[#000000] font-medium">
          2022 Meubel House. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;