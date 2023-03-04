import { Box, Flex, Text } from '@chakra-ui/react';
import NavigationLinks from './NavigationLinks';
import AuthControls from './AuthControls';

const Navbar = () => {
  return (
    <Box>
      <Flex
        minH={'75px'}
        align={'center'}
        justify={'space-between'}
        borderStyle={'solid'}
        borderWidth={1}
        px={48}>
        <Flex>
          <Text alignSelf={'center'} fontSize={'4xl'}>PrettyGood.</Text>
          <NavigationLinks />
        </Flex>
        <AuthControls />
      </Flex>
    </Box>
  );
}

export default Navbar;