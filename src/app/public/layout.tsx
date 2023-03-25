"use client";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <React.Fragment>{children}</React.Fragment>
      </body>
    </html>
  );
}
