"use client";
import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import Icons, { IconsName } from "assets/icons";
import { Button, Input, Text } from "components/atoms";
import CategoriesCard from "components/atoms/categories";
import Card from "components/molecules/card";
import { useState } from "react";
import { openSans } from "theme/font";
import Cart from "./components/cart";

const Categories: { title: string; subtitle: string }[] = [
  {
    title: "All Product",
    subtitle: "all Product",
  },
  {
    title: "Foods",
    subtitle: "20 Items",
  },
  {
    title: "Foods",
    subtitle: "20 Items",
  },
  {
    title: "Foods",
    subtitle: "20 Items",
  },
  {
    title: "Foods",
    subtitle: "20 Items",
  },
  {
    title: "Foods",
    subtitle: "20 Items",
  },
];

export default function Home() {
  const [cartOpen, setCartOpen] = useState<boolean>(true);

  // fontSize={{ base: '24px', md: '40px', lg: '56px' }}
  return (
    <Box position="relative">
      <Grid templateColumns="repeat(11, 1fr)" position="relative">
        {/* <Grid> */}
        <GridItem colSpan={cartOpen ? 8 : 11}>
          <Box margin="auto">
            <Box
              mt={{ base: "20px", lg: "30px", xl: "30px" }}
              py={{ base: "0", lg: "30px", xl: "30px" }}
            >
              <Box
                display="flex"
                overflowX="auto"
                pl={{ base: "15px", md: "15px", lg: "30px", xl: "30px" }}
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {Categories?.map((elm, i) => (
                  <Box
                    key={i}
                    mr={{ base: "15px", md: "15px", lg: "23px", xl: "23px" }}
                  >
                    <CategoriesCard
                      active={i == 0}
                      title={elm.title}
                      subtitle={elm.subtitle}
                    />
                  </Box>
                ))}
              </Box>
              <Text
                mx={{ base: "15px", lg: "37px", xl: "37px" }}
                fontSize={{ base: "16px", lg: "19px", xl: "19px" }}
                fontWeight="600"
                mt={{ base: "30px", md: "30px", lg: "30px", xl: "30px" }}
                className={openSans.className}
                color="dark.hard"
                mb={{ base: "13px", lg: "10px", xl: "10px" }}
                letterSpacing="1px"
              >
                Produk Sepesial
              </Text>
              <Box
                display={{ base: "block", lg: "none", xl: "none" }}
                mx={{ base: "15px", lg: "37px", xl: "37px" }}
              >
                <Input
                  placeholder="Cari produk"
                  full
                  type="search"
                  rightIcon={IconsName.filter}
                  mb="24px"
                />
              </Box>
              <Text
                display={{ base: "block", md: "block", lg: "none", xl: "none" }}
                fontSize="16px"
                fontWeight="semibold"
                marginBottom="13px"
                className={openSans.className}
                color="dark.hard"
                letterSpacing="1.5px"
                mx={{ base: "15px", lg: "37px", xl: "37px" }}
              >
                Nasi Goreng
              </Text>
              <Divider
                mt="3px"
                mb="22px"
                display={{ base: "block", md: "block", lg: "none", xl: "none" }}
                mx={{ base: "15px", lg: "37px", xl: "37px" }}
                borderBottom="1px dashed #D1D2D2"
              />
              <Grid
                mx={{ base: "15px", lg: "37px", xl: "37px" }}
                templateColumns={{
                  base: "repeat(auto-fill,minmax(100%,1fr))",
                  md: "repeat(auto-fill,minmax(231px,1fr))",
                  lg: "repeat(auto-fill,minmax(231px,1fr))",
                  xl: "repeat(auto-fill,minmax(231px,1fr))",
                }}
                columnGap="4"
              >
                {[...Array(12)].map((_, i) => (
                  <Box
                    key={i}
                    mb={{ base: "19px", md: "45px", lg: "25px", xl: "25px" }}
                  >
                    <Card />
                  </Box>
                ))}
              </Grid>
            </Box>
          </Box>
        </GridItem>

        <GridItem colSpan={cartOpen ? 3 : 0}>
          <Cart onOpen={() => setCartOpen(!cartOpen)} cartOpen={cartOpen} />
        </GridItem>
      </Grid>
    </Box>
  );
}
