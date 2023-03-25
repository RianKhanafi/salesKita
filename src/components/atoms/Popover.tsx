"use client";
import {
  Popover as PopoverChakraUI,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  PopoverProps,
} from "@chakra-ui/react";
import React from "react";
import Button from "./button";

interface IPopover extends PopoverProps {
  children?: React.ReactNode;
  close?: boolean;
}

export default function Popover({ children, close = true }: IPopover) {
  return (
    <PopoverChakraUI isLazy>
      <PopoverTrigger>
        <Button typeButton="primary">Trigger</Button>
      </PopoverTrigger>
      <PopoverContent
        width="auto"
        minW={106}
        minH={106}
        maxW={200}
        boxSizing="content-box"
      >
        {close && (
          <React.Fragment>
            <PopoverArrow />
            <PopoverCloseButton />
          </React.Fragment>
        )}
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </PopoverChakraUI>
  );
}
