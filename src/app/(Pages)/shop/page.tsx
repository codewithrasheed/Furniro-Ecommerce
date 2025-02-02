"use client";

import ShopContent from "@/components/ShopContent";
import { Suspense } from "react";

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
