import { animateFn, linksAni } from "@/lib/animate";
import { NavLinkProps } from "@/types";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function NavLinks({ name, tag, menu, idx, handleClick }: NavLinkProps) {
  const navlink = "relative p-1 text-base tracking-snug whitespace-nowrap ";
  const menulink = "";

  const onClick = (tag: string) => {
    handleClick && handleClick();
    const element = document.getElementById(tag);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.p
      {...(menu && animateFn(linksAni, idx))}
      onClick={() => onClick(tag)}
    >
      <motion.span
        className={twMerge(
          "cursor-pointer transition-colors transition-sm hover:font-medium hover:text-secondary",
          menu ? menulink : navlink,
        )}
      >
        {name}
      </motion.span>
    </motion.p>
  );
}

export default NavLinks;
