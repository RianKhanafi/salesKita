"use client";
import { Box } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";
import Header from "components/organisme/header";
import Navbar from "components/organisme/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <nav className="">
        <Header />
      </nav>
      <Box display="flex">
        <Navbar />
        <Box
          mt="80px"
          ml={{ base: 0, md: 0, lg: "250px", xl: "250px" }}
          width="100%"
          p={{ base: "0", md: "0", lg: "25px", xl: "25px" }}
          backgroundColor="white"
        >
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>SalesKita</title>
      </head>

      <body>
        <Layout children={children} />
      </body>
    </html>
  );
}
