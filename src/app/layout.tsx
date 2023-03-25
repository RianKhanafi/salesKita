"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "styles/globals.css";

import React, { useState } from "react";
import { openSans } from "theme/font";
import { ContextProvider } from "context/context";
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
        <title>POSKita</title>
      </head>

      <body className={openSans.className}>
        <ContextProvider.Provider value={{ users: data, updateData }}>
          <ChakraProvider theme={theme}>
            <React.Fragment>{children}</React.Fragment>
          </ChakraProvider>
        </ContextProvider.Provider>
      </body>
    </html>
  );
}
