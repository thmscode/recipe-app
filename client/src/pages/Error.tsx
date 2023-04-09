import {
  Flex,
  Link,
  Text
} from "@chakra-ui/react";

const Error = () => {
  return (
    <Flex
      flexDirection={'column'}
      px={{ base: '4', sm: '8', md: '20', xl: '36' }}
      py={8}
      gap={6}>
      <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}>404 - Page Not Found</Text>
      <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}>Hey there Chef, you must have gotten lost while trying to find your next recipe!</Text>
      <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}>Click <Link href="/" color={'redwood.400'}>here</Link> to return to the homepage!</Text>
    </Flex>
  );
}

export default Error;