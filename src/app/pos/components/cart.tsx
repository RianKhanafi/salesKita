"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Button, ButtonIcon, Text } from "components/atoms";
import React, { useState } from "react";
import Icons, { IconsName } from "assets/icons";
import Card from "components/molecules/card";
import { notoSans, openSans } from "theme/font";
import Checkout from "./checkout";
import { FlatCard } from "components/molecules";

const CartProduct = () => {
  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <Box key={i} mb={{ base: "10px", lg: "20px", xl: "20px" }}>
          <FlatCard isResponsive={false} />
        </Box>
      ))}
    </div>
  );
};

const CartAccum = () => {
  return (
    <Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        borderBottom="1px solid"
        borderColor="gray.hard"
      >
        <GridItem colSpan={3}>
          <Box width="73px" height="23px" bg="purple" my="30px">
            <Text
              textAlign="center"
              fontSize="10px"
              color="white"
              className={openSans.className}
            >
              20% Diskon
            </Text>
          </Box>
        </GridItem>
        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box>
            <Text
              fontSize={{ base: "15px", lg: "22px", xl: "22px" }}
              fontWeight="semibold"
              color="dark.hard"
              className={notoSans.className}
              display="flex"
              mt="10px"
            >
              <Text fontSize={{ base: "8px", lg: "12px", xl: "12px" }}>
                Rp.
              </Text>
              <Text> 18.000</Text>
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" borderColor="gray.hard">
        <GridItem colSpan={2}>
          <Text
            fontSize="18px"
            fontWeight="semibold"
            my="30px"
            className={openSans.className}
          >
            Total
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Box my="30px" display="flex" justifyContent="flex-end">
            <Text
              fontSize={{ base: "15px", lg: "22px", xl: "22px" }}
              fontWeight="semibold"
              color="dark.hard"
              className={notoSans.className}
              display="flex"
            >
              <Text fontSize={{ base: "18px", lg: "12px", xl: "12px" }}>
                Rp.
              </Text>
              <Text> 18.000</Text>
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default function Cart({ cartOpen, onOpen }: any) {
  const [checkout, setCheckout] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Checkout openModal={checkout} setOpenModal={() => setCheckout(false)} />
      <Box position="relative">
        <Box
          display="none"
          bg="primary.hard"
          position="fixed"
          {...(cartOpen
            ? {
                right: { base: 0, md: 380, lg: 380, xl: 380 },
                top: { base: -20, md: -5, lg: -5, xl: -5 },
              }
            : { right: 5, bottom: 5 })}
          transform="1s ease-in-out"
          cursor="pointer"
          mt="100px"
          onClick={onOpen}
          zIndex="11"
        >
          <ButtonIcon
            typeButton="primary"
            rightIcon={<Icons name={IconsName.open} color="white" />}
          >
            3 Items
          </ButtonIcon>
        </Box>
      </Box>
      {cartOpen ? (
        <Box
          position={{ base: "fixed", md: "fixed", lg: "fixed", xl: "fixed" }}
          left={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
          right={{ base: 0, md: 0, lg: "unset", xl: "unset" }}
          top={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
          bottom={{ base: 0, md: "unset", lg: "unset", xl: "unset" }}
          zIndex={{ base: 20, md: 20, lg: 20, xl: 20 }}
          backgroundColor="white"
          width={{ base: "100%", md: "200px", lg: "91vh", x: "91vh" }}
          height={{ base: "100vh", xl: "initial", lg: "initial" }}
          borderLeft="1px solid"
          borderColor="gray.hard"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          overflow="auto"
          mt="-70px"
        >
          <Box>
            <Box
              px="20px"
              pt="40px"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <Text
                  fontSize={20}
                  fontWeight="bold"
                  mb="20px"
                  color="dark.hard"
                  letterSpacing="1.5px"
                >
                  Order Details
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="semibold"
                  color="dark.hard"
                  mb="4px"
                >
                  Kasir: Haqi Ramadhani
                </Text>
                <Text
                  fontSize={11}
                  fontWeight="semibold"
                  color="gray.medium"
                  mb="4px"
                >
                  18 Agustus 2022
                </Text>
                <Text
                  fontSize={11}
                  fontWeight="semibold"
                  color="gray.medium"
                  letterSpacing="1px"
                  mb="4px"
                >
                  #12810291
                </Text>
              </Box>
              <Box>
                <Box
                  mt="5px"
                  cursor="pointer"
                  onClick={onOpen}
                  display={{
                    base: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  }}
                >
                  <Icons name={IconsName.arrowOpen} />
                </Box>
              </Box>
            </Box>
            <Box px="20px" pb="20px">
              <Box mt="30px">
                <CartProduct />

                <CartAccum />
              </Box>

              <Button
                full
                typeButton="primary"
                mb="10px"
                mt="20px"
                onClick={() => setCheckout(true)}
              >
                Bayar
              </Button>
            </Box>
          </Box>
        </Box>
      ) : null}
    </React.Fragment>
  );
}
