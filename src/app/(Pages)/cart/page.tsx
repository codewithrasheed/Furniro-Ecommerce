import React from "react";
import Banner from "@/../public/Banner.png";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CartDetails from "@/components/CardDetails";
import Support from "@/components/Support";

const Cart = () => {
  return (
    <>
      <PageBanner title={"Cart"} desc={"Home > Cart"} />
      <CartDetails />
      <Support />
    </>
  );
};

export default Cart;
