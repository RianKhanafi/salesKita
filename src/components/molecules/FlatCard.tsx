import { Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import { Text } from "components/atoms";
import { notoSans, openSans } from "theme/font";
import Icons, { IconsName } from "assets/icons";
import React from "react";

export default function FlatCard({
  isResponsive = true,
}: {
  isResponsive?: boolean;
}) {
  return (
    <Box
      width="100%"
      height="auto"
      cursor="pointer"
      borderBottom="1px dashed #D1D2D2"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Text
          fontSize="13px"
          pr="10px"
          color="dark.hard"
          fontWeight="500"
          mt="10px"
          className={openSans.className}
        >
          Nasi Goreng Gila, Paket Lengkap dengan pete.
        </Text>

        <Box
          display="flex"
          justifyContent="space-between"
          w="80px"
          alignItems="center"
          mt="10px"
        >
          <Box
            width="25px"
            height="25px"
            backgroundColor="gray.soft"
            borderRadius="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
              backgroundColor: "primary.hard",
            }}
          >
            <Icons name={IconsName.minus} width={15} height={15} />
          </Box>
          <Box px={{ base: "7px" }}>
            <Text className={notoSans.className} fontSize={{ base: "15px" }}>
              1
            </Text>
          </Box>
          <Box
            width="25px"
            height="25px"
            backgroundColor="gray.soft"
            borderRadius="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
              backgroundColor: "primary.hard",
            }}
          >
            <Icons name={IconsName.plus} color="black" width={15} height={15} />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        my="10px"
      >
        <Text
          fontSize="15px"
          fontWeight="semibold"
          color="dark.hard"
          className={notoSans.className}
          display="flex"
          mt="10px"
        >
          <Text fontSize="8px">Rp. </Text>
          <Text> 18.000</Text>
        </Text>
        <Box display="flex" alignItems="center">
          <Box>
            <Text
              fontSize="22px"
              fontWeight="semibold"
              color="dark.hard"
              className={notoSans.className}
              display="flex"
              mt="10px"
            >
              <Text fontSize={{ base: "8px", lg: "12px", xl: "12px" }}>
                Rp.{" "}
              </Text>
              <Text> 18.000</Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
