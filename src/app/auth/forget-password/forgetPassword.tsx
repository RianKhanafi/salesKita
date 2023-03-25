"use client";
import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Text } from "components/atoms";
import { FormInput } from "components/molecules";
import Link from "next/link";

export default function ForgetPassword() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="auto" height="auto" px="90" py="122">
        <Box display="flex" justifyContent="center">
          <Icons name={IconsName.logo} width={302.52} height={48} />
        </Box>

        <Box mt={62}>
          <FormInput
            label="Email"
            inputType="input"
            placeholder="Masukan Email"
            width={564}
            type="email"
          />
        </Box>

        <Box display="flex" justifyContent="space-between" mt="11px">
          <Text color="dark.soft" fontSize="12px">
            Kami akan mengirimkan email untuk verifikasi lebih lanjut
          </Text>

          <Link href="/auth/login">
            <Text color="primary.hard" fontSize="12px">
              Login?
            </Text>
          </Link>
        </Box>
        <Button typeButton="primary" mt="29px" full>
          Masuk
        </Button>
      </Box>
    </Box>
  );
}
