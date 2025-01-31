"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Whishlist from "@/../public/whishlist.png";
import User from "@/../public/user.png";
import Search from "@/../public/search.png";
import Logo from "@/../public/logo.png";
import { CartButton } from "./CartButton";

const Header = () => {
  // Mobile View Navbar Configuration
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      {/* Header Open */}
      <header className="flex py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex justify-between flex-wrap items-center gap-5 w-full mx-10">
          <Link
            href="/"
            className="text-2xl font-bold text-black flex items-center gap-1"
          >
            <Image src={Logo} width={40} height={32} alt="furniroLogo" />
            Furniro
          </Link>

          {/* Toogle Button */}
          <button
            id="toggleOpen"
            className="lg:hidden ml-auto"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Mobile Sidebar Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMobileMenu}
            >
              <div
                className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeMobileMenu}
                  className="absolute top-4 right-4 z-[100] rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 fill-black"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
                  </svg>
                </button>

                {/* Mobile Header */}
                <ul className="space-y-4 p-6 pt-16">
                  <li>
                    <Link
                      href="/"
                      className="text-black block font-semibold text-[15px] hover:text-gray-600"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="text-black block font-semibold text-[15px] hover:text-gray-600"
                      onClick={closeMobileMenu}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-black block font-semibold text-[15px] hover:text-gray-600"
                      onClick={closeMobileMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-black block font-semibold text-[15px] hover:text-gray-600"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-black block font-semibold text-[15px] hover:text-gray-600"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Desktop Header */}
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-3">
              <li className="px-3">
                <Link
                  href="/"
                  className="text-black block font-semibold text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="px-3">
                <Link
                  href="/shop"
                  className="text-black block font-semibold text-[15px]"
                >
                  Shop
                </Link>
              </li>
              <li className="px-3">
                <Link
                  href="/about"
                  className="text-black block font-semibold text-[15px]"
                >
                  About
                </Link>
              </li>
              <li className="px-3">
                <Link
                  href="/contact"
                  className="text-black block font-semibold text-[15px]"
                >
                  Contact
                </Link>
              </li>
              <li className="px-3">
                <Link
                  href="/blog"
                  className="text-black block font-semibold text-[15px]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-14 md:space-x-8">
            <Link href="/">
              <Image src={User} width={24} alt="User" />
            </Link>
            <Link href="">
              <Image src={Search} width={24} alt="User" />
            </Link>
            <Link href="/">
              <Image src={Whishlist} width={24} alt="Whishlist" />
            </Link>
            <CartButton />
          </div>
        </div>
      </header>
      
      {/* Header Close */}
    </>
  );
};

export default Header;
