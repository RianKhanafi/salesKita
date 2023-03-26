"use client";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Text } from "components/atoms";
import {
  STATUS,
  useFetchDashboard,
  useFetchTarget,
} from "module/dashboard/hook";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("components/atoms/lineChart"), {
  ssr: false,
});
// import { parseJwt } from "store/features/api/api";

export default function DashboardPage() {
  const { data, status } = useFetchDashboard();
  const { data: dataTarget, status: statusTarget } = useFetchTarget();
  // const series =
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          width={{ base: "100%", sm: "100%", md: "100%", lg: "75%", xl: "75%" }}
          p="25px"
        >
          <Box mb="32px" ml="15px">
            <Text fontSize="19px" fontWeight="bold">
              Dashboard Pendapatan
            </Text>
            <Text fontSize="12px" fontWeight="regular" color="gray.medium">
              as of 26 May 2023
            </Text>
          </Box>
          {status === STATUS.loading ? (
            <Box
              display="flex"
              justifyContent="center"
              height="300px"
              alignItems="center"
              width="100%"
            >
              <Spinner color="primary.hard" size="xl" />
            </Box>
          ) : (
            <LineChart series={data} />
          )}
        </Box>
        <Flex
          flexDirection="column"
          width={{ base: "100%", sm: "100%", md: "100%", lg: "25%", xl: "25%" }}
          borderLeftWidth="1px"
        >
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
              {status === STATUS.loading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                >
                  <Spinner color="primary.hard" size="md" />
                </Box>
              ) : (
                dataTarget.sold
              )}
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
              {status === STATUS.loading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                >
                  <Spinner color="primary.hard" size="md" />
                </Box>
              ) : (
                dataTarget.productTotal
              )}
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
              {status === STATUS.loading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                >
                  <Spinner color="primary.hard" size="md" />
                </Box>
              ) : (
                dataTarget.customer
              )}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
