import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
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
        <SessionProvider>
        <Toaster />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
