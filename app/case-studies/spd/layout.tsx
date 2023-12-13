import BackMenu from "@/components/backMenu";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <BackMenu />
      {children}
    </main>
  );
}