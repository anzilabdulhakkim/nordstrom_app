import { useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import SignInButton from "./SignInButton";
import NavbarTab from "./NavbarTab";

export default function Navbar() {
  const [user, setUser] = useState(null)

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <ChakraProvider>
      <VStack
        width={"95%"}
        m={"auto"}
        mt={"40px"}
        mb={"60px"}
        backgroundColor={"transparent"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
          width={"100%"}
          gap={{ base: "10px", md: "auto" }}
          mb={"15px"}
        >
          <Box>
            <Link to="/">
              <Image
                w={"198px"}
                h={"30px"}
                src="https://i.imgur.com/ubtddUO.png"
              />
            </Link>
          </Box>
          <InputBox />
          {user ? (
            <Menu>
              <MenuButton as={Button} variant="link" fontWeight="bold">
                {user.name}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <SignInButton />
          )}
        </Flex>
        {user && (
          <VStack width={"100%"} gap={"20px"}>
            <Box
              width={"100%"}
              h={"0.4px"}
              backgroundColor={"gray.300"}
            ></Box>
            <Box>
              <Link to="/products">
                <Button variant="link" fontWeight="bold">
                  Products
                </Button>
              </Link>
            </Box>
          </VStack>
        )}
        <NavbarTab />
      </VStack>
    </ChakraProvider>
  );
}
