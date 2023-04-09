import { Box, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Box as={'a'} href={'/'}>
      <Text alignSelf={'center'} fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>PrettyGood.</Text>
    </Box>
  );
}

export default Logo;