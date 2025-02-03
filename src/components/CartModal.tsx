"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/hooks/useCart"; // Import the custom hook

export function CartSidebar({ open, onOpenChange }: Readonly<{ open: boolean; onOpenChange: (open: boolean) => void }>) {
  const { cart, removeFromCart } = useCart(); // Get cart data & remove function

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[420px] pr-0">
        <SheetHeader className="px-6">
          <SheetTitle className="text-left text-lg font-medium">Shopping Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-12rem)] px-6">
          <div className="space-y-6 py-6">
            {cart.length > 0 ? (
              cart.map((item: any) => (
                <div key={item._id} className="flex gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-lg bg-[#F9F1E7]">
                    <Image src={item.productImage} alt={item.title} width={80} height={80} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#9F9F9F]">1 x Rs. {item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item._id)} className="text-gray-400 hover:text-gray-500">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>
        </ScrollArea>
        <div className="border-t px-6 py-6">
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p>Subtotal</p>
            <p>Rs. {cart.reduce((total, item) => total + item.price, 0).toLocaleString()}</p>
          </div>
          <div className="md:mt-4 flex justify-center md:justify-between gap-x-3 md:gap-x-5 items-center">
            <Button asChild variant="outline" className="border-[#000] w-[87px] h-[30px] text-black rounded-full">
              <Link href="/cart">Cart</Link>
            </Button>
            <Button asChild variant="outline" className=" border-[#000] w-[118px] h-[30px] text-black rounded-full">
              <Link href="/checkout">Checkout</Link>
            </Button>
            <Button asChild variant="outline" className=" border-[#000] w-[135px] h-[30px] text-black rounded-full">
              <Link href="/comparison">Comparison</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
