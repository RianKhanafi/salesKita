"use client";
import { Box, Spacer } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconsName } from "assets/icons";
import { Button, Text, TextIcon } from "components/atoms";
import { FormInput, Confirmation, Success } from "components/molecules";
import {
  IUser,
  STATUS,
  userUserMutation,
  useFetchUserbyId,
} from "module/users/hoox";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import * as yup from "yup";

type TUsersForm = IUser;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Nama depan wajib diisi")
    .min(2, "Minimal 2 Karakter")
    .max(50, "Maksimal 50 karakter"),
  lastName: yup
    .string()
    .required("Nama belakang wajib diisi")
    .min(2, "Minimal 2 Karakter")
    .max(50, "Maksimal 50 karakter"),
  age: yup.number().required("Umur waji diisi"),
});

export default function addUser() {
  const router = useRouter();
  const id = useSearchParams().get("id");

  const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm<TUsersForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      age: 0,
      firstName: "",
      lastName: "",
    },
  });

  const { saveUser, status, setStatus, updateUser } = userUserMutation();
  const { data, status: userIdStatus, fetchUser } = useFetchUserbyId();

  const onSubmit = handleSubmit((data) => setOpenConfirmation(true));

  useEffect(() => {
    if (id) fetchUser(Number(id));
  }, [id]);

  const handleSave = () => {
    if (data?.id) {
      updateUser(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
        },
        Number(id)
      );
    } else {
      saveUser(getValues());
    }
  };

  useEffect(() => {
    if (data?.id) {
      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("age", data.age);
    }
  }, [data]);

  return (
    <Box
      display="flex"
      mx={{ base: "15px", sm: "15px", md: "15px", lg: "250px", xl: "250px" }}
    >
      <Confirmation
        openModal={openConfirmation}
        setOpenModal={() => setOpenConfirmation(false)}
        onContinue={handleSave}
        isLoading={status === STATUS.loading}
        message={
          id ? "Anda yakin mengubah data?" : "Anda yakin menyimpan data?"
        }
      />
      <Success
        openModal={status === STATUS.success}
        setOpenModal={() => {
          setOpenConfirmation(false);
          setStatus(STATUS.idle);
        }}
        message={
          id ? "Anda yakin mengubah data?" : "Anda yakin menyimpan data?"
        }
        onContinue={() => {
          setOpenConfirmation(false);
          setStatus(STATUS.idle);
          router.push("/dashboard/users");
        }}
      />
      <Box width="564px">
        <Box mb="32px">
          <TextIcon
            color="primary.hard"
            fontSize="19px"
            fontWeight="semibold"
            icon={IconsName.arrowLeft}
            onClick={() => router.push("/dashboard/users")}
          >
            Kembali
          </TextIcon>
        </Box>
        {/* </Link> */}
        <Text fontSize="19px" fontWeight="semibold" color="dark.hard">
          {id ? "Tambah User Baru" : "Edit User"}
        </Text>

        <form onSubmit={onSubmit}>
          <React.Fragment>
            <Box mt="48px">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormInput
                    label="Nama Depan"
                    inputType="input"
                    placeholder="Masukan nama depan"
                    full
                    {...field}
                  />
                )}
              />
              {errors.firstName && (
                <Box color="#FF3334">{errors.firstName.message}</Box>
              )}

              <Box mb="15px" />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FormInput
                    label="Nama Depan"
                    inputType="input"
                    placeholder="Masukan nama belakang"
                    full
                    {...field}
                  />
                )}
              />
              {errors.lastName && (
                <Box color="#FF3334">{errors.lastName.message}</Box>
              )}
              <Box mb="15px" />
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <FormInput
                    label="Nama Depan"
                    inputType="input"
                    placeholder="Masukan umur anda"
                    full
                    type="number"
                    {...field}
                  />
                )}
              />
              {errors.age && <Box color="#FF3334">{errors.age.message}</Box>}
            </Box>

            <Box display="flex" justifyContent="space-between" mt="93px">
              <Button typeButton="secondary">Batal</Button>
              <Spacer />
              <Button typeButton="primary" type="submit">
                Simpan
              </Button>
            </Box>
          </React.Fragment>
        </form>
      </Box>
    </Box>
  );
}
