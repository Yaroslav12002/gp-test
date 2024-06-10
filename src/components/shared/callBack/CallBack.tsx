"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../navigationMenu/NavigationMenuItem";
import CallBackModal from "./CallBackModal";
import { NotificationModal } from "../notifications/NotificationModal";

interface CallBackProps {
  closeHeaderMenu?: () => void;
}

export default function CallBack({ closeHeaderMenu }: CallBackProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShawn, setIsNotificationShawn] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <CallBackModal
        closeHeaderMenu={closeHeaderMenu}
        setIsError={setIsError}
        setIsNotificationShawn={setIsNotificationShawn}
      />
      <NotificationModal
        isNotificationShawn={isNotificationShawn}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShawn={setIsNotificationShawn}
      />
    </motion.div>
  );
}
