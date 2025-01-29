import React from 'react'
import BannerImg from "@/../public/banner.png";
import Image from 'next/image'

const PageBanner = ({title, desc}: any) => {
  return (
    <>
      <div className="relative mb-0">
        <Image
          src={BannerImg}
          alt="Hero"
          className="w-full h-[116px] sm:h-[216px] md:h-[316px] object-cover"
        />
        <div className="absolute inset-x-0 bottom-6 sm:bottom-16 md:bottom-32 flex flex-col items-center">
          <h1 className="text-[32px] sm:text-[36px] md:text-[42px] text-[#000] font-semibold">
            {title}
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000] font-normal">
            <b>{desc}</b>
          </p>
        </div>
      </div>
    </>
  )
}

export default PageBanner
