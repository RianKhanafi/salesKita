import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import Modal, { IModal, IOpenModal } from "./modal";

interface IConfirmationType extends IOpenModal {
  message?: string;
  subMessage?: string;
  onContinue?: () => void;
  primaryTitle?: string;
}
export default function Confirmation({
  message = "Anda yakin mengubah data?",
  subMessage = "Aksi ini tidak dapat di batalkan",
  openModal,
  setOpenModal,
  onContinue,
  isLoading,
  primaryTitle,
}: IConfirmationType) {
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      size="md"
      title=""
      onContinue={onContinue}
      isLoading={isLoading}
      primaryTitle={primaryTitle}
    >
      <Box display="flex" justifyContent="center" my="30px">
        <Icons name={IconsName.conformation} />
      </Box>
      <Box textAlign="center">
        <Box fontSize="20px" fontWeight="semibold">
          {message}
        </Box>
        <Box fontSize="14px" opacity="0.5">
          {subMessage}
        </Box>
      </Box>
    </Modal>
  );
}
