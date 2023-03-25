"use client";
import {
  Table as TableChakraUI,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Spinner,
} from "@chakra-ui/react";
import Loading from "app/dashboard/loading";
import { Pagination, Text } from "components/atoms";
import { PaginationProps } from "rc-pagination";
import React, { useEffect } from "react";
import { colors } from "theme/colors";

export enum EAlignment {
  left = "left",
  center = "center",
  right = "right",
}

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  title: string;
  width?: number;
  renders?: (e: T, index: number) => React.ReactNode;
  isNumeric?: boolean;
  isOptions?: boolean;
};

export type ITableHeader<T, K extends keyof T> = {
  header: Array<ColumnDefinitionType<T, K>>;
};

interface TableRowsProps<T, K extends keyof T> extends PaginationProps {
  data: Array<T>;
  header: Array<ColumnDefinitionType<T, K>>;
  noData?: string;
  onClickRow?: (e: T) => void;
  loading?: boolean;
  headerTitle?: string;
  headerChildren?: React.ReactNode;
  isLoading?: boolean;
}

const TableHeader = <T, K extends keyof T>({
  header,
}: ITableHeader<T, K>): JSX.Element => {
  return (
    <Thead
      borderTop={{ base: "1px solid", md: "1px solid", lg: 0, xl: 0 }}
      borderColor="gray.soft"
    >
      <Tr>
        {header.map((head) => (
          <Th
            color="gray.medium"
            isNumeric={head?.isNumeric}
            {...(head.isOptions && {
              position: "sticky",
              right: "0",
              boxShadow: "base",
              height: "20px",
              backgroundColor: {
                md: "gray.soft",
                lg: "transparent",
                xl: "transparent",
              },
              width: 30,
            })}
          >
            {head.title}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

const TableBody = <T, K extends keyof T>({
  data,
  header,
}: TableRowsProps<T, K>): JSX.Element => {
  return (
    <Tbody position="relative">
      {data.map((elm: T, idx1: number) => (
        <Tr
          key={`tr-${idx1}`}
          height="15px"
          _hover={{
            backgroundColor: colors.gray.soft,
          }}
          position="relative"
        >
          {header.map((head, idx2) => (
            <Td
              color="dark.hard"
              isNumeric={head?.isNumeric}
              key={`td-${idx2}`}
              fontSize="15px"
              height="15px"
              py="13px"
              // width={head.width}
              {...(head.isOptions && {
                position: "sticky",
                right: "0",
                height: "20px",
                backgroundColor: {
                  md: "gray.soft",
                  lg: "transparent",
                  xl: "transparent",
                },
                p: 0,
              })}
            >
              <Box {...(head.isOptions && { ml: "10px" })}>
                {head.renders
                  ? head.renders(elm, idx1)
                  : //   till now, i dont get it as keyof reactNode :')
                    elm[head.key as keyof React.ReactNode]}
              </Box>
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default function Table<T, K extends keyof T>({
  header,
  data,
  total,
  pageSize = 10,
  onChange,
  current,
  headerTitle = "Header Title",
  headerChildren = <div />,
  isLoading,
}: TableRowsProps<T, K>): JSX.Element {
  // sticky required overfloe and height
  return (
    <Box
      overflow="auto"
      height="auto"
      border="1px solid"
      borderColor="gray.hard"
      borderRadius="5px"
    >
      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "flex",
          xl: "flex",
        }}
        alignItems="center"
        justifyContent="space-between"
        py="6"
        px="6"
      >
        <Box mb={{ base: "20px" }}>
          <Text fontSize={19} fontWeight="bold">
            {headerTitle}
          </Text>
        </Box>
        <Box>{headerChildren}</Box>
      </Box>
      <TableContainer>
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            height="300px"
            alignItems="center"
            width="100%"
          >
            <Spinner color="primary.hard" size="xl" />
          </Box>
        ) : !data.length ? (
          <Box
            display="flex"
            justifyContent="center"
            height="300px"
            alignItems="center"
            width="100%"
          >
            <Box>No Data</Box>
          </Box>
        ) : (
          <TableChakraUI variant="striped">
            <TableHeader header={header} />
            <TableBody header={header} data={data} />
          </TableChakraUI>
        )}
      </TableContainer>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        justifyContent={{
          base: "flex-start",
          md: "flex-start",
          lg: "space-between",
          xl: "space-between",
        }}
        alignItems={{
          base: "flex-start",
          md: "flex-start",
          lg: "center",
          xl: "center",
        }}
        my="3"
        px="6"
      >
        <Box mt={{ base: "10px", md: "10px", lg: 0, xl: 0 }}>
          <Text color="#9FA2B4" fontSize="14px">
            Tampil {data?.length} Dari {total} data
          </Text>
        </Box>
        <Box mt={{ base: "10px", md: "10px", lg: 0, xl: 0 }} alignSelf="center">
          <Pagination
            total={total!}
            pageSize={pageSize}
            current={current}
            onChange={onChange}
          />
        </Box>
      </Box>
    </Box>
  );
}
