"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export function CartSidebar({
  open,
  onOpenChange
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  // cart data
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Asgaard sofa",
      price: 250000.00,
      quantity: 1,
      image: "/Asgaard sofa.png"
    },
    {
      id: "2",
      name: "Casaliving Wood",
      price: 250000.00,
      quantity: 1,
      image: "/wood.png"
    }
  ]

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[420px] pr-0">
        <SheetHeader className="px-6">
          <SheetTitle className="text-left text-lg font-medium">Shopping Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-12rem)] px-6">
          <div className="space-y-6 py-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-lg bg-[#F9F1E7]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="mt-1 text-sm text-[#9F9F9F]">1 × Rs. {item.price.toLocaleString()}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-500">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t px-6 py-6">
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p>Subtotal</p>
            <p>Rs. {(500000.00).toLocaleString()}</p>
          </div>
          <div className="mt-6 flex justify-between gap-x-5 items-center">
            <Button 
              asChild
              variant="outline"
              className="border-[#000] w-[87px] h-[30px] text-black rounded-full">
              <Link href="/cart">
                Cart
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className=" border-[#000] w-[118px] h-[30px] text-black rounded-full"
            >
              <Link href="/checkout">
                Checkout
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className=" border-[#000] w-[135px] h-[30px] text-black rounded-full"
            >
              <Link href="/comparison">
                Comparison
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

