import {
  Flex,
  Link,
  Text
} from "@chakra-ui/react";

const Error = () => {
  return (
    <Flex
      flexDirection={'column'}
      px={48}
      py={8}
      gap={6}>
      <Text fontSize={'4xl'}>404 - Page Not Found</Text>
      <Text fontSize={'2xl'}>Hey there Chef, you must have gotten lost while trying to find your next recipe!</Text>
      <Text fontSize={'2xl'}>Click <Link href="/" color={'redwood.400'}>here</Link> to return to the homepage!</Text>
    </Flex>
  );
}

export default Error;