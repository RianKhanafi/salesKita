"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "components/atoms";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("components/atoms/lineChart"), {
  ssr: false,
});
// import { parseJwt } from "store/features/api/api";

export default function DashboardPage() {
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Box display="flex">
        <Box width="75%" p="25px">
          <Box mb="32px" ml="15px">
            <Text fontSize="19px" fontWeight="bold">
              Dashboard Pendapatan
            </Text>
            <Text fontSize="12px" fontWeight="regular" color="gray.medium">
              as of 25 May 2019, 09:41 PM
            </Text>
          </Box>
          <LineChart />
        </Box>
        <Flex flexDirection="column" width="25%" borderLeftWidth="1px">
          <Box flex="1" width="100%" borderBottomWidth="1px">
            <Text
              fontSize="19px"
              fontWeight="bold"
              textAlign="center"
              color="gray.medium"
              paddingTop="24px"
            >
              Terjual
            </Text>
            <Text
              fontSize="50px"
              fontWeight="bold"
              textAlign="center"
              color="dark.medium"
              paddingY="24px"
            >
              43
            </Text>
          </Box>
          <Box flex="1" width="100%" borderBottomWidth="1px" boxShadow="xs">
            <Text
              fontSize="19px"
              fontWeight="bold"
              textAlign="center"
              color="primary.hard"
              paddingTop="24px"
            >
              Jumlah Produk
            </Text>
            <Text
              fontSize="50px"
              fontWeight="bold"
              textAlign="center"
              color="primary.hard"
              paddingY="24px"
            >
              20
            </Text>
          </Box>
          <Box flex="1" width="100%" borderBottomWidth="1px">
            <Text
              fontSize="19px"
              fontWeight="bold"
              textAlign="center"
              color="gray.medium"
              paddingTop="24px"
            >
              Jumlah Pelanggan
            </Text>
            <Text
              fontSize="50px"
              fontWeight="bold"
              textAlign="center"
              color="dark.medium"
              paddingY="24px"
            >
              1
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
