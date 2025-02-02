"use client";
import ShopProducts from "@/components/ShopProducts";
import { getHomeProducts } from "@/sanity/sanity.query";
import Link from "next/link";
import { useEffect, useState } from "react";

const Products = () => {
   const [product, setProduct] = useState<any>([])
    useEffect(() => {
      async function AllProducts() {
        const products = await getHomeProducts()
        setProduct(products)
      }
      AllProducts()
    }, [])
  return (
    <section className="body-font px-4 lg:px-20">
      <h1 className="text-2xl lg:text-4xl text-center font-semibold mb-10">
        Our Products
      </h1>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((item: any, index: number) => (
          <ShopProducts key={index} {...item} />
        ))}
      </div>
      <div className="lg:mx-[470px] mt-10 mb-10 md:mx-56">
          <Link href={"/shop"}>
            <button className="text-center w-[200px] border-2 border-[#B88E2F] text-xs px-10 py-3">
              Show More
            </button>
          </Link>
        </div>
    </div>
    </section>
  );
};

export default Products;
