"use client";
import { motion } from "framer-motion";
import { itemVariants } from "@/src/components/shared/navigationMenu/NavigationMenuItem";
import IconHexagon from "@/src/components/shared/icons/IconHexagon";

interface HeroInfoItemProps {
  heroInfoItem: { quantity: string; description: string };
}

export default function HeroInfoItemLaptop({
  heroInfoItem,
}: HeroInfoItemProps) {
  const { quantity, description } = heroInfoItem;

  return (
    <motion.li
      variants={itemVariants}
      className="absolute first:left-0 first:top-0 [&:nth-child(2)]:left-[130px] [&:nth-child(2)]:top-0 [&:nth-child(3)]:right-[130px] 
      [&:nth-child(3)]:top-0 last:top-0 last:right-0 flex flex-col items-center justify-center w-[110px] h-[130px]"
    >
      <IconHexagon className="absolute top-0 left-0 w-full h-full" />
      <span className="mb-2 text-lgb">{quantity}</span>
      <span className="text-md">{description}</span>
    </motion.li>
  );
}
