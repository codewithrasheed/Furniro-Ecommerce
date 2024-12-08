// import Image from "next/image";
// import React from "react";
// import dining from "@/../public/dining.png"
// import living from "@/../public/living.png"
// import bedroom from "@/../public/bedroom.png"
// const HeroSection2 = () => {
//   return (
//     <>
//       <div>
//         <h1 className="text-[32px] font-semibold mt-10 text-center">
//           Browse The Range
//         </h1>
//         <p className="text-[#666666] text-[20px] text-center">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//         <div className="flex items-center px-20 gap-10">
//           <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//             <div className="min-h-[256px]">
//               <Image src={dining} alt="" className="w-full rounded-lg" />
//             </div>
//           <div className="p-6 text-center">
//             <h3 className="text-gray-800 text-xl font-bold">Dining</h3>
//           </div>
//           </div>
//           <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//             <div className="min-h-[256px]">
//               <Image src={living} alt="" className="w-full rounded-lg" />
//             </div>
//           <div className="p-6 text-center">
//             <h3 className="text-gray-800 text-xl font-bold">Living</h3>
//           </div>
//           </div>
//           <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//             <div className="min-h-[256px]">
//               <Image src={bedroom} alt="" className="w-full rounded-lg" />
//             </div>
//           <div className="p-6 text-center">
//             <h3 className="text-gray-800 text-xl font-bold">Bedroom</h3>
//           </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection2;



import React from "react";

const HeroSection2 = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-2xl lg:text-[32px] font-semibold mt-6 lg:mt-10 text-center">
          Browse The Range
        </h1>
        <p className="text-[#666666] text-base lg:text-[20px] text-center mb-6 lg:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:gap-10 mt-4">
          <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto lg:mx-0">
            <div className="min-h-[180px] lg:min-h-[256px]">
              <img src="/dining.png" alt="Dining" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="p-4 lg:p-6 text-center">
              <h3 className="text-gray-800 text-lg lg:text-xl font-bold">Dining</h3>
            </div>
          </div>
          <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto lg:mx-0">
            <div className="min-h-[180px] lg:min-h-[256px]">
              <img src="/living.png" alt="Living" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="p-4 lg:p-6 text-center">
              <h3 className="text-gray-800 text-lg lg:text-xl font-bold">Living</h3>
            </div>
          </div>
          <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto lg:mx-0">
            <div className="min-h-[180px] lg:min-h-[256px]">
              <img src="/bedroom.png" alt="Bedroom" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="p-4 lg:p-6 text-center">
              <h3 className="text-gray-800 text-lg lg:text-xl font-bold">Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;