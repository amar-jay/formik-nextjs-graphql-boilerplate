import React from "react";
import {
  Container,
  Box,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { NavButton } from "./NavButton";
const loggedIn = true;
export const NavBar: React.FC<{
  path: string;
  [prop: string]: string | number;
}> = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      zIndex={1}
      style={{ backdropFilter: "blur(10px)" }}
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        alignSelf="center"
        justifyContent="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          alignItems="flex-end"
        >
          <Box p={4} justifyContent={"flex-end"} paddingRight={"1vw"} flex={1}>
            <NavButton href="/" path={path} children="Home" />
            <NavButton href="/login" path={path} children="Login" />
            <NavButton href="/signup" path={path} children="SignUp" />
          </Box>
          <DarkModeSwitch />
        </Stack>

        <Box
          flex={1}
          paddingY={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
          flexDirection={"row"}
          display="flex"
        >
          <Box
            display={{
              base: "block",
              md: "none",
            }}
          >
            <DarkModeSwitch />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Outline"
              />
              <MenuList p={"6px"}>
                <MenuItem
                  // as={Link}
                  borderRadius={"10px"}
                  padding={0}
                >
                  <NavButton
                    height={"full"}
                    width={"full"}
                    href={"/"}
                    path={path}
                    passHref
                  >
                    {loggedIn ? "Profile" : "Login"}
                  </NavButton>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
