import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export const NavButton: React.FC<{
  href: string;
  path?: string;
  children: string;
  passHref?: boolean;
  [prop: string]: any;
}> = ({ href, path, children, passHref, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("#222", "#ddd");
  return (
    <NextLink href={href} passHref={passHref}>
      <Link
        {...props}
        padding={3}
        m={0.5}
        color={active ? "#fff" : inactiveColor}
        fontWeight="semibold"
        bg={active ? "whatsapp.700" : "blackAlpha.100"}
        borderRadius="lg"
        transition="all 0.2s ease-in-out"
        _hover={{
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};
