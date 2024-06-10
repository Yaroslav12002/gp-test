"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import CallBackForm from "./CallBackForm";
import SectionTitle from "../SectionTitle";

interface CallBackModalProps {
  closeHeaderMenu?: () => void;
  setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
  setIsNotificationShawn: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

export default function CallBackModal({
  closeHeaderMenu,
  setIsError,
  setIsNotificationShawn,
}: CallBackModalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const t = useTranslations();

  const handleOpen = () => {
    closeHeaderMenu?.();
    onOpen();
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleOpen}>
        {t("Buttons.callBack")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        radius="none"
        scrollBehavior="outside"
        hideCloseButton={true}
        className="max-w-[360px] min-h-[564px] tablet:max-w-[440px] tablet:min-w-[440px] tablet:min-h-[480px] laptop:max-w-[664px] 
        laptop:tablet:min-w-[664px] laptop:min-h-[654px] py-10 laptop:p-20 px-5 text-white-text"
        classNames={{ backdrop: "bg-backdrop bg-opacity-90" }}
      >
        <ModalContent className="relative bg-primary">
          <CloseButton onClick={onClose} />
          <ModalBody>
            <SectionTitle className="text-white-text">
              {t("Buttons.callBack")}
            </SectionTitle>
            <p className="mb-5 text-base laptop:text-lg text-white-text text-center">
              {t("WriteUs.leaveRequest")}
            </p>
            <CallBackForm
              onClose={onClose}
              setIsError={setIsError}
              setIsNotificationShawn={setIsNotificationShawn}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
