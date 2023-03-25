import { Box } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import Text from "./text";
import { openSans } from "theme/font";
import { colors } from "theme/colors";

interface ICategoriesCard {
  active?: boolean;
  title: string;
  subtitle?: string;
}
export default function CategoriesCard({
  active,
  title,
  subtitle,
}: ICategoriesCard) {
  return (
    <Box
      width={{
        ...(active
          ? { base: "142px", lg: "204px", xl: "204px" }
          : { base: "81px", lg: "81px", xl: "81px" }),
      }}
      borderRadius="8px"
      height={{ base: "64px", lg: "77px", xl: "77px" }}
      bg={active ? "primary.hard" : "#F6F6F6"}
      display="flex"
      flexDirection={active ? "row" : "column"}
      alignItems="center"
      justifyContent={active ? "flex-start" : "center"}
      cursor="pointer"
      _hover={{
        border: "1px solid",
        borderColor: "primary.hard",
        // boxShadow: "md",
      }}
    >
      <Box
        width={{ base: "60px", lg: "80px", xl: "80px" }}
        display="flex"
        justifyContent="center"
      >
        <Icons
          name={IconsName.allCategories}
          color={active ? "white" : colors.dark.hard}
          width={active ? 39 : 20}
          height={active ? 39 : 20}
        />
      </Box>
      <Box>
        <Text
          fontWeight="500"
          fontSize={{ base: "12px", lg: "14px", xl: "14px" }}
          color={active ? "white" : "dark.hard"}
          className={openSans.className}
        >
          {title}
        </Text>
        <Text
          fontWeight="400"
          fontSize={{ base: "9px", lg: "10.5px", xl: "10.5px" }}
          color={active ? "white" : "gray.medium"}
          className={openSans.className}
        >
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
}
