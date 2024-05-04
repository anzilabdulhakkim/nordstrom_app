import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      backgroundColor="black"
      display={{ base: 'none', md: 'flex' }}
      height="41px"
      px="40px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        fontSize={{ base: '10px', sm: '10px', md: '14px', lg: '14px' }}
        color="white"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems="center"
        textAlign="center"
        gap={{ base: '1px', md: '2px' }}
        marginLeft="auto"
        marginRight="auto"
      >
        <Text fontWeight="700">
          Find the best gifts for every mom on your list.
        </Text>
        <Spacer />
        <Text textDecoration="underline"> Mother's Day Gifts</Text>
      </Text>
      <Flex gap="5px" alignItems="center">
        <Image
          borderRadius="50%"
          height="16px"
          width="16px"
          src="https://n.nordstrommedia.com/alias/IN.gif"
          alt="India"
        />
        <Text color="white" lineHeight="22.5px" margin="0">
          India
        </Text>
      </Flex>
    </Box>
  );
}
