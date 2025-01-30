import React from 'react';
import Image from 'next/image';

const RoomsPage = () => {
  return (
    <div className="bg-[#FCF8F3]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-4xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-[#3A3A3A] sm:text-4xl sm:leading-none">
                50+ Beautiful rooms inspiration
              </h2>
              <p className="text-[#616161] md:text-lg">
                Our designer already made a lot of beautiful prototype of rooms that inspire you.
              </p>
            </div>
            <div>
                <a
                href="/shop"
                aria-label=""
                className="inline-flex items-center font-semibold bg-[#B88E2F] text-white px-6 py-3 text-[16px]"
              >
                Explore More
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="relative w-full max-w-xl lg:max-w-5xl lg:mx-auto">
              <div className="relative">
                <Image
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src="/rooms.png"
                  alt="Inner Peace"
                  width={1196}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;