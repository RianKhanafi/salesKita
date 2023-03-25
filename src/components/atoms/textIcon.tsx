"use client";
import { Box, Text as TextChakraUI, TextProps } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";

interface TextIconProps extends TextProps {
  placement?: "left" | "right";
  icon?: IconsName;
  colorIcon?: string;
  onClick?: () => void;
}
export default function TextIcon({
  children,
  placement = "left",
  icon = IconsName.plus,
  colorIcon,
  onClick,
  ...rest
}: TextIconProps) {
  return (
    <Box display="flex" alignItems="center" onClick={onClick}>
      {placement === "left" && (
        <Box mr="5px">
          <Icons color={colorIcon} name={icon} />
        </Box>
      )}
      <TextChakraUI {...rest}>{children}</TextChakraUI>
      {placement === "right" && (
        <Box ml="5px">
          <Icons color={colorIcon} name={icon} />
        </Box>
      )}
    </Box>
  );
}
