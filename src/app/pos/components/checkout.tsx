import React from "react";
import { Box } from "@chakra-ui/react";
import { FormInput, Modal } from "components/molecules";
import { IOpenModal } from "components/molecules/modal";

const Checkout = ({ openModal, setOpenModal }: IOpenModal) => {
  return (
    <Modal
      size="xl"
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="Data Pelanggan"
    >
      <FormInput
        label="Nama Pelanggan"
        placeholder="Masukan nama pelanggan"
        color="gray.medium"
      />
      <Box mt="20px" />
      <FormInput
        label="Nomor Telepon (opsional)"
        placeholder="Masukan nomor telepon"
        color="gray.medium"
      />
    </Modal>
  );
};

export default Checkout;
