import { Box, Flex, Text } from '@chakra-ui/react';
import NavigationLinks from './NavigationLinks';
import UnauthorizedControls from './UnauthorizedControls';
import AuthorizedControls from './AuthorizedControls';
import { useAuth } from '../../contexts/auth-context';

const Navbar = () => {
  const { currentUser } = useAuth();

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
          <Box as={'a'} href={'/'}>
            <Text alignSelf={'center'} fontSize={'4xl'}>PrettyGood.</Text>
          </Box>
          <NavigationLinks />
        </Flex>
        {!(currentUser) ?
          <UnauthorizedControls /> :
          <AuthorizedControls />
        }
      </Flex>
    </Box>
  );
}

export default Navbar;