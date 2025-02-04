"use client";
import React from "react";
const Confirmation = () => {
  const orderData = JSON.parse(localStorage.getItem("order") ?? "[]");
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
            {orderData.map((item: any) => (
                <div key={item._id}>
                  <p>#{item.orderNumber}</p>
                  <p>{item.orderDate}</p>
                  <p>${item.total}</p>
                  <p>{item.paymentMethod ?? "Visa"}</p>
                  <p>{item.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
