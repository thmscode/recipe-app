import {
  Box,
  Flex,
  Link,
  Text
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      minH={'50px'}
      w={'100%'}
      position={'absolute'}
      bottom={0}
      align={'center'}
      justify={'center'}
    >
      <Box>
        <Text>
          Powered by <Link href={'https://www.themealdb.com/'} color={'redwood.400'} >TheMealDB</Link> & <Link href={'https://www.thecocktaildb.com/'} color={'redwood.400'}>TheCocktailDB</Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;