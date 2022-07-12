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
import React from 'react';
import { Container } from "../components/layout/Container";
import { NavBar } from "../components/layout/NavBar";
import { Main } from "../components/Main";
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
      <Heading textAlign={"center"} paddingTop={"4rem"} textDecoration={'underline'} textDecorationColor={useColorModeValue('whatsapp.700', 'blackAlpha.900')}>
      Sign Up
      </Heading>
      <Flex
        height={"100vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDir={"row"}
      >
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, actions) => {
            window.setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <>
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name" paddingBottom={3}>
                        Name
                      </FormLabel>
                      <Input
                        {...field}
                        id="name"
                        placeholder="name"
                        maxW={"100%"}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <>
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name" paddingBottom={3}>
                        Email
                      </FormLabel>
                      <Input
                        {...field}
                        id="name"
                        placeholder="name"
                        maxW={"100%"}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

 
              {/*--------- */}
              <Field name="password" validate={validatePassword}>
                {({ field, form }) => (
                  <>
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel htmlFor="password" paddingY={3}>
                        Password
                      </FormLabel>
                      <Input
                        {...field}
                        id="password"
                        type={"password"}
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>
               <Field name="name" validate={validatePassword}>
                {({ field, form }) => (
                  <>
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name" paddingBottom={3}>
                        Enter Password Again
                      </FormLabel>
                      <Input
                        {...field}
                        id="name"
                        maxW={"100%"}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  </>
                )}
              </Field>

              <Button
                mt={4}
                colorScheme="whatsapp"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Main>
  </Container>
);

export default Index;
