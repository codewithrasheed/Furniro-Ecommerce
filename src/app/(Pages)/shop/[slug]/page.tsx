"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import fb from "@/../public/fb.png";
import linkedin from "@/../public/linkedin.png";
import twitter from "@/../public/twitter.png";
import Link from "next/link";
import { getHomeProducts, getProducts } from "@/sanity/sanity.query";
import { useParams } from "next/navigation";
import ShopProducts from "@/components/ShopProducts";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";


const ProductDetail = () => {
  const { toast } = useToast()
  const {addToCart} = useCart()
  const [product, setProduct] = useState<any>([]);
  const [relatedProduct, setRelatedProduct] = useState<any>([]);
   
  useEffect(() => {
      async function fetchProducts() {
        try {
          const fetchedProducts = await getProducts()
          setProduct(fetchedProducts)
        } catch (error) {
          console.error("Error fetching products:", error)
        }
      }
      fetchProducts()
      async function relatedProducts() {
        try {
          const relatedProducts = await getHomeProducts()
          setRelatedProduct(relatedProducts)
        } catch (error) {
          console.log("Error fetching related products:", error)
        }
      }
      relatedProducts()
    }, [])
    const url = useParams()
    

  return (
    <>
    {product.filter((products: any) => products.slug === url.slug).map((product: any) =>(
      <div key={product._id}>
      <div className="bg-[#F9F1E7] w-full h-auto px-4 sm:px-20 mb-5">
        <p className="py-4 sm:py-7 text-sm sm:text-base text-[#9F9F9F]">
          Home &nbsp;<span className="text-black">&gt;</span>&nbsp; Shop &nbsp;
          <span className="text-black">&gt;</span>&nbsp; | &nbsp;&nbsp;
          <span className="text-black">{product.title}</span>
        </p>
      </div><div className="detail mb-5">
          <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
              <div className="w-full sm:flex gap-2">
                <div className="w-full sm:w-[520px] h-[300px] sm:h-[400px] flex items-center justify-center mt-4 sm:mt-0">
                  <Image
                    src={product.productImage}
                    width={700}
                    height={500}
                    alt="Product"
                    className="w-full h-full rounded-md object-contain" />
                </div>
              </div>

              <div className="px-4 sm:px-10">
                <h2 className="text-2xl font-semibold text-black font-[montserrat]">
                  {product.title}
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="text-[#9F9F9F] text-xl font-medium">
                    Rs.{product.price}.00
                  </p>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Image
                    src={"/rating.png"}
                    width={120}
                    height={20}
                    alt="rating" />
                  <p className="text-[#9F9F9F] text-sm font-medium ml-2">
                    | &nbsp; 5 Customer Reviews
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    {product.summary}
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
                    onClick={() => {
                      toast({
                        description: "Product added to cart Successfully.",
                        duration: 3000, // 3 seconds
                      })
                      addToCart(product)}}
                    className="w-full sm:w-[230px] h-[64px] mt-8 py-3 bg-transparent border border-[#000] text-xl font-semibold rounded-xl snipcart-add-item">
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
                    ID <span className="px-12">: &nbsp;{product._id}</span>
                  </p>
                  <p className="mb-2 text-[#9F9F9F]">
                    Category <span className="px-3">: &nbsp; {product.category}</span>
                  </p>
                  <p className="mb-2 text-[#9F9F9F]">
                    Tags
                    <span className="px-[40px]">
                      : {product.tags?.map((tag: any) => tag).join(", ")}
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
                            alt={`social-icon-${index}`} />
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
          <div className="heading flex justify-center items-center gap-2 sm:gap-4 mt-10 mb-10 overflow-x-auto whitespace-nowrap px-4">
            <h1 className="font-semibold">Description</h1>
            <h1>Additional Information</h1>
            <h1>Reviews &#91;5&#93;</h1>
          </div>
          <div className="px-4 sm:px-36 mb-10">
            <p className="text-sm text-[#9F9F9F]">
              {product.description}
            </p>
          </div>
        </div>
        <div className="border-t-[1px] border-t-[#9F9F9F] mb-10">
          <div className="heading flex justify-center items-center gap-4 mt-10 mb-10">
            <h1 className="font-semibold text-2xl sm:text-[36px]">
              Related Products
            </h1>
          </div>
          <div className="container px-5 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProduct.map((item: any, index: number) => (
              <ShopProducts key={index} {...item} />
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
        </div>
    ))}
  </>
);
};

export default ProductDetail;
