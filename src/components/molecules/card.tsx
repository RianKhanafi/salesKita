import { Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import ImageNasiGoreng from "assets/images/nasigoreng.png";
import { Text } from "components/atoms";
import { notoSans, openSans } from "theme/font";
import Icons, { IconsName } from "assets/icons";

export default function Card({
  isResponsive = true,
}: {
  isResponsive?: boolean;
}) {
  return (
    <Box
      width={{
        base: "100%",
        md: "240px",
        lg: "230px",
        xl: "230px",
      }}
      height="auto"
      display="flex"
      flexDirection={{
        base: "row",
        md: "column",
        lg: "column",
        xl: "column",
      }}
      justifyContent="space-between"
      alignItems={{ base: "center", md: "center", lg: "normal", xl: "normal" }}
      cursor="pointer"
      _hover={{
        ".imgbg": {
          borderBottom: {
            base: "1px solid",
            lg: "3px solid",
            xl: "3px solid",
          },
          borderColor: {
            base: "primary.hard",
            lg: "primary.hard",
            xl: "primary.hard",
          },
          // backgroundColor: "gray.soft",
        },
      }}
    >
      <Box
        height={{
          base: "72px",
          md: "72px",
          lg: "205px",
          xl: "205px",
        }}
        width={{
          base: "90px",
          md: "90px",
          lg: "100%",
          xl: "100%",
        }}
        // backgroundColor={{
        //   base: "gray.soft",
        //   md: "gray.soft",
        //   lg: "white",
        //   xl: "white",
        // }}
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        display={{
          base: "flex",
          md: "flex",
          ...(!isResponsive && { lg: "none", xl: "none" }),
        }}
        justifyContent="center"
        alignItems="center"
        className="imgbg"
      >
        <Box
          height={{
            base: "63px",
            md: "63px",
            lg: "190px",
            xl: "190px",
          }}
          width={{
            base: "63px",
            md: "63px",
            lg: "100%",
            xl: "100%",
          }}
          m={{
            base: "8px",
            lg: "initial",
            xl: "initial",
          }}
          borderTopLeftRadius={{
            base: "10px",
            md: "10px",
            lg: "25px",
            xl: "25px",
          }}
          borderTopRightRadius={{
            base: "10px",
            md: "10px",
            lg: "25px",
            xl: "25px",
          }}
          borderBottomLeftRadius={{ base: "10px", md: "10px", lg: 0, xl: 0 }}
          borderBottomRightRadius={{ base: "10px", md: "10px", lg: 0, xl: 0 }}
          overflow="hidden"
        >
          <Image
            src={ImageNasiGoreng}
            alt="nasigoreng"
            placeholder="blur"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box
        px={{ base: "12px", md: "12px", lg: "initial", xl: "initial" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ base: "13px", lg: "13px", xl: "13px" }}
          mb={{ base: "0", lg: "7px", xl: "7px" }}
          color="dark.hard"
          fontWeight="500"
          mt="10px"
          className={openSans.className}
        >
          Nasi Goreng Gila, Paket Lengkap dengan pete.
        </Text>

        <Box>
          <Text
            fontSize={{
              base: "15px",
              ...(isResponsive && { lg: "22px", xl: "22px" }),
            }}
            fontWeight="semibold"
            color="dark.hard"
            className={notoSans.className}
            display="flex"
            mt="10px"
          >
            <Text
              fontSize={{
                base: "8px",
                ...(isResponsive && { lg: "12px", xl: "12px" }),
              }}
            >
              Rp.{" "}
            </Text>
            <Text> 18.000</Text>
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/* <Box>
          <Text
            fontSize={{ base: "14px", lg: "22px", xl: "22px" }}
            fontWeight="semibold"
            mt={{ base: "3px" }}
          >
            Rp. 18.000
          </Text>
        </Box> */}
        <Box w="80px" display="flex" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            mt="10px"
          >
            <Box
              width="25px"
              height="25px"
              backgroundColor="gray.soft"
              borderRadius="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                backgroundColor: "primary.hard",
              }}
            >
              <Icons name={IconsName.minus} width={15} height={15} />
            </Box>
            <Box px={{ base: "7px" }}>
              <Text className={notoSans.className} fontSize={{ base: "15px" }}>
                1
              </Text>
            </Box>
            <Box
              width="25px"
              height="25px"
              backgroundColor="gray.soft"
              borderRadius="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                backgroundColor: "primary.hard",
              }}
            >
              <Icons
                name={IconsName.plus}
                color="black"
                width={15}
                height={15}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
