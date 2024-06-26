import type { Metadata } from "next";
import "./globals.css";
import {Footer } from "@/components";
import {NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Yash Car Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
