'use client';
import React, { useState} from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";
const CartDetails = () => {
  const { cart, removeFromCart } = useCart(); 
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const router = useRouter();

  const handleCheckout = async () => {
    await Swal.fire({
      title: "Do you want to Proceed?",
      text: "Processing Your Order please Wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "Your Order has been successfully processed!.",
          icon: "success"
        });
        router.push("/checkout");
      }
    });
    
  }

  const handleQuantityChange = (id: string, value: number) => {
    setQuantities((prev: any) => ({
      ...prev,
      [id]: value >= 1 ? value : 1, // Ensure minimum value is 1
    })
  );
  };


  return (
    <div className="bg-white">
      <div className="font-sans bg-white max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Product Table */}
          <div className="flex-1">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:block bg-[#F9F1E7]">
              <div className="grid grid-cols-4 text-center">
                <h3 className="text-base font-medium p-4">Product</h3>
                <h3 className="text-base font-medium p-4">Price</h3>
                <h3 className="text-base font-medium p-4">Quantity</h3>
                <h3 className="text-base font-medium p-4">Subtotal</h3>
              </div>
            </div>

            {/* Mobile Product Card */}
            {
              cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="md:hidden bg-white rounded-lg shadow-sm mb-4">
                <div className="p-4">
                  {/* Product Image & Title */}
                  <div className="flex gap-4 mb-4">
                    <Image src={item.productImage} alt={item.title} width={100} height={100} className="rounded-lg bg-[#F9F1E7]" />
                    <div>
                      <h3 className="font-bold text-[#333]">{item.title}</h3>
                      <p className="text-sm text-[#777] mt-1">Rs. {item.price}</p>
                    </div>
                  </div>

                  {/* Quantity & Subtotal */}
                  <div className="flex justify-between items-center">
                    <input
                      type="number"
                      min="1"
                      value={quantities[item._id] || 1}
                      onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                      className="border rounded-lg px-3 py-1 w-16 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                    <p className="font-semibold text-lg text-black">Rs. {(quantities[item._id] || 1) * item.price}</p>

                    {/* Remove Button */}
                    <button onClick={() => removeFromCart(item._id)}>
                      <Image src="/remove.png" alt="Remove" width={24} height={24} className="cursor-pointer" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="md:hidden bg-white rounded-lg shadow-sm mb-4">
              <div className="p-4">
                <p className="text-sm text-[#777]">Your cart is empty.</p>
              </div>
            </div>
          )
            }

            {/* Desktop Product Row */}
            <div className="hidden md:block">
              {cart.length > 0 ? (
                
              
              cart.map((item) => (
                <div key={item._id} className="grid grid-cols-4 items-center text-center py-6 border-b">
                  {/* Product Image & Title */}
                  <div className="flex items-center gap-4 justify-center">
                    <Image src={item.productImage} alt={item.title} width={80} height={80} className="rounded-lg bg-[#F9F1E7]" />
                    <p className="font-bold text-[#333]">{item.title}</p>
                  </div>

                  {/* Product Price */}
                  <div>
                    <p className="text-[#777] text-lg font-medium">Rs. {item.price}</p>
                  </div>

                  {/* Quantity Input */}
                  <div className="flex justify-center">
                    <input
                      type="number"
                      min="1"
                      value={quantities[item._id] || 1}
                      onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                      className="border rounded-lg px-3 py-1 w-16 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                    />
                  </div>

                  {/* Subtotal & Remove Button */}
                  <div className="flex items-center justify-center gap-4">
                    <p className="font-semibold text-lg text-black">Rs. {(quantities[item._id] || 1) * item.price}</p>
                    <button onClick={() => removeFromCart(item._id)}>
                      <Image src="/remove.png" alt="Remove" width={24} height={24} className="cursor-pointer" />
                    </button>
                  </div>
                </div>
              ))
            ): (
              <p className="text-center py-10 text-2xl font-bold">Your Cart is Empty.</p>
            )
          }
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] p-6 rounded-lg w-full lg:w-[400px] mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold mb-6 text-center">Cart Totals</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-base">Total</span>
                <span className="text-[#B88E2F] text-xl font-medium">
                  Rs.{" "}
                  {cart.reduce((total, item) => total + (quantities[item._id] || 1) * item.price, 0)}
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={handleCheckout} className="inline-block border border-black text-center py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
function setQuantities(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

