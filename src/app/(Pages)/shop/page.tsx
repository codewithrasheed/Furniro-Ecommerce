'use client'
import React, { useEffect, useState } from 'react'
import Support from '@/components/Support'
import PageBanner from '@/components/PageBanner'
import ShopProducts from '@/components/ShopProducts'
import ShopFilter from '@/components/ShopFilter'
import { getProducts } from '@/sanity/sanity.query'
import {Spinner} from "@nextui-org/spinner";


const Shop = () => {
  const [product, setProduct] = useState<any>([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoader(true) // Show loader before starting the fetch
        const fetchedProducts = await getProducts()
        setProduct(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoader(false) // Hide loader after fetching data
      }
    }
    fetchProducts()
  }, [])
  
  return (
    <>
      <PageBanner title={"Shop"} desc={"Home > Shop"} />
      <ShopFilter />
      <div className="container m-auto px-4 py-8 w-full">
      {loader ? (
        <div className='flex justify-center items-center'>
        <Spinner className='' size="lg" label='Loading...' />
      </div>): 
      (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          product.map((item: any, index: number) => (
            <ShopProducts key={index} {...item} />
          )
        )}
      </div>
  )
      }1

    </div>
      <div>
      <ul className="flex space-x-5 justify-center font-[sans-serif]">
      <li
        className="flex items-center justify-center shrink-0 bg-[#B88E2F] cursor-pointer text-[20px] text-white px-[13px] h-9 rounded-md">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 bg-[#F9F1E7] cursor-pointer text-[20px] text-black px-[13px] h-9 rounded-md">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0 bg-[#F9F1E7]  cursor-pointer text-[20px] text-black px-[13px] h-9 rounded-md">
        3
      </li>
      <li
        className="flex items-center justify-center shrink-0 cursor-pointer text-[20px] bg-[#F9F1E7] px-[20px] text-black h-10 rounded-md">
        Next
      </li>
    </ul>
      </div>
      <div>
      <Support />
      </div>
  </>
  )
}

export default Shop