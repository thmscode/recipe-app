import { Flex, GridItem, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <GridItem colSpan={12}>
      <Flex justifyContent={'center'}>
        <Spinner
          thickness={'4px'}
          speed={'0.65s'}
          emptyColor={'gray.300'}
          color={'redwood.200'}
          size={'xl'}
          alignSelf={'center'}
        />
      </Flex>
    </GridItem>
  );
}

export default LoadingSpinner;