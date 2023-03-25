"use client";
import React from "react";

import Pagination, { PaginationProps } from "rc-pagination";
import Icons, { IconsName } from "assets/icons";
import { Box, Text } from "@chakra-ui/react";

const itemRender =
  (active?: number) =>
  (current: number, type: string, element: React.ReactNode) => {
    if (type === "page") {
      return (
        <Box
          rounded="5px"
          minW={30}
          height={30}
          fontWeight="medium"
          fontSize="14px"
          border="1px"
          borderColor={current === active ? "primary.hard" : "dark.ultrasoft"}
          color={current === active ? "primary.hard" : "gray.medium"}
          mx="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px="6px"
          cursor="pointer"
        >
          <Box>
            <Text>{current}</Text>
          </Box>
        </Box>
      );
    }
    return element;
  };
interface IPaginationProps extends PaginationProps {
  total: number;
}
export default function PaginationComponent({
  onChange,
  current,
  total,
  pageSize,
  ...rest
}: IPaginationProps) {
  const totalPage = React.useMemo(
    () => Math.ceil(total / pageSize!),
    [total, pageSize]
  );

  return (
    <>
      <Pagination
        onChange={onChange}
        current={current}
        total={total}
        pageSize={pageSize}
        itemRender={itemRender(current)}
        jumpPrevIcon={
          <Box transform="rotate(90deg)" cursor="pointer">
            <Icons name={IconsName.more} />
          </Box>
        }
        jumpNextIcon={
          <Box transform="rotate(90deg)" cursor="pointer">
            <Icons name={IconsName.more} />
          </Box>
        }
        nextIcon={
          <Box
            rounded="5px"
            minW={30}
            height={30}
            fontWeight="semibold"
            backgroundColor={current === totalPage ? "gray.soft" : ""}
            color={current === totalPage ? "primary.hard" : "dark.soft"}
            mx="4px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px="5px"
            cursor={current === totalPage ? "not-allowed" : "pointer"}
          >
            <Icons name={IconsName.chevronRight} />
          </Box>
        }
        prevIcon={
          <Box
            rounded="5px"
            minW={30}
            height={30}
            textAlign="center"
            fontWeight="semibold"
            backgroundColor={current! <= 1 ? "gray.soft" : ""}
            color={current! <= 1 ? "primary.hard" : "dark.soft"}
            mx="4px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor={current! <= 1 ? "not-allowed" : "pointer"}
          >
            <Box>
              <Icons name={IconsName.chevronLeft} />
            </Box>
          </Box>
        }
        {...rest}
      />
    </>
  );
}
