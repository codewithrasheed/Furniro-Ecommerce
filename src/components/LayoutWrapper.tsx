"use client"; // Mark as Client Component

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { readonly children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith("/studio"); // Adjust if needed
  // const isDetailRoute = pathname.startsWith(`/shop/${"slug"}`); // Adjust if needed

  return (
    <>
      {!isStudioRoute  && <Header />}
      {children}
      {!isStudioRoute && <Footer />}
    </>
  );
}
