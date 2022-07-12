import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Container = ({ children, ...props }: FlexProps) => (
  <Flex
    maxW={"35rem"}
    bgColor={useColorModeValue("whatsapp.100", "blackAlpha.400")}
    {...props}
    // alignSelf={"auto"}
    justifyContent={"center"}
    margin={"auto"}
  >
    {children}
  </Flex>
);
