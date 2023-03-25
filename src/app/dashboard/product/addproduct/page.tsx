"use client";
import { Box, Spacer } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { Button, Select, Text, TextIcon, Upload } from "components/atoms";
import { FormInput } from "components/molecules";
import Link from "next/link";

export default function addProduct() {
  return (
    <Box
      display="flex"
      ml={{ base: "auto", md: "auto", lg: "250px", xl: "250px" }}
      p={{ base: "15px", md: "15px", lg: 0, xl: 0 }}
    >
      <Box width={{ base: "auto", md: "auto", lg: "564px", xl: "564px" }}>
        <Link href="/dashboard/product/">
          <Box mb="32px">
            <TextIcon
              color="primary.hard"
              fontSize="19px"
              fontWeight="semibold"
              icon={IconsName.arrowLeft}
            >
              Kembali
            </TextIcon>
          </Box>
        </Link>
        <Text fontSize="19px" fontWeight="semibold" color="dark.hard">
          Tambah Produk Baru
        </Text>

        <Box mt="48px">
          <FormInput
            label="Nama Produk"
            inputType="input"
            placeholder="Masukan nama produk"
            full
          />
          <Box
            display="flex"
            justifyContent="space-between"
            mt="17px"
            width="100%"
          >
            <Box pr="10px">
              <FormInput
                label="Harga Beli"
                inputType="input"
                placeholder="Rp. 10.000"
                width={{ base: "100%", md: "100%", lg: "255px", xl: "255px" }}
              />
            </Box>
            <Box pl="10px">
              <FormInput
                label="Harga Jual"
                inputType="input"
                placeholder="Rp. 10.000"
                width={{ base: "100%", md: "100%", lg: "255px", xl: "255px" }}
              />
            </Box>
          </Box>
          <Box mt="17px">
            <FormInput label="Di Jual" inputType="switch" width="255px" />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="17px">
            <FormInput
              label="Quantity"
              inputType="input"
              placeholder="Masukan quantity"
              width="255px"
            />
            <Box />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="17px">
            <FormInput label="Kategori" placeholder="Pilih kategori">
              <Select placeholder="Pilih kategori" />
            </FormInput>
            <Box />
          </Box>

          <Box mt="17px">
            <FormInput label="Pakai Diskon" inputType="switch" width="255px" />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="17px">
            <FormInput label="Diskon" placeholder="Pilih diskon">
              <Select placeholder="Pilih diskon" />
            </FormInput>
            <Box />
          </Box>
          <Box display="flex" justifyContent="space-between" mt="17px">
            <FormInput label="Upload Gambar">
              <Upload />
            </FormInput>
            <Box />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt="93px">
          <Button typeButton="secondary">Batal</Button>
          <Spacer />
          <Button typeButton="primary">Simpan</Button>
        </Box>
      </Box>
    </Box>
  );
}
