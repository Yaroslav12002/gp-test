"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface BenefitsListItemProps {
  benefit: { title: string; description: string; icon: string };
}

export default function BenefitsListItem({ benefit }: BenefitsListItemProps) {
  const { title, description, icon } = benefit;

  const [ref, inView] = useInView({
    threshold: 1,
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

  const itemVariants = {
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

  return (
    <motion.li
      variants={itemVariants}
      className="flex gap-4 tablet:w-[46.4%] laptop:w-[33%] px-3 py-4 [&:not(:last-child)]:mb-2 tablet:[&:not(:last-child)]:mb-0 text-white-text"
    >
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt={title}
        className={`w-[32px] h-[32px]`}
      />

      <motion.div
        animate={controls}
        ref={ref}
        initial="hidden"
        variants={{
          visible: {
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.5,
              ease: "easeIn",
            },
          },
        }}
      >
        <motion.h3 variants={itemVariants} className="mb-2 text-mdb">
          {title}
        </motion.h3>
        <motion.p variants={itemVariants} className={`text-base`}>
          {description}
        </motion.p>
      </motion.div>
    </motion.li>
  );
}
