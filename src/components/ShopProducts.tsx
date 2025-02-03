'use client'
import Image from 'next/image'
import {  ArrowLeftRight, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import label from '@/../public/Label1.png'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import { useToast } from '@/hooks/use-toast'
interface ProductCardProps {
  productImage: string
  title: string
  category: string
  price: string,
  slug: any,
  _id: string
}


export default function ShopProducts({ productImage, title, category, price, slug, _id }: Readonly<ProductCardProps>) {
  const [like, setLike] = useState(false);
  const {addToCart} = useCart()
  const {toast} = useToast()
const product = {
    productImage: productImage,
    title: title,
    category: category,
    price: price,
    slug: slug,
    _id: _id
  }


  return (
    <div key={_id} className="bg-[#F4F5F7] rounded-lg overflow-hidden group relative">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={productImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6">
      <Link href={`/shop/${slug}`}>
        <Button 
          className="w-[140px] bg-white hover:bg-white/90  text-[#B88E2F] rounded-none font-semibold text-base"
          >
          View Product
        </Button>
          </Link>
        <div className="flex items-center gap-6 text-white text-sm">
          <Button 
          onClick={() => {
            toast({
              description: "Product added to cart Successfully.",
              duration: 3000, // 3 seconds
            })
            addToCart(product)}}
          className="flex items-center gap-1 hover:text-white/90 transition-colors">
            <ArrowLeftRight className="w-4 h-4" />
            Add To Cart
          </Button>
          <button onClick={()=>{
              setLike(!like)
            }} className="flex items-center gap-1 hover:text-white/90 transition-colors">
            <Heart fill={like ? "red" : "none"} stroke={like ? "none": 'white'} className="w-4 h-4 " />
            Like
          </button>
        </div>
      </div>
      {/* Label */}
        <div className="absolute top-4 right-4 z-10">
          <Image src={label} alt="Label" width={40} height={40} />
        </div>
      <div className="p-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <p className="mt-1">
          Rp {price}.000
        </p>
      </div>
    </div>
  )
}

