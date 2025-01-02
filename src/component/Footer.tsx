import React from 'react';

const Footer = () => {
  return (
    <div className=" w-screen lg:wrapper h-auto lg:h-[555px] bg-[#FFFFFF] mb-0">
      {/* Main Content */}
      <div className="w-screen lg:w-[1240px] mx-auto lg:h-[419px] flex flex-col lg:flex-row lg:justify-around lg:items-start items-center border-b border-gray-400 pt-20">
        
        {/* Address Section */}
        <div className="w-screen lg:w-[285px] mt-10 lg:mt-0 lg:mb-0 text-center">
          <h1 className="text-md text-[#9F9F9F] font-light">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </h1>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-auto mt-10 lg:mt-0 text-center">
          <h1 className="font-poppins text-lg text-[#9F9F9F] font-light mb-6">Links</h1>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">Home</h2>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">Shop</h2>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">About</h2>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">Contact</h2>
        </div>

        {/* Help Section */}
        <div className="w-full lg:w-auto mt-10 lg:mt-0 text-center">
          <h1 className="font-poppins text-lg text-[#9F9F9F] font-light mb-6">Help</h1>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">Payment Options</h2>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">Returns</h2>
          <h2 className="pb-4 font-poppins text-lg text-[#000000] font-medium">Privacy Policies</h2>
        </div>

        {/* Newsletter Section */}
        <div className="w-full lg:w-auto mt-10 lg:mt-0 text-center">
          <h1 className="font-poppins text-lg text-[#9F9F9F] font-light mb-4">Newsletter</h1>
          <div className="lg:flex lg:justify-center lg:items-center gap-4">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-950 text-sm py-2 w-[250px] text-[#9F9F9F] focus:outline-none"
            />
            <button className="border-b border-gray-950 text-md font-bold py-2 w-[120px] text-[#000000]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-start pt-8 pl-10">
        <h1 className="text-[#000000] font-medium">
          2022 Meubel House. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
