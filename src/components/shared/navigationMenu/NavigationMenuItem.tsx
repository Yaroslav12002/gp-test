"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavigationMenuItemProps {
  menuItem: { title: string; id: string };
  onClick?: () => void;
}

export const itemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavigationMenuItem({
  menuItem,
  onClick,
}: NavigationMenuItemProps) {
  const { title, id } = menuItem;
  const locale = useLocale();

  return (
    <motion.li
      onClick={onClick}
      className="relative text-inherit"
      variants={itemVariants}
    >
      <Link
        href={`/${locale}${id}`}
        className="inline-block py-[9.5px] laptop:py-3 outline-none after:content-[''] after:absolute after:left-0 after:bottom-[1.5px] after:h-[1px] 
        after:w-0 after:bg-accent laptop:hover:after:w-full laptop:focus-visible:after:w-full after:overflow-hidden after:transition-[width] 
        after:duration-[600ms] after:ease-out-quart"
      >
        {title}
      </Link>
    </motion.li>
  );
}
