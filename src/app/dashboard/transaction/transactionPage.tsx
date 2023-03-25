"use client";
import { Box } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { ButtonIcon, Input } from "components/atoms";
import Table, { ColumnDefinitionType } from "components/molecules/Table";

import React, { useState } from "react";

interface Transaction {
  name: string;
  price: string;
  qty: number;
  discount: string;
  date: string;
  option?: string;
}

const columns: ColumnDefinitionType<Transaction, keyof Transaction>[] = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "price",
    title: "Price",
    isNumeric: true,
  },
  {
    key: "discount",
    title: "Discount",
  },
  {
    key: "qty",
    title: "Qty",
    isNumeric: true,
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "option",
    title: "",
    width: 30,
    isOptions: true,
    renders: (e) => <ButtonIcon typeButton="none" iconName={IconsName.more} />,
  },
];

const data: Transaction[] = [
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
  {
    name: "Nasi Goreng Komplit",
    price: "Rp. 50.000",
    qty: 2,
    discount: "5%",
    date: "May 26, 2019",
  },
];

export default function TransactionPage() {
  const [page, setPage] = useState<number>(1);

  return (
    <Box>
      <Table
        headerTitle="Transaction List"
        header={columns}
        data={data}
        total={1000}
        pageSize={10}
        current={page}
        onChange={(e) => setPage(e)}
      />
    </Box>
  );
}
