import { Box, Center, ChakraProvider, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { CartBag } from "./CartBag";
import { CartLater } from "./CartLater";
import { useContext, useRef, useState } from "react";
import { StateContext } from "../../Context/StateContext";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export const Cartpage = () => {
  const { bagLength, laterBagLen } = useContext(StateContext);
  const [bagstate, setBagState] = useState(true);

  const handlBag = () => {
    setBagState(true);
  };

  const handleLater = () => {
    setBagState(false);
  };

  return (
    <ChakraProvider>
      <Center>
        <Box w="100%">
          <ScrollToTop
            smooth={"true"}
            viewBox={"0 0 30 30"}
            component={
              <Box>
                <Center>
                  <RiArrowUpSLine size={"20px"} width={"400"} />
                </Center>
                <Text color={"#393939"} fontSize={"13px"}>
                  Top
                </Text>
              </Box>
            }
          />
          <Navbar />
          <Box p="0% 5%">
            <Tabs>
              <TabList border="none">
                <Tab onClick={handlBag} border="1px solid black">Shopping Bag ({bagLength})</Tab>
                <Tab onClick={handleLater} border="1px solid black">Save for later ({laterBagLen})</Tab>
              </TabList>
            </Tabs>
            {bagstate ? <CartBag /> : <CartLater />}
          </Box>
          <Footer />
        </Box>
      </Center>
    </ChakraProvider>
  );
};
