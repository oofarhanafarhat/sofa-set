import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#FFF9E5] to-[#FFF1CC] text-black font-poppins transition-all duration-300">
      {/* Top Section */}
      <div className="max-w-[1240px] mx-auto px-6 py-16 border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
        
        {/* Address */}
        <div>
          <p className="text-gray-600 text-sm leading-relaxed">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-500 text-md mb-4">Links</h3>
          <ul className="space-y-2">
            {['Home', 'Shop', 'Contact'].map((link, idx) => (
              <li
                key={idx}
                className="hover:text-[#b88e2f] cursor-pointer transition-colors duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-500 text-md mb-4">Help</h3>
          <ul className="space-y-2">
            {['Payment Options', 'Returns', 'Privacy Policies'].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-[#b88e2f] cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-500 text-md mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-black bg-transparent px-2 py-2 text-sm w-full focus:outline-none placeholder:text-gray-500"
            />
            <button className="border-b border-black font-semibold text-sm px-4 py-2 hover:text-[#b88e2f] transition-colors duration-200">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm py-6 text-black">
        © 2022 Meubel House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
