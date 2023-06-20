import { Box, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <>
      <Box as={'a'} href={'/'}>
        <Text
          alignSelf={'center'}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
          fontFamily={'Poppins'}
        >
          PrettyGood.
        </Text>
      </Box>
    </>
  );
}

export default Logo;