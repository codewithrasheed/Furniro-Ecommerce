import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-[1px] border-t-[#D9D9D9] text-gray-400 py-8 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-8 text-black">Funiro.</h3>
          <p className="text-[#9F9F9F] text-[16px]">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div> 
          <h3 className="text-sm font-medium mb-8">Links</h3>
          <ul className="space-y-2 text-black">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-300">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-8">Help</h3>
          <ul className="space-y-2 text-black">
            <li>
              <a href="#" className="hover:text-gray-300">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Return
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-sm font-medium mb-8">Newsletter</h3>
          <div className="flex lg:flex-row flex-col items-start lg:items-center gap-4">
          <input
                type="email"
                placeholder="Enter your Email Address"
                className="outline-none border-b-[1px] border-b-[#000]"
                />
              <button className="underline underline-offset-4 text-black">
                SUBSCRIBE
              </button>
        </div>
        
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-4 border-t-2 border-t-[#D9D9D9]">
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-medium text-black">{new Date().getFullYear()} Funiro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
