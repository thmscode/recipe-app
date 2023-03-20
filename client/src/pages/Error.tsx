import {
  Grid,
  GridItem,
  Link,
  Text
} from "@chakra-ui/react";

const Error = () => {
  return (
    <Grid
      templateColumns={'repeat(12, 1fr)'}
      px={48}
      py={8}
      gridGap={6}>
      <GridItem colSpan={12}>
        <Text fontSize={'4xl'}>404 - Page Not Found</Text>
      </GridItem>
      <GridItem colSpan={12}>
        <Text fontSize={'2xl'}>Hey there Chef, you must have gotten lost while trying to find your next recipe!</Text>
      </GridItem>
      <GridItem colSpan={12}>
        <Text fontSize={'2xl'}>Click <Link href="/" color={'redwood.400'}>here</Link> to return to the homepage!</Text>
      </GridItem>
    </Grid>
  );
}

export default Error;