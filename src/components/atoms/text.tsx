"use client";
import { Text as TextChakraUI, TextProps } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";

export default function Text({ children, ...rest }: TextProps) {
  return <TextChakraUI {...rest}>{children}</TextChakraUI>;
}
