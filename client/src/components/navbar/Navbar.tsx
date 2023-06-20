import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import UnauthorizedControls from './UnauthorizedControls';
import AuthorizedControls from './AuthorizedControls';
import Dropdown from './Dropdown';
import { useAuth } from '../../contexts/auth-context';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useAuth();

  return (
    <>
      <Box>
        <Flex
          minH={'75px'}
          align={'center'}
          justify={'space-between'}
          borderStyle={'solid'}
          borderWidth={1}
          px={{ base: '4', sm: '8', md: '20', xl: '36' }}
        >
          <Flex>
            <Logo />
            <NavigationLinks />
          </Flex>
          {!(currentUser) ?
            <UnauthorizedControls /> :
            <AuthorizedControls />
          }
          <IconButton
            size={'md'}
            bg={'white'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? <Dropdown /> : null}
      </Box>
    </>
  );
}

export default Navbar;