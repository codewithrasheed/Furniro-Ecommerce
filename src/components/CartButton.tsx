import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CartSidebar } from "./CartModal"
import Image from "next/image"
import shopCart from '@/../public/cart.png'

export function CartButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setOpen(true)}
        className="relative"
      >
        
              <Image src={shopCart} width={24} alt="Cart" />
        </Button>
      <CartSidebar open={open} onOpenChange={setOpen} />
    </>
  )
}

