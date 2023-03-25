"use client";

import { Box, color } from "@chakra-ui/react";
import { IconsName } from "assets/icons";
import { TextIcon } from "components/atoms";
import { usersLogin } from "module/users/hoox";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { colors } from "theme/colors";
import { menusSidebar } from "./routes";

export default function Navbar() {
  const pathname = usePathname();

  const router = useRouter();
  const { logout } = usersLogin();

  return (
    <Box
      width={250}
      height="100vh"
      p="22px"
      borderRight="1px"
      borderColor="#DFE0EB"
      backgroundColor="white"
      position="fixed"
      display={{ base: "none", md: "none", lg: "block", xl: "block" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Box mt={70}>
          {menusSidebar.map((elm, index) => (
            <div key={index}>
              <Link href={elm.route}>
                <Box
                  px="15px"
                  py="15px"
                  _hover={{
                    backgroundColor:
                      pathname === elm.route
                        ? colors.primary.medium
                        : colors.gray.soft,
                  }}
                  backgroundColor={pathname === elm.route ? "primary.hard" : ""}
                >
                  <TextIcon
                    color={pathname === elm.route ? "white" : "gray.medium"}
                    colorIcon={
                      pathname === elm.route ? "white" : colors.gray.medium
                    }
                    icon={elm?.icon}
                    ml="10px"
                  >
                    {elm.name}
                  </TextIcon>
                </Box>
              </Link>
            </div>
          ))}
        </Box>

        <Box>
          <Box
            px="15px"
            py="15px"
            _hover={{
              backgroundColor: colors.gray.soft,
            }}
          >
            <button
              onClick={() => {
                logout(() => {
                  router.push("/auth/signin");
                });
              }}
            >
              <TextIcon color="gray.medium" icon={IconsName.logout} ml="10px">
                Log Out
              </TextIcon>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
