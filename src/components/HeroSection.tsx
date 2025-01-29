import Image from 'next/image'
import React from 'react'
import banner from "@/../public/heroBanner.png"
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>
    <div className='mainContainer relative flex flex-col lg:flex-row items-center'>
        <div className='md:w-full w-100 lg:w-auto'>
            <Image 
                className='lg:w-full w-full object-cover' 
                src={banner} 
                alt='Herobanner' 
                priority 
            />
        </div>
        <div className='bg-[#FFF3E3] 
            w-[90%] max-w-[600px] 
            mx-auto lg:mx-0 
            p-6 lg:p-8 
            mt-4 lg:mt-0 
            rounded-lg 
            lg:absolute 
            lg:top-[60%] 
            lg:left-[700px] 
            lg:transform 
            lg:-translate-y-1/2'>
            <div className='py-4'>
                <p className='font-semibold text-sm lg:text-base'>New Arrival</p>
                <h1 className='
                    text-2xl lg:text-4xl 
                    text-[#B88E2F] 
                    font-extrabold 
                    leading-snug 
                    text-center lg:text-left'>
                    Discover Our <br className='hidden lg:block' /> New Collection
                </h1>
                <p className='
                    font-medium 
                    mt-2 
                    text-center lg:text-left 
                    text-sm lg:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                    elit tellus, luctus nec ullamcorper mattis.
                </p>
            </div>
            <div className='mt-6 lg:mt-10 flex justify-center lg:justify-start'>
                <Link href={"/shop"}>
                    <button className='
                        bg-[#B88E2F] 
                        text-white 
                        uppercase 
                        px-6 lg:px-10 
                        py-3 lg:py-4 
                        text-xs lg:text-sm 
                        hover:bg-[#9C7A2A] 
                        transition-colors 
                        duration-300'>
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection