"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const Complete = () => {
  const [orderData, setOrderData] = useState<any[]>([]);
  const [cartData, setCartData] = useState<any[]>([]);
  const router = useRouter()
  useEffect(() => {
      if (typeof window !== "undefined") {
          const storedOrder = localStorage.getItem("order");
          setOrderData(storedOrder ? JSON.parse(storedOrder) : null);
      }
      if (typeof window !== "undefined") {
          const storedCart = localStorage.getItem("cart");
          setCartData(storedCart ? JSON.parse(storedCart) : null);
      }
  }, []);

  const continueShopping = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("order");
    router.push("/shop");
  }
 
  return (
    <div>
      <div>
        <div className="text-center p-20">
          <h1 className="text-3xl font-bold">
            THANK YOU,{" "}
            <span className="text-[#C7973F] font-bold uppercase">
              Your Order is Placed.
            </span>
          </h1>
          <p className="font-bold">
            We have received your order and will begin processing it soon. You
            will receive an email confirmation shortly.
          </p>
          <p className="font-semibold">
            If you have any questions, please feel free to contact us at{" "}
            <span className="text-[#C7973F] font-bold">
              support@furniro.com
            </span>
          </p>
        </div>
        <div className="order-summary p-8 border-5 border-[#C7973F] mx-10 mb-10">
          <h1 className="text-2xl font-bold text-center">Order Summary</h1>

          <div className="flex justify-center gap-5 items-center shadow-lg p-8">
            <div className="">
              <p>Order Number:</p>
              <p>Order Date:</p>
              <p>Order Total:</p>
              <p>Payment Method:</p>
              <p>Shipping Address:</p>
            </div>
            <div className="">
            {orderData?.map((item: any) => (
                <div key={item._id}>
                  <p>#{item.orderNumber}</p>
                  <p>{item.orderDate}</p>
                  <p>Rs {item.total}</p>
                  <p>{item.paymentMethod ?? "Visa"}</p>
                  <p>{item.address}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-5 items-center shadow-lg p-8">
            <div className="">
          <h1 className="text-2xl font-bold text-center mb-5">Product Summary</h1>
            {cartData?.map((item: any) => (
                <div className="flex gap-5 items-center mb-5" key={item._id}>
                  <Image src={item.productImage} alt="Product" width={80} height={50} />
                  <p>{item.title}</p>
                  <p>Rs {item.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center gap-5 items-center mt-5">
            <button
              onClick={continueShopping}
              className="bg-[#C7973F] text-white py-2 px-4 rounded-md w-full uppercase"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
