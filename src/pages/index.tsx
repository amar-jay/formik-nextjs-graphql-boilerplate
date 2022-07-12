import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  propNames,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Container } from "../components/layout/Container";
import { NavBar } from "../components/layout/NavBar";
import { Main } from "../components/layout/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Field, Form, Formik } from "formik";

function validateName(value: unknown) {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value == null) {
    error = "It's blank.";
  }
  return error;
}
function validatePassword(value: unknown): string | undefined {
  let error;
  if (!value) {
    error = "Password is required";
  }
  return error;
}
const Index = () => (
  <Container height="100vh">
    <NavBar path={"/"} />
    <Main>
      <Heading
        textAlign={"center"}
        paddingTop={"4rem"}
        textDecoration={"underline"}
        textDecorationColor={useColorModeValue(
          "whatsapp.700",
          "blackAlpha.900"
        )}
      >
        Login
      </Heading>
      <Flex
        height={"100vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDir={"row"}
      >
        This is the Home page.
      </Flex>
    </Main>
  </Container>
);

export default Index;
