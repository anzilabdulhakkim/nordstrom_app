import { Spinner, Flex } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex align="center" justify="center" h="30vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};

export default Loader;
