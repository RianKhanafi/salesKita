"use client";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import classNames from "classnames";
import React from "react";
import { colors } from "theme/colors";

type TTYpe = "primary" | "secondary";

interface TButton extends ButtonProps {
  typeButton: TTYpe;
  full?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export default function Button({
  typeButton,
  full,
  onClick,
  children = <span>Button</span>,
  ...rest
}: TButton) {
  const buttonType = classNames({
    "primary.hard": typeButton === "primary",
    "gray.soft": typeButton === "secondary",
  });

  const buttonTypeColor = classNames({
    white: typeButton === "primary",
    "dark.medium": typeButton === "secondary",
  });

  return (
    <ChakraButton
      color={buttonTypeColor}
      bg={buttonType}
      fontSize={16}
      width={{
        base: full ? "100%" : 120,
        lg: full ? "100%" : 172,
        xl: full ? "100%" : 172,
      }}
      onClick={onClick}
      height="48px"
      _hover={{
        backgroundColor:
          typeButton === "primary" ? colors.primary.hard : colors.gray.soft,
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
