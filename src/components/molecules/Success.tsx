import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import Modal, { IOpenModal } from "./modal";

interface ISUccessType extends IOpenModal {
  message?: string;
  subMessage?: string;
  onContinue?: () => void;
}
export default function SUccess({
  message = "Data Berhasil Disimpan",
  subMessage = "Klik ok untuk kembali ke halaman sebelumnya",
  onContinue,
  openModal,
  setOpenModal,
}: ISUccessType) {
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      size="md"
      title=""
      onContinue={onContinue}
      primaryTitle="Ok"
    >
      <Box display="flex" justifyContent="center" my="30px">
        <Icons name={IconsName.success} />
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
