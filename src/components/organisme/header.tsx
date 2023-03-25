"use client";
import { Badge, Box, Divider, Image } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Input, Text, TextIcon } from "components/atoms";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { colors } from "theme/colors";
import { theme } from "theme/theme";
import { menusHeader, IMenus, menusSidebar } from "./routes";

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (menuRef.current) menuRef.current.classList.remove("openmenu");
  }, [pathname]);

  const onOpenMenu = () => {
    if (menuRef.current) menuRef.current.classList.add("openmenu");
  };

  const onCloseMenu = () => {
    if (menuRef.current) menuRef.current.classList.remove("openmenu");
  };

  // const menusWhenResponsive: IMenus[] = !pathname?.includes("dashboard")
  //   ? menusSidebar
  //   : menusHeader;

  const menusWhenResponsive: IMenus[] = menusHeader;

  return (
    <nav>
      <Box
        position="fixed"
        height="70px"
        width="100%"
        borderBottom="1px"
        borderColor="gray.hard"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={{ base: "15px", lg: "37px", xl: "37px" }}
        backgroundColor="white"
        zIndex="3"
        // pr="200px"
      >
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Icons name={IconsName.logo} />
          </Box>

          <Box display={{ base: "none", lg: "block", xl: "block" }}>
            <Input
              placeholder="Cari produk"
              width="350px"
              type="search"
              rightIcon={IconsName.filter}
            />
          </Box>

          <Box
            css={{
              ".openmenu": {
                display: "block",
              },
            }}
          >
            <Box
              display={{ base: "none", md: "block", lg: "block", xl: "block" }}
              ref={menuRef}
            >
              <Box
                width={{ base: "100%", md: 540, lg: 540, xl: 540 }}
                height={{
                  base: "100vh",
                  md: "100vh",
                  xl: "initial",
                  lg: "initial",
                }}
                display="flex"
                position={{
                  base: "fixed",
                  md: "relative",
                  lg: "relative",
                  xl: "relative",
                }}
                left={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
                right={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
                top={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
                bottom={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
                backgroundColor="white"
                overflow={{
                  base: "hidden",
                  md: "initial",
                  lg: "initial",
                  xl: "initial",
                }}
                zIndex="15"
              >
                <Box width="100%">
                  <Box
                    p="20px"
                    display={{
                      base: "block",
                      md: "none",
                      lg: "none",
                      xl: "mone",
                    }}
                  >
                    <Box display="flex" justifyContent="space-between">
                      <Box>
                        <Icons name={IconsName.logo} />
                      </Box>
                      <Box onClick={onCloseMenu}>
                        <Icons
                          name={IconsName.chevronRight}
                          color={colors.primary.hard}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    width={{ base: "100%", lg: "437px", xl: "437px" }}
                    display={{
                      base: "flex",
                      md: "flex",
                      sm: "flex",
                      lg: "none",
                      xl: "mone",
                    }}
                    flexDirection={{
                      base: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    }}
                    justifyContent={{
                      base: "initial",
                      md: "space-evenly",
                      lg: "space-evenly",
                      xl: "space-evenly",
                    }}
                    p={{ base: "20px", md: "unset", lg: "unset", xl: "unset" }}
                  >
                    {menusWhenResponsive?.map((e, i) => (
                      <Link href={e.route} key={i}>
                        <TextIcon
                          _hover={{ color: colors.primary.hard }}
                          fontWeight="medium"
                          fontSize="16px"
                          py="12px"
                          icon={e.icon}
                          {...(pathname === e.route && {
                            colorIcon: colors.primary.hard,
                          })}
                          color={
                            pathname === e.route ? "primary.hard" : "dark.hard"
                          }
                          colorIcon={
                            pathname === e.route
                              ? colors.primary.hard
                              : colors.dark.hard
                          }
                        >
                          {e.name}
                        </TextIcon>
                      </Link>
                    ))}

                    <Box
                      mt="60px"
                      display={{
                        base: "block",
                        md: "none",
                        lg: "none",
                        xl: "mone",
                      }}
                    >
                      <Divider />
                      <Box mb="20px" />

                      <Box px="15px" py="20px">
                        <TextIcon
                          _hover={{ color: colors.primary.hard }}
                          fontWeight="medium"
                          fontSize="16px"
                          py="12px"
                          icon={IconsName.logout}
                          colorIcon={theme.colors.red[400]}
                          color="red.400"
                          onClick={() => {
                            // dispatch(logout());
                            // router.push("/dashboard/auth/signin");
                          }}
                        >
                          Log Out
                        </TextIcon>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          onClick={onOpenMenu}
          display={{ base: "block", md: "none", lg: "none", xl: "mone" }}
        >
          <Icons name={IconsName.menu} color={colors.primary.hard} />
        </Box>
        <Box
          width={180}
          display={{ base: "none", md: "block", lg: "block", xl: "block" }}
        >
          <Box display="flex" alignItems="center">
            <Image
              borderRadius="full"
              boxSize="42px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Box ml="12px">
              <Box lineHeight="14px">
                <Text fontSize="14px" fontWeight="medium" color="dark.hard">
                  CUtiee Girl
                </Text>
                <Text fontSize="10px" fontWeight="regular" color="dark.hard">
                  Cashier
                </Text>
              </Box>
              <Badge
                backgroundColor="green.hard"
                color="white"
                width={77}
                borderRadius="50px"
                fontSize={8}
                fontWeight="bold"
                textAlign="center"
              >
                Active
              </Badge>
            </Box>
          </Box>
        </Box>
      </Box>
    </nav>
  );
}
