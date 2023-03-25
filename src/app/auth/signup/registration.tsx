"use client";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Text } from "components/atoms";
import { FormInput } from "components/molecules";
import Link from "next/link";

import { useState } from "react";

export default function RegistrationPage() {
  const [form, setForm] = useState<any>({
    username: null,
    password: null,
    email: null,
  });

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setForm({ ...form, [name]: value } as Pick<authForm, keyof authForm>);
  // };

  // const onSubmit = () => increment(form);

  return (
    <Box width="100%" height="100vh" overflow="auto">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="50px"
        mb="50px"
      >
        <Box
          width="auto"
          height="auto"
          px={{ base: "30px", lg: "90px", xl: "90px" }}
          py={{ base: "30px", lg: "122px", xl: "122px" }}
        >
          <Box display="flex" justifyContent="center">
            <Icons name={IconsName.logo} width={302.52} height={48} />
          </Box>

          <Box mt={62}>
            <FormInput
              label="Name"
              inputType="input"
              placeholder="Masukan Nama"
              name="name"
              width={{ base: "100%", lg: 564, xl: 564 }}
              // onChange={onChange}
            />
            <Box mt="20px">
              <FormInput
                label="Username"
                inputType="input"
                placeholder="Masukan Username"
                name="username"
                width={{ base: "100%", lg: 564, xl: 564 }}
                // onChange={onChange}
              />
            </Box>
            <Box mt="20px">
              <FormInput
                label="Phone"
                inputType="input"
                placeholder="Masukan Phone"
                name="phone"
                width={{ base: "100%", lg: 564, xl: 564 }}
                // onChange={onChange}
              />
            </Box>
            <Box mt="20px">
              <FormInput
                label="Email"
                inputType="input"
                placeholder="Masukan Email"
                width={{ base: "100%", lg: 564, xl: 564 }}
                type="email"
                name="email"
                // onChange={onChange}
              />
            </Box>
            <Box mt="20px">
              <FormInput
                label="Password"
                inputType="input"
                placeholder="Masukan Password"
                type="password"
                width={{ base: "100%", lg: 564, xl: 564 }}
                name="password"
                // onChange={onChange}
              />
            </Box>
          </Box>

          <Box display="flex" justifyContent="flex-end" mt="11px">
            <Link href="/dashboard/auth/login">
              <Text color="primary.hard" fontSize="12px">
                Login?
              </Text>
            </Link>
          </Box>

          <Button
            typeButton="primary"
            mt="29px"
            full
            // onClick={onSubmit}
            // isLoading={state.signup.status === "loading"}
          >
            Daftar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
