"use client";
import { Box, Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import classNames from "classnames";
import Icons, { IconsName } from "assets/icons";
import { colors } from "theme/colors";
import React from "react";
import { openSans } from "theme/font";

type TTYpe = "primary" | "secondary" | "none";

interface TButton extends ButtonProps {
  typeButton: TTYpe;
  full?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  iconName?: IconsName;
  iconHeight?: number;
  iconWidth?: number;
}

export default function ButtonIcon({
  typeButton,
  full,
  onClick,
  children,
  iconName,
  iconHeight,
  iconWidth,
  ...rest
}: TButton) {
  const buttonType = classNames({
    "primary.hard": typeButton === "primary",
    "gray.soft": typeButton === "secondary",
    transparent: typeButton === "none",
  });

  const buttonTypeColor = classNames({
    white: typeButton === "primary",
    "dark.medium": typeButton === "secondary" || typeButton === "none",
  });

  const IconButtonColor = classNames({
    white: typeButton === "primary",
    [`${colors.primary.hard}`]: typeButton === "secondary",
    [`${colors.dark.medium}`]: typeButton === "none",
  });

  return (
    <ChakraButton
      color={buttonTypeColor}
      bg={buttonType}
      fontSize={16}
      width={full ? "100%" : "auto"}
      onClick={onClick}
      className={openSans.className}
      _hover={{
        backgroundColor:
          typeButton === "primary" ? colors.primary.hard : colors.gray.soft,
      }}
      leftIcon={
        <Box>
          <Icons
            name={iconName}
            color={IconButtonColor}
            width={iconWidth}
            height={iconHeight}
          />
        </Box>
      }
      height="48px"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
