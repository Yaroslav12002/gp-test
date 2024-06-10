"use client";
import { motion } from "framer-motion";
import Container from "../Container";
import SocialLinks from "../socialLinks/SocialLinks";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import CallBack from "../callBack/CallBack";

interface HeaderMenuProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

const variants = {
  visible: {
    transition: {
      type: "spring",
      bounce: 0,
      ease: "easeIn",
      duration: 2,
      delayChildren: 2.2,
      staggerChildren: 0.35,
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

export default function HeaderMenu({
  isHeaderMenuOpened = false,
  setIsHeaderMenuOpened,
}: HeaderMenuProps) {
  return (
    <motion.div
      initial={false}
      animate={isHeaderMenuOpened ? "visible" : "hidden"}
      className={`absolute top-[72px] left-0 z-20 w-[100vw] overflow-hidden transition-[height] duration-[600ms] ease-out-quart bg-headerGradient backdrop-blur-sm ${
        isHeaderMenuOpened ? "h-[calc(100vh-72px)] no-doc-scroll" : "h-0"
      }`}
    >
      <Container className="flex flex-col items-center gap-y-10 h-full py-10">
        <HeaderNavigationMenu onClick={() => setIsHeaderMenuOpened(false)} />
        <motion.div
          variants={variants}
          className="flex flex-col items-center gap-y-10"
        >
          <SocialLinks />
          <CallBack closeHeaderMenu={() => setIsHeaderMenuOpened(false)} />
        </motion.div>
      </Container>
    </motion.div>
  );
}
