import type { Metadata } from "next";
import Header from "./_ui/Header";

export const metadata: Metadata = {
  title: "BugaPay | Dashboard",
  description: "Buga Pay",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
}
