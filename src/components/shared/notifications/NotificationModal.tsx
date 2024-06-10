"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import CloseButton from "../buttons/CloseButton";

interface NotififcationModalProps {
  isNotificationShawn: boolean;
  isError: boolean;
  setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
  setIsNotificationShawn: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

export const NotificationModal = ({
  isNotificationShawn,
  isError,
  setIsError,
  setIsNotificationShawn,
}: NotififcationModalProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const t = useTranslations("Notifications");

  useEffect(() => {
    if (isNotificationShawn) {
      onOpen();
    }
  }, [isNotificationShawn, onOpen]);

  const closeNotification = () => {
    onClose();
    setIsError(false);
    setIsNotificationShawn(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      radius="none"
      hideCloseButton={true}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      className="justify-between max-w-[360px] max-h-[318px] tablet:max-w-[440px] tablet:min-w-[440px] tablet:max-h-[378px] laptopt:max-w-[664px] laptop:min-w-[664px] laptop:max-h-[516px]
            px-5 py-10 tablet:p-[60px] laptop:p-20 m-0 overflow-y-auto tab:overflow-y-visible bg-primary"
      classNames={{
        backdrop: `bg-backdrop bg-opacity-90`,
      }}
    >
      <ModalContent className="relative w-full h-full m-0 text-white-bg">
        <CloseButton onClick={closeNotification} />
        <ModalBody className="flex flex-col items-center gap-0 p-0">
          <h3
            className={`mb-5 laptop:mb-3 text-xlsb tablet:text-2xlsb laptop:text-4xlsb`}
          >
            {isError ? t("error") : t("success")}
          </h3>
          <p className="mb-10 tablet:mb-14 text-base laptop:text-lg text-center">
            {isError ? t("errorDescription") : t("successDescription")}
          </p>
          <Image
            src="/images/icons/error.svg"
            alt="error icon"
            width="0"
            height="0"
            sizes="100%"
            className={`${
              isError ? "block" : "hidden"
            } w-[100px] h-[100px] laptop:w-[176px] laptop:h-[176px]`}
          />
          <Image
            src="/images/icons/success.svg"
            alt="success icon"
            width="0"
            height="0"
            sizes="100%"
            className={`${
              isError ? "hidden" : "block"
            } w-[100px] h-[100px] laptop:w-[176px] laptop:h-[176px]`}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
