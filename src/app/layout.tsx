import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "./index.css";
import "./utilities.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BugaPay",
  description: "Buga Pay",
  icons: { icon: "/images/logo-black.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
