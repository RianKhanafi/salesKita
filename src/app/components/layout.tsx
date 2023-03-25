"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { extendTheme } from "@chakra-ui/react";
import "styles/globals.css";

const theme = extendTheme({ colors });

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
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
