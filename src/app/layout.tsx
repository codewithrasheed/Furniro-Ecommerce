import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furniro | Furniture Website",
  description:
    "This is a Furniture Website Furniro created with Next.js, Tailwind CSS, and custom CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${montserrat.className} ${poppins.className} antialiased`}
      >
        <Toaster />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
