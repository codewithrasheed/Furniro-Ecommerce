import Image from "next/image";
import React from "react";
import photogallery from "@/../public/photo gallery.png"
const Photogallery = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-[20px] md:text-[20px] font-bold text-center my-10 text-[#616161] mb-0">
          Share your setup with{" "}
          <br />
          <span className="text-[#3A3A3A] md:text-[40px] text-[30px]">#FuniroFurniture</span>
        </h1>
        <Image 
        src={photogallery}
        alt="PhotoGallery"
        className="w-full mt-0"
        />
      </div>
    </>
  );
};

export default Photogallery;
