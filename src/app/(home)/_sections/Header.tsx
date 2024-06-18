"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/NavLinks";
import { Button } from "@/components/Button";
import { Dispatch, SetStateAction } from "react";
import { URLS, navLinks } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import logo from "@svgs/logo-full.svg";

type HeaderProps = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setOpenMenu }: HeaderProps) => {
  return (
    <header
      className="relative w-full px-3 py-4 shadow-sm max-sm:shadow-sm sm:px-4 sm:py-3.5"
      style={{ zIndex: 99 }}
    >
      <div className="row-flex-btwn mx-auto w-[96%] gap-4">
        <Link href="/" className="group relative transition-sm hover:scale-95">
          <Image
            src={logo}
            alt="bugupay"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>

        <div className="md:row-flex hidden gap-8">
          {navLinks?.map((link, idx) => <NavLinks key={idx} {...link} />)}
        </div>

        <div
          className="icon sm:!hidden"
          onClick={() => setOpenMenu && setOpenMenu(true)}
        >
          <HiOutlineMenuAlt4 size={22} className="" color="#333" />
        </div>

        <div className="row-flex gap-4 max-sm:hidden">
          <Link href={URLS.signin}>
            <Button title="Log in" className="bg-transparent text-foreground" />
          </Link>
          <Link href={URLS.signup}>
            <Button title="Sign up" className=" " />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
