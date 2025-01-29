import Image from "next/image";
import { Star } from 'lucide-react';
import dropdown from "@/../public/dropdown.png";
import Link from "next/link";

export default function ProductComparison() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          <div className="md:order-1">
            <h1 className="text-[28px] font-semibold mb-4 mt-4">
              Go to Product page for more Products
            </h1>
            <p className="text-[20px] text-[#9F9F9F] underline underline-offset-8">
              <Link href={"/shop"}>
              View More
              </Link>
            </p>
          </div>
          <div className="space-y-4 md:order-2">
            <div className="aspect-square relative bg-[#F9F1E7] rounded-lg w-full md:w-[280px] h-[170px]">
              <Image
                src="/Asgaard sofa 3.png"
                alt="Asgaard Sofa"
                fill
                className="object-cover p-4"
              />
            </div>
            <div>
              <h2 className="font-semibold text-2xl">Asgaard Sofa</h2>
              <p className="mb-2 text-[18px] font-semibold">Rs. 250,000.00</p>
              <div className="flex gap-1 items-center">
                <p className="font-semibold">4.7</p>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FFC700] text-[#FFC700]"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4 md:order-3">
            <div className="aspect-square relative bg-[#F9F1E7] rounded-lg w-full md:w-[280px] h-[170px]">
              <Image
                src="/outdoor-sofa.png"
                alt="Outdoor Sofa Set"
                fill
                className="object-cover p-4"
              />
            </div>
            <div>
              <h2 className="font-semibold text-2xl">Outdoor Sofa Set</h2>
              <p className="mb-2 text-[18px] font-semibold">Rs. 224,000.00</p>
              <div className="flex gap-1 items-center">
                <p className="font-semibold">4.2</p>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FFC700] text-[#FFC700]"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 md:order-4">
            <h1 className="text-2xl font-semibold mb-3">Add a Product</h1>
            <button className="bg-[#B88E2F] w-full md:w-[240px] h-[30px] px-8 py-2 rounded-lg text-white flex items-center justify-between">
              Choose a Product{" "}
              <Image src={dropdown} alt="dropdown" width={18} height={8} />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* General Section */}
        <section className="border-t-[1px] border-t-[#D9D9D9]">
          <h3 className="text-xl font-medium mb-4 mt-4">General</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-medium text-[#9F9F9F]">Sales Package</div>
            <div>1 sectional sofa</div>
            <div>1 Three Seater, 2 Single Seater</div>

            <div className="font-medium text-[#9F9F9F]">Model Name</div>
            <div>TFCBLIGRBL6SRHS</div>
            <div>DTUBLIGRBL6SRHS</div>

            <div className="font-medium text-[#9F9F9F]">Secondary Material</div>
            <div>Solid Wood</div>
            <div>Solid Wood</div>

            <div className="font-medium text-[#9F9F9F]">Configuration</div>
            <div>L-shaped</div>
            <div>L-shaped</div>

            <div className="font-medium text-[#9F9F9F]">
              Upholstery Material
            </div>
            <div>Fabric + Cotton</div>
            <div>Fabric + Cotton</div>

            <div className="font-medium text-[#9F9F9F]">Upholstery Color</div>
            <div>Bright Grey & Blue</div>
            <div>Bright Grey & Blue</div>
          </div>
        </section>

        {/* Product Section */}
        <section>
          <h3 className="text-xl font-medium mb-4">Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-medium text-[#9F9F9F]">Filling Material</div>
            <div>Foam</div>
            <div>Foam</div>

            <div className="font-medium text-[#9F9F9F]">Finish Type</div>
            <div>Bright Grey & Blue</div>
            <div>Bright Grey & Blue</div>

            <div className="font-medium text-[#9F9F9F]">
              Adjustable Headrest
            </div>
            <div>No</div>
            <div>Yes</div>

            <div className="font-medium text-[#9F9F9F]">
              Maximum Load Capacity
            </div>
            <div>280 KG</div>
            <div>300 KG</div>

            <div className="font-medium text-[#9F9F9F]">
              Origin of Manufacture
            </div>
            <div>India</div>
            <div>India</div>
          </div>
        </section>

        {/* Dimensions Section */}
        <section>
          <h3 className="text-xl font-medium mb-4">Dimensions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-medium text-[#9F9F9F]">Width</div>
            <div>265.32 cm</div>
            <div>265.32 cm</div>

            <div className="font-medium text-[#9F9F9F]">Height</div>
            <div>76.32 cm</div>
            <div>76.32 cm</div>

            <div className="font-medium text-[#9F9F9F]">Depth</div>
            <div>7.62 cm</div>
            <div>7.62 cm</div>

            <div className="font-medium text-[#9F9F9F]">Weight</div>
            <div>45 KG</div>
            <div>65 KG</div>

            <div className="font-medium text-[#9F9F9F]">Seat Height</div>
            <div>41.91 cm</div>
            <div>41.91 cm</div>

            <div className="font-medium text-[#9F9F9F]">Leg Height</div>
            <div>5.84 cm</div>
            <div>5.84 cm</div>
          </div>
        </section>

        {/* Warranty Section */}
        <section>
          <h3 className="text-xl font-medium mb-4">Warranty</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="font-medium text-[#9F9F9F]">Warranty Summary</div>
            <div>1 Year Manufacturing Warranty</div>
            <div>1 Year Manufacturing Warranty</div>

            <div className="font-medium text-[#9F9F9F]">
              Warranty Service Type
            </div>
            <div>
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@xyz.com
            </div>
            <div>
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@xyz.com
            </div>

            <div className="font-medium text-[#9F9F9F]">
              Covered in Warranty
            </div>
            <div>Warranty Against Manufacturing Defect</div>
            <div>Warranty Against Manufacturing Defect</div>

            <div className="font-medium text-[#9F9F9F]">
              Not Covered in Warranty
            </div>
            <div>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </div>
            <div>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </div>

            <div className="font-medium text-[#9F9F9F]">Domestic Warranty</div>
            <div>
              <p className="mb-10">1 Year</p>
              <button className="w-full md:w-[215px] h-[60px] bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">
                Add To Cart
              </button>
            </div>

            <div>
              <p className="mb-10">3 Years</p>

              <button className="w-full md:w-[215px] h-[60px] bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

