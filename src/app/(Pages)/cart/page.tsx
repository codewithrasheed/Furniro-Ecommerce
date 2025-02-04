'use client';
import React, { useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import CartDetails from "@/components/CardDetails";
import Support from "@/components/Support";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";

const Cart = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
      if (status === "unauthenticated") {
          router.push("/login"); // Redirect if not logged in
      }
  }, [status, router]);

  if (status === "loading") return <Spinner size="lg" />;
  return (
    <>
      <PageBanner title={"Cart"} desc={"Home > Cart"} />
      <CartDetails />
      <Support />
    </>
  );
};

export default Cart;
