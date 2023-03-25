"use client";
import { Select as SelectChakraUI, SelectProps } from "@chakra-ui/react";

export type optionsSelect = {
  id?: number;
  label: string;
  value: string;
};
interface ISelect extends SelectProps {
  options?: optionsSelect[];
}

export default function Select({
  placeholder = "Placehoder",
  options,
  ...props
}: ISelect) {
  return (
    <SelectChakraUI
      placeholder={placeholder}
      {...props}
      height="48px"
      borderRadius="8px"
    >
      {options?.map((option, index) => (
        <option value={option.value} key={index}>
          {option.value}
        </option>
      ))}
    </SelectChakraUI>
  );
}
