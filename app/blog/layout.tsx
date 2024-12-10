"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isMainBlogPage = pathname !== '/blog/the-3vs-of-bigdata';

  return (
    <main>
      {pathname !== '/blog/the-3vs-of-bigdata' && <Navbar />}
      {children}
      {pathname !== '/blog/the-3vs-of-bigdata' && <Footer />}
    </main>
  );
}