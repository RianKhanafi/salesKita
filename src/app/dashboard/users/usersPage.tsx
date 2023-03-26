"use client";
import { Box, Text } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import { Confirmation, Success } from "components/molecules";
import Table, { ColumnDefinitionType } from "components/molecules/Table";
import {
  IUser,
  STATUS,
  useFetchUser,
  userUserMutation,
} from "module/users/hoox";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export interface ITableColumnOptional extends IUser {
  options?: string;
}

export default function Productpage() {
  const router = useRouter();
  const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<number | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const { data, status } = useFetchUser(
    `/search?q=${search}&limit=10&skip=${page - 1}`
  );
  const [usersData, setUsersData] = useState<IUser | null>();
  const { deleteUser, status: mutationStatus, setStatus } = userUserMutation();

  const columns: ColumnDefinitionType<
    ITableColumnOptional,
    keyof ITableColumnOptional
  >[] = [
    {
      key: "firstName",
      title: "FirstName",
      width: 150,
    },
    {
      key: "lastName",
      title: "LastName",
      width: 150,
    },
    {
      key: "age",
      title: "Age",
      width: 150,
    },
    {
      key: "options",
      title: "Options",
      width: 50,
      renders: (e) => (
        <Box display="flex" gap="10px">
          <Text
            onClick={() => {
              setOpenConfirmation(true);
              setIdUser(e.id);
            }}
            color="#F86061"
            cursor="pointer"
          >
            Delete
          </Text>

          <Text
            onClick={() => {
              router.push(`/dashboard/users/addusers?id=${e.id}`);
            }}
            cursor="pointer"
          >
            Edit
          </Text>
        </Box>
      ),
    },
  ];
  return (
    <Box>
      <Confirmation
        openModal={openConfirmation}
        setOpenModal={() => setOpenConfirmation(false)}
        onContinue={() => deleteUser(idUser)}
        isLoading={mutationStatus === STATUS.loading}
        message="Anda yakin menghapus data?"
        primaryTitle="Hapus"
      />
      <Success
        openModal={mutationStatus === STATUS.success}
        setOpenModal={() => {
          setOpenConfirmation(false);
          setStatus(STATUS.idle);
        }}
        onContinue={() => {
          setOpenConfirmation(false);
          setStatus(STATUS.idle);
          router.push("/dashboard/users");
        }}
        message="Data Berhasil Dihapus"
        subMessage="Klik OK untuk menutup popup"
      />
      <Table
        headerTitle="List Produk"
        headerChildren={
          <Box display="flex">
            <Input
              placeholder="Cari users"
              mr="20px"
              onChange={(e) => setSearch(e.target.value)}
            />
            <ButtonIcon
              typeButton="primary"
              width="fit-content"
              onClick={() => router.push("/dashboard/users/addusers")}
              iconName={IconsName.plus}
            >
              User
            </ButtonIcon>
          </Box>
        }
        header={columns}
        data={data.users}
        total={data?.total}
        pageSize={data?.limit}
        current={page}
        onChange={(e) => setPage(e)}
        isLoading={status === STATUS.loading}
      />
    </Box>
  );
}
