"use client";
import { Box, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box>
      <Skeleton
        width="400px"
        height="50px"
        borderRadius="10px"
        backgroundColor="gray.soft"
        mb="20px"
      />
      <Skeleton
        width="250px"
        height="40px"
        borderRadius="10px"
        backgroundColor="gray.soft"
        mb="20px"
      />
      <Skeleton
        width="150px"
        height="30px"
        borderRadius="10px"
        backgroundColor="gray.soft"
        mb="20px"
      />
    </Box>
  );
}
