"use client";

import { usePathname } from "next/navigation";
import Header from "./_ui/Header";

export default function Provider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPlain = pathname.includes("/signup/success");
  const type =
    pathname.includes("/signup") || pathname.includes("/verify")
      ? "signup"
      : "signin";

  return (
    <>
      <Header plain={isPlain} type={type} />
      <main className="min-h-[80%]">{children}</main>
    </>
  );
}
