import Navbar from "@/components/shared/navbar/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], // Subset to include
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add all weights
  variable: "--font-poppins", // CSS variable for the font
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className={`font-poppins`}>{children}</body>
    </html>
  );
}
