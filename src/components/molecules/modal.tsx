"use client";
import { Spacer, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  Modal as ModalChakraUI,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";
import { Button } from "components/atoms";
export interface IOpenModal {
  setOpenModal: () => void;
  openModal: boolean;
  isLoading?: boolean;
}

export interface IModal extends IOpenModal {
  title?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
  children: React.ReactNode;
  footer?: boolean;
  size: string;
  onContinue?: () => void;
}

export default function Modal({
  title = "Title",
  primaryTitle = "Simpan",
  secondaryTitle = "Batal",
  children,
  footer = true,
  openModal,
  setOpenModal,
  size,
  onContinue,
  isLoading,
}: IModal) {
  // const { isOpen, onClose, onOpen } = useDisclosure();
  const finalRef = React.useRef(null);

  // useEffect(() => {
  //   if (openModal) onOpen();
  // }, [openModal]);

  return (
    <ModalChakraUI
      isCentered
      finalFocusRef={finalRef}
      isOpen={openModal}
      onClose={setOpenModal}
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {footer ? (
          <ModalFooter>
            <Button
              typeButton="secondary"
              onClick={setOpenModal}
              disabled={isLoading}
            >
              {secondaryTitle}
            </Button>
            <Spacer />
            <Button
              typeButton="primary"
              onClick={onContinue}
              isLoading={isLoading}
            >
              {primaryTitle}
            </Button>
          </ModalFooter>
        ) : null}
      </ModalContent>
    </ModalChakraUI>
  );
}
