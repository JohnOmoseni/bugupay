"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@svgs/logo-full.svg";
import { Button } from "@/components/Button";

interface AuthHeaderProps {
  plain?: boolean;
  type?: "signup" | "signin";
}

const Header = ({ plain, type }: AuthHeaderProps) => {
  return (
    <header className="relative w-full p-3 pr-2 sm:px-6 sm:py-4">
      <div className="row-flex-btwn gap-6">
        <Link href="#" className="group relative transition-sm hover:scale-95">
          <Image
            src={logo}
            alt="bugupay"
            width={90}
            height={90}
            className="object-contain"
          />
        </Link>
        {!plain && (
          <div className="row-flex gap-2">
            <span className="text-base font-normal max-sm:text-center max-sm:text-[0.8rem]">
              {type === "signup"
                ? "Already have an account?"
                : "New to BuguPay?"}
            </span>
            <Link href={type === "signup" ? "/signin" : "/signup"}>
              <Button
                title={type === "signup" ? "Login" : "Sign up"}
                className=" "
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
