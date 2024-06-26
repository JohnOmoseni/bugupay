"use client";

import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import { slideinVariant, animateFn, animateMenu } from "@/lib/animate";
import MenuLinks from "./NavLinks";

type Props = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

function Menu({ setOpenMenu }: Props) {
  return (
    <motion.div
      style={{ zIndex: 999 }}
      className="fixed inset-0 block h-dvh w-full bg-black/20 backdrop-blur-sm md:hidden"
      {...animateFn(animateMenu)}
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="menu flex-column absolute right-0 top-0 isolate h-full w-[80%] max-w-[500px] overflow-hidden bg-white px-[4%] text-foreground backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="icon absolute right-4 top-3 p-1 transition-colors active:scale-95"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <IoClose size="25" className="" fill="#333" />
        </span>

        <nav className="flex-column mx-auto flex-1 gap-8 pt-[10%] text-xl">
          {navLinks.map((link, idx) => (
            <MenuLinks
              key={idx}
              {...link}
              menu
              idx={idx}
              handleClick={() => setOpenMenu(false)}
            />
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default Menu;
