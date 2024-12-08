import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const montserrat = Montserrat({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
  weight: ['400', '800'], // Add the desired font weights
  variable: '--font-montserrat', // Optional: Use CSS variables
});
const poppins = Poppins({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'], // Add the desired font weights
  variable: '--font-poppins', // Optional: Use CSS variables
});

export const metadata: Metadata = {
  title: "Furniro | Furniture Website",
  description: "This is a Furniture Website Furniro created with next js, tailwind css, and custom css",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
