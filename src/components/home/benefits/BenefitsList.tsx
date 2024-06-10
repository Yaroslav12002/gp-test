"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import BenefitsListItem from "./BenefitsListItem";

export default function BenefitsList() {
  const t = useTranslations("Benefits");

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

  const benefitsList = [
    {
      title: t("location"),
      description: t("locationDescription"),
      icon: "location.svg",
    },
    {
      title: t("transport"),
      description: t("transportDescription"),
      icon: "truck.svg",
    },
    {
      title: t("junction"),
      description: t("junctionDescription"),
      icon: "road.svg",
    },
    {
      title: t("security"),
      description: t("securityDescription"),
      icon: "camera.svg",
    },
    {
      title: t("charge"),
      description: t("chargeDescription"),
      icon: "charge.svg",
    },
    {
      title: t("shelter"),
      description: t("shelterDescription"),
      icon: "shelter.svg",
    },
  ];

  return (
    <motion.ul
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
      animate={controls}
      ref={ref}
      className="tablet:flex tablet:flex-wrap"
    >
      {benefitsList.map((benefit, idx) => (
        <BenefitsListItem key={idx} benefit={benefit} />
      ))}
    </motion.ul>
  );
}
