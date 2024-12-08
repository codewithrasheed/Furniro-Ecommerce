'use client'

import Image from 'next/image'
import { Info, ArrowLeftRight, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface ProductCardProps {
  image: string
  title: string
  category: string
  price: string
  cutPrice?: string
  label?: string
}


export default function ShopProducts({ image, title, category, price, cutPrice, label }: ProductCardProps) {
  return (
    <div className="bg-[#F4F5F7] rounded-lg overflow-hidden group relative">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6">
      <Link href={"/cart"}>
        <Button 
          className="w-[140px] bg-white hover:bg-white/90  text-[#B88E2F] rounded-none font-semibold text-base"
          >
          Add to cart
        </Button>
          </Link>
        <div className="flex items-center gap-6 text-white text-sm">
          <Link href={"/product-detail"}>
          <button className="flex items-center gap-1 hover:text-white/90 transition-colors">
            <Info className="w-4 h-4" />
            Detail
          </button>
          </Link>
          <Link href={"/comparison"}>
          <Button  className="flex items-center gap-1 hover:text-white/90 transition-colors">
            <ArrowLeftRight className="w-4 h-4" />
            Compare
          </Button>
          </Link>
          <button className="flex items-center gap-1 hover:text-white/90 transition-colors">
            <Heart className="w-4 h-4" />
            Like
          </button>
        </div>
      </div>
      {/* Label */}
      {label && (
        <div className="absolute top-4 right-4 z-10">
          <Image src={label} alt="Label" width={40} height={40} />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <p className="mt-1">
          Rp {price}
          {cutPrice && (
            <span className="ml-2 text-gray-400 line-through">Rp {cutPrice}</span>
          )}
        </p>
      </div>
    </div>
  )
}

