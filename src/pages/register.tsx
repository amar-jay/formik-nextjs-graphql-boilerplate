import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/layout/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <Main>
      <Text color={"blackAlpha.200"}>Hello 🎗️</Text>
    </Main>

    <DarkModeSwitch />
  </Container>
);

export default Index;
