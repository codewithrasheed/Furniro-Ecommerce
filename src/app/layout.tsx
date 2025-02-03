import type { Metadata } from "next";
import "./globals.css";
import { Lato, Montserrat, Quicksand } from "next/font/google";
import { Poppins } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "@/components/ui/toaster";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
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
        className={`${lato.className} antialiased`}
      >
        <Toaster />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
