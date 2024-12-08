import Image from "next/image";
import React from "react";
import quality from "@/../public/quality.png";
import warranty from "@/../public/guarantee.png";
import shipping from "@/../public/shipping.png";
import support from "@/../public/support.png";

const Support = () => {
  return (
    <>
      <div className="bg-[#FAF3EA] w-full mt-10 flex flex-wrap md:flex-row md:justify-between md:items-center  py-8">
        <div className="flex items-center md:justify-center gap-2 mb-8 md:mb-8 mx-12 md:mx-4">
          <Image src={quality} width={60} alt="quality" />
          <div>
            <h1 className="font-semibold text-[20px] text-[#242424]">High Quality</h1>
            <p className="text-[16px] text-[#898989]">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center md:justify-center gap-2 mb-8 md:mb-8 mx-12 md:mx-4">
          <Image src={warranty} width={60} alt="warranty" />
          <div>
            <h1 className="font-semibold text-[20px] text-[#242424]">Warranty Protection</h1>
            <p className="text-[16px] text-[#898989]">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center md:justify-center gap-2 mb-8 md:mb-8 mx-12 md:mx-4">
          <Image src={shipping} width={60} alt="shipping" />
          <div>
            <h1 className="font-semibold text-[20px] text-[#242424]">Free Shipping</h1>
            <p className="text-[16px] text-[#898989]">Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center md:justify-center gap-2 mb-8 md:mb-8 mx-12 md:mx-4">
          <Image src={support} width={60} alt="Support" />
          <div>
            <h1 className="font-semibold text-[20px] text-[#242424]">24/7 Support</h1>
            <p className="text-[16px] text-[#898989]">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;