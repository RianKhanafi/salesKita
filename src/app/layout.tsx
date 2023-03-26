"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "styles/globals.css";

import React, { useState } from "react";
import { openSans } from "theme/font";

import { IUser } from "module/users/hoox";
import { theme } from "theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<IUser | null>(null);

  const updateData = (newData: IUser) => {
    setData(newData);
  };

  return (
    <html>
      <head>
        <title>SalesKita</title>
      </head>

      <body className={openSans.className}>
        <ChakraProvider theme={theme}>
          <React.Fragment>{children}</React.Fragment>
        </ChakraProvider>
      </body>
    </html>
  );
}
