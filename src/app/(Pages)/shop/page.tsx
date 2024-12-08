'use client'
import React from 'react'
import Support from '@/components/Support'
import PageBanner from '@/components/PageBanner'
import ProductProvider from '@/context/ProductProvider'
import ShopProducts from '@/components/ShopProducts'
import Image from 'next/image'
import ShopFilter from '@/components/ShopFilter'

const products = [
  {
    image: "/cart1.png",
    title: "Syltherine",
    category: "Stylish cafe chair",
    description:
      "Syltherine is a Stylish cafe chair that combines modern design with exceptional comfort. Perfect for cafes, dining areas, or even your workspace, it adds a touch of elegance while offering a cozy seating experience.",
    price: "2.500.000",
    rating: "/rating.png",
    label: "/Label1.png",
    cutprice: "Rp 3.500.000",
  },
  {
    image: "/cart2.png",
    title: "Leviosa",
    category: "Stylish cafe chair",
    description:
      "Leviosa is a Stylish cafe chair designed to enhance any interior with its sleek and contemporary look. Whether for casual dining or a professional setting, it delivers both style and ergonomic comfort.",
    price: "2.500.000",
    rating: "/rating.png",
    label: "",
    cutprice: "",
  },
  {
    image: "/cart3.png",
    title: "Lolito",
    category: "Luxury Big Sofa",
    description:
      "Lolito is a Luxury Big Sofa crafted to elevate your living space with its plush design and premium materials. Ideal for relaxing or entertaining guests, this sofa brings unmatched sophistication and comfort.",
    price: "7.000.000",
    rating: "/rating.png",
    label: "/Label2.png",
    cutprice: "Rp 14.000.000",
  },
  {
    image: "/cart4.png",
    title: "Respira",
    category: "Outdoor bar table and stool",
    description:
      "Respira is an Outdoor bar table and stool set that combines functionality with a stylish aesthetic. Built for both durability and elegance, it is perfect for creating a chic outdoor entertainment area.",
    price: "500.000",
    rating: "/rating.png",
    label: "/Label3.png",
    cutprice: "",
  },
  {
    image: "/cart5.png",
    title: "Grifo",
    category: "Night lamp",
    description:
      "Grifo is a Night lamp designed to create a warm and relaxing ambiance in any room. With its minimalist yet impactful design, it is a perfect addition to your bedroom or living space for gentle lighting.",
    price: "1.500.000",
    rating: "/rating.png",
    label: "",
    cutprice: "",
  },
  {
    image: "/cart6.png",
    title: "Muggo",
    category: "Small mug",
    description:
      "Muggo is a Small mug thoughtfully designed for your favorite beverages. Its compact size and ergonomic handle make it the perfect companion for your morning coffee, tea, or any drink of choice.",
    price: "150.000",
    rating: "/rating.png",
    label: "/Label3.png",
    cutprice: "",
  },
  {
    image: "/cart7.png",
    title: "Pingky",
    category: "Cute bed set",
    description:
      "Pingky is a Cute bed set that transforms your bedroom into a cozy and inviting sanctuary. Crafted with soft and high-quality materials, it ensures a peaceful and luxurious sleeping experience.",
    price: "7.000.000",
    rating: "/rating.png",
    label: "/Label2.png",
    cutprice: "Rp 14.000.000",
  },
  {
    image: "/cart8.png",
    title: "Potty",
    category: "Minimalist flower pot",
    description:
      "Potty is a Minimalist flower pot that seamlessly blends into any home decor. Perfect for showcasing your favorite plants, it brings a touch of nature and modern simplicity to your space.",
    price: "500.000",
    rating: "/rating.png",
    label: "/Label3.png",
    cutprice: "",
  },
];

const Shop = () => {
  return (
    <>
      <PageBanner title={"Shop"} desc={"Home > Shop"} />
      <ShopFilter />
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ShopProducts key={index} {...product} />
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ShopProducts key={index} {...product} />
        ))}
      </div>
    </div>
      <div>
      <ul className="flex space-x-5 justify-center font-[sans-serif]">
      <li
        className="flex items-center justify-center shrink-0 bg-[#B88E2F] cursor-pointer text-[20px] text-white px-[13px] h-9 rounded-md">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 bg-[#F9F1E7] cursor-pointer text-[20px] text-black px-[13px] h-9 rounded-md">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0 bg-[#F9F1E7]  cursor-pointer text-[20px] text-black px-[13px] h-9 rounded-md">
        3
      </li>
      <li
        className="flex items-center justify-center shrink-0 cursor-pointer text-[20px] bg-[#F9F1E7] px-[20px] text-black h-10 rounded-md">
        Next
      </li>
    </ul>
      </div>
      <div>
      <Support />
      </div>
  </>
  )
}

export default Shop