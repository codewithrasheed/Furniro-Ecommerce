"use client";

import Image from "next/image";
import React, { useState } from "react";
import sofa1 from "@/../public/sofa 1.png";
import sofa2 from "@/../public/sofa2.png";
import sofa3 from "@/../public/sofa3.png";
import sofa4 from "@/../public/sofa4.png";
import sofa5 from "@/../public/sofa5.png";
import fb from "@/../public/fb.png";
import linkedin from "@/../public/linkedin.png";
import twitter from "@/../public/twitter.png";
import seater1 from "@/../public/seater1.png";
import seater2 from "@/../public/seater2.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import cart1 from "@/../public/cart1.png";
import cart2 from "@/../public/cart2.png";
import cart3 from "@/../public/cart3.png";
import cart4 from "@/../public/cart4.png";
import label1 from "@/../public/Label1.png";
import label2 from "@/../public/Label2.png";
import label3 from "@/../public/Label3.png";

const ProductDetail = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#F9F1E7] w-full h-auto px-4 sm:px-20 mb-5">
        <p className="py-4 sm:py-7 text-sm sm:text-base text-[#9F9F9F]">
          Home &nbsp;<span className="text-black">&gt;</span>&nbsp; Shop &nbsp;
          <span className="text-black">&gt;</span>&nbsp; | &nbsp;&nbsp;
          <span className="text-black">Asgaard sofa</span>
        </p>
      </div>
      <div className="detail mb-5">
        <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
            <div className="w-full sm:flex gap-2">
              <div className="sm:space-y-3 w-full sm:w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4 overflow-x-auto sm:overflow-x-visible">
                {[sofa2, sofa3, sofa4, sofa5].map((sofa, index) => (
                  <Image
                    key={index}
                    src={sofa}
                    alt={`Product${index + 1}`}
                    className="w-20 sm:w-full cursor-pointer rounded-md bg-[#F9F1E7] px-1 py-3 inline-block sm:block"
                  />
                ))}
              </div>
              <div className="bg-[#F9F1E7] w-full sm:w-[420px] h-[300px] sm:h-[400px] flex items-center justify-center mt-4 sm:mt-0">
                <Image
                  src={sofa1}
                  alt="Product"
                  className="w-full h-full rounded-md object-contain"
                />
              </div>
            </div>

            <div className="px-4 sm:px-10">
              <h2 className="text-2xl font-semibold text-black font-[montserrat]">
                Asgaard sofa
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-[#9F9F9F] text-xl font-medium">
                  Rs. 250,000.00
                </p>
              </div>

              <div className="flex space-x-2 mt-4">
                <Image
                  src={"/rating.png"}
                  width={120}
                  height={20}
                  alt="rating"
                />
                <p className="text-[#9F9F9F] text-sm font-medium ml-2">
                  | &nbsp; 5 Customer Reviews
                </p>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-bold text-[#9F9F9F]">Size</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {["L", "XL", "XS"].map((size, index) => (
                    <button
                      key={size}
                      type="button"
                      className={`w-[30px] h-[30px] ${index === 0 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white"} font-semibold text-xs rounded-md flex items-center justify-center shrink-0`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-bold text-[#9F9F9F]">Color</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                <button
                      type="button"
                      className={`w-[30px] h-[30px] bg-[#816DFA] rounded-full flex items-center justify-center shrink-0`}
                    ></button>
                <button
                      type="button"
                      className={`w-[30px] h-[30px] bg-[#000] rounded-full flex items-center justify-center shrink-0`}
                    ></button>
                <button
                      type="button"
                      className={`w-[30px] h-[30px] bg-[#B88E2F] rounded-full flex items-center justify-center shrink-0`}
                    ></button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-5 w-full sm:w-[500px]">
                <button
                  type="button"
                  className="w-full sm:w-[230px] h-[64px] mt-8 py-3 bg-transparent border border-[#000] text-xl font-semibold rounded-xl snipcart-add-item"
                  data-item-id="786"
                  data-item-price="25000"
                  data-item-image={"sofa 1.png"}
                  data-item-name="Asgaard Sofa"
                  data-item-description="A comfortable and stylish Asgaard Sofa."
                  data-item-url="/product-detail"
                  data-currency="Rs"
                >
                  Add To Cart
                </button>
                <Link href={"/comparison"} className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="w-full sm:w-[215px] h-[64px] mt-8 px-6 py-3 bg-transparent border border-[#000] text-xl font-semibold rounded-xl"
                  >
                    + Compare
                  </button>
                </Link>
              </div>
              <div className="mt-8 border-t-[1px] border-t-[#9F9F9F]">
                <p className="mt-4 mb-2 text-[#9F9F9F]">
                  SKU <span className="px-12">: &nbsp; SS001</span>
                </p>
                <p className="mb-2 text-[#9F9F9F]">
                  Category <span className="px-3">: &nbsp; Sofas</span>
                </p>
                <p className="mb-2 text-[#9F9F9F]">
                  Tags{" "}
                  <span className="px-[44px]">
                    : &nbsp; Sofa, Chair, Home, Shop
                  </span>
                </p>
                <p className="flex mb-2 text-[#9F9F9F]">
                  Share{" "}
                  <span className="px-10 flex items-center justify-center gap-2">
                    : &nbsp;{" "}
                    {[fb, linkedin, twitter].map((icon, index) => (
                      <span key={index}>
                        <Image
                          src={icon}
                          width={20}
                          height={20}
                          alt={`social-icon-${index}`}
                        />
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-t-[#9F9F9F] mb-10">
        <div className="heading flex justify-center items-center gap-4 mt-10 mb-10 overflow-x-auto whitespace-nowrap px-4">
          <h1 className="font-semibold">Description</h1>
          <h1>Additional Information</h1>
          <h1>Reviews &#91;5&#93;</h1>
        </div>
        <div className="px-4 sm:px-36 mb-10">
          <p className="text-sm text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <br />
          <p className="text-sm text-[#9F9F9F]">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4">
          <Image
            src={seater1}
            width={570}
            alt="specification"
            className="w-full sm:w-auto"
          />
          <Image
            src={seater2}
            width={570}
            alt="specification"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
      <div className="border-t-[1px] border-t-[#9F9F9F] mb-10">
        <div className="heading flex justify-center items-center gap-4 mt-10 mb-10">
          <h1 className="font-semibold text-2xl sm:text-[36px]">
            Related Products
          </h1>
        </div>
        <div className="container px-5 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              image: cart1,
              label: label1,
              title: "Syltherine",
              description: "Stylish cafe chair",
              price: "Rp 2.500.000",
              oldPrice: "3.500.000",
            },
            {
              image: cart2,
              title: "Leviosa",
              description: "Stylish cafe chair",
              price: "Rp 2.500.000",
            },
            {
              image: cart3,
              label: label2,
              title: "Lolito",
              description: "Luxury big sofa",
              price: "Rp 7.000.000",
              oldPrice: "14.000.000",
            },
            {
              image: cart4,
              label: label3,
              title: "Respira",
              description: "Outdoor bar table and stool",
              price: "Rp 500.000",
            },
          ].map((product, index) => (
            <div
              key={index}
              onClick={() => router.push("/product-detail")}
              className="bg-[#F4F5F7] rounded-lg overflow-hidden"
            >
              <div className="relative">
                <a
                  href="/product-detail"
                  className="block relative h-64 overflow-hidden"
                >
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                {product.label && (
                  <Image
                    src={product.label}
                    className="absolute top-4 right-4"
                    alt="label"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.description}
                </h3>
                <p className="mt-1">
                  {product.price} &nbsp;{" "}
                  {product.oldPrice && (
                    <del className="text-gray-400">{product.oldPrice}</del>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href={"/shop"}>
            <button className="text-center w-[200px] border-2 border-[#B88E2F] text-xs px-10 py-3">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
