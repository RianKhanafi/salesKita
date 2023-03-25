"use client";
import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Text } from "components/atoms";
import { FormInput } from "components/molecules";
import Link from "next/link";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { IAuth, STATUS, usersLogin } from "module/users/hoox";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login, status } = usersLogin();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("username wajib diisi")
      .min(2, "Minimal 2 Karakter")
      .max(50, "Maksimal 50 karakter"),
    password: yup
      .string()
      .required("password wajib diisi")
      .min(2, "Minimal 2 Karakter")
      .max(50, "Maksimal 50 karakter"),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm<IAuth>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
  });

  const onSubmit = handleSubmit((data) =>
    login(data, () => {
      router.push("/dashboard");
    })
  );

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={onSubmit}>
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
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Username/Email"
                  inputType="input"
                  placeholder="Masukan Username/Email"
                  width={{ base: "100%", lg: 564, xl: 564 }}
                  {...field}
                />
              )}
            />
            {errors.username && (
              <Box color="#FF3334">{errors.username.message}</Box>
            )}

            <Box mt="25px">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormInput
                    label="Password"
                    inputType="input"
                    placeholder="Masukan Password"
                    type="password"
                    width={{ base: "100%", lg: 564, xl: 564 }}
                    {...field}
                  />
                )}
              />
              {errors.password && (
                <Box color="#FF3334">{errors.password.message}</Box>
              )}
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" mt="11px">
            <Link href="/auth/forget-password">
              <Text color="primary.hard" fontSize="12px">
                Lupa Password?
              </Text>
            </Link>
            <Link href="/dashboard/auth/registration">
              <Text color="primary.hard" fontSize="12px">
                Buat akun PosKita?
              </Text>
            </Link>
          </Box>
          <Button
            typeButton="primary"
            mt="29px"
            full
            type="submit"
            isLoading={status === STATUS.loading}
          >
            Masuk
          </Button>
        </Box>
      </form>
    </Box>
  );
}
