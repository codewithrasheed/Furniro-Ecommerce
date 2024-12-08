import React from "react";
import PageBanner from "@/components/PageBanner";
import Support from "@/components/Support";
import CheckoutDetails from "@/components/CheckoutDetail";
const CheckOut = () => {
  return (
    <>
      <PageBanner title={"Checkout"} desc={"Home > Checkout"} />
      <CheckoutDetails />
      <Support />
    </>
  );
};

export default CheckOut;
