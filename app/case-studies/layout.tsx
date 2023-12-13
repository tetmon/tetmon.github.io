import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}