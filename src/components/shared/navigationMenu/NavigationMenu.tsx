"use client";
import { motion } from "framer-motion";
import NavigationMenuItem from "./NavigationMenuItem";

interface MenuItem {
  title: string;
  id: string;
}

interface NavigationMenuProps {
  menuList: MenuItem[];
  onClick?: () => void;
  className?: string;
}

export const variants = {
  visible: {
    transition: {
      type: "spring",
      bounce: 0.6,
      ease: "easeIn",
      duration: 2.5,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export default function NavigationMenu({
  menuList,
  onClick,
  className = "",
}: NavigationMenuProps) {
  return (
    <motion.nav>
      <motion.ul
        variants={variants}
        className={`flex flex-col items-center text-base text-white-text ${className}`}
      >
        {menuList.map((menuItem, idx) => (
          <NavigationMenuItem key={idx} menuItem={menuItem} onClick={onClick} />
        ))}
      </motion.ul>
    </motion.nav>
  );
}
