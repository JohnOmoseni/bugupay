"use client";

import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import logo from "@svgs/logo-full.svg";
import AvatarWrapper from "@/components/ui/components/Avatar";
import TooltipWrapper from "@/components/ui/components/TooltipWrapper";
import Dropdown from "@/components/ui/components/Dropdown";
import { IconType } from "react-icons/lib";

import { IoIosSwap } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi2";
import { RiMoonClearFill } from "react-icons/ri";
import { LuSun } from "react-icons/lu";
import Search from "./Search";

type HeaderProps = {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setOpenMenu }: HeaderProps) => {
  return (
    <header
      className="relative w-full px-3 py-4 max-sm:shadow-sm sm:px-4"
      style={{ zIndex: 99 }}
    >
      <div className="row-flex-btwn mx-auto w-[98%] gap-6">
        <Link
          href="/dashboard"
          className="relative transition-sm hover:scale-95"
        >
          <Image
            src={logo}
            alt="bugupay"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        <Search />

        <div className="row-flex gap-4">
          <div className="row-flex gap-4">
            <Dropdown
              trigger={
                <span className="relative">
                  <HiOutlineBell
                    className="icon text-gray transition-colors group-hover:font-semibold group-hover:text-secondary"
                    size={22}
                  />
                  <span className="absolute -top-1 right-0 h-3 w-3 rounded-[50%] bg-orange-600"></span>
                </span>
              }
              list={[]}
            />

            <TooltipWrapper
              trigger={
                <span>
                  <LuSun
                    className="icon text-gray transition-colors group-hover:font-semibold group-hover:text-secondary"
                    size={22}
                  />
                </span>
              }
              content={<p className="p-1 text-center">Change Theme</p>}
            />
          </div>

          <Link href="/profile" className="row-flex gap-2">
            <AvatarWrapper />
            <div className="flex-column">
              <span className="ml-1">Hi</span>
              <p className="w-full break-words text-lg font-semibold leading-4">
                John Omoseni
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Row = ({
  title = "Dashboard",
  icon: Icon,
  tooltipLabel,
}: {
  title?: string;
  icon?: IconType;
  tooltipLabel?: string;
}) => {
  return (
    <>
      <TooltipWrapper
        trigger={
          <div className="row-flex group cursor-pointer gap-2">
            <span>
              <IoIosSwap
                className="icon text-gray transition-colors group-hover:font-semibold group-hover:text-secondary"
                size={22}
              />
            </span>
            <p className="text-gray transition-sm group-hover:font-semibold group-hover:text-secondary">
              {title}
            </p>
          </div>
        }
        content={<p className="p-1 text-center">{tooltipLabel ?? "Tooltip"}</p>}
      />
    </>
  );
};
