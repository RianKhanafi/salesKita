"use client";
import { Box } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";
import Header from "components/organisme/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <nav className="">
        <Header />
      </nav>
      <Box display="flex">
        <Box mt="70px" width="100%" backgroundColor="white">
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

interface IProps {
  children: React.ReactNode;
  session: any;
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>POSKita</title>
      </head>

      <body>
        <Layout children={children} />
      </body>
    </html>
  );
}
