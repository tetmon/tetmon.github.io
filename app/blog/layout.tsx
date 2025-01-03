"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isMainBlogPage = pathname !== '/blog/the-threeVs-of-data';

  return (
    <main>
      {pathname !== '/blog/the-threeVs-of-data' && <Navbar />}
      {children}
      {pathname !== '/blog/the-threeVs-of-data' && <Footer />}
    </main>
  );
}