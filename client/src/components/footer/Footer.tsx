import {
  Box,
  Link,
  Text
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box py={3} mt={'auto'}>
        <Text align={'center'} fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} fontFamily={'Poppins'}>
          Powered by <Link href={'https://www.themealdb.com/'} color={'redwood.400'} >TheMealDB</Link> & <Link href={'https://www.thecocktaildb.com/'} color={'redwood.400'}>TheCocktailDB</Link>
        </Text>
      </Box>
    </>
  );
}

export default Footer;