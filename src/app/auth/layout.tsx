"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { colors } from "theme/colors";

const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <React.Fragment>{children}</React.Fragment>
        </div>
      </body>
    </html>
  );
}
