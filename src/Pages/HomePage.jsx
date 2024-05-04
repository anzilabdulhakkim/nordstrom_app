import { Box, Center, ChakraProvider, extendTheme, Grid, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import Header from "../Components/Navbar/Header";
import Navbar from "../Components/Navbar/Navbar";
import FirstImageDiv from "../Components/Container/FirstImageDiv";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
};

const theme = extendTheme({
    fonts: {
        heading: `Brandon Text, Arial, sans-serif`,
        body: `Brandon Text, Arial, sans-serif`,
    },
    breakpoints,
});

function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
          <ChakraProvider theme={theme}>
            <Box padding='6' boxShadow='lg' bg='white'>
              <SkeletonCircle size='10' />
              <SkeletonText mt='4' noOfLines={7} spacing='4' />
            </Box>
    
            <Box padding='6' boxShadow='lg' bg='white' mt='6'>
              <Skeleton height='200px' />
            </Box>
    
            <Box padding='6' boxShadow='lg' bg='white' mt='6'>
              <Grid templateColumns='repeat(5, 1fr)' gap='20px'>
                {[...Array(20)].map((_, index) => (
                  <Skeleton key={index} height='300px' />
                ))}
              </Grid>
            </Box>
    
            <Box padding='6' boxShadow='lg' bg='white' mt='6'>
              <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>
          </ChakraProvider>
        );
      }
    

    return (
        <ChakraProvider theme={theme}>
            <Box>
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
                <Header />
                <Navbar />
                <FirstImageDiv />
                <Footer />
            </Box>
        </ChakraProvider>
    );
}

export default HomePage;