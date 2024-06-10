"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import HeroInfoItem from "./HeroInfoItemMobTab";

interface HeroInfoListProps {
  heroList: { quantity: string; description: string }[];
}

export default function HeroInfoListMobTab({ heroList }: HeroInfoListProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.ul
      initial="hidden"
      variants={{
        visible: {
          transition: {
            duration: 0.8,
            delayChildren: 0.3,
            staggerChildren: 0.5,
            ease: "easeIn",
          },
        },
      }}
      animate={controls}
      ref={ref}
      className="laptop:hidden"
    >
      {heroList.map((item, idx) => (
        <HeroInfoItem key={idx} heroInfoItem={item}></HeroInfoItem>
      ))}
    </motion.ul>
  );
}
