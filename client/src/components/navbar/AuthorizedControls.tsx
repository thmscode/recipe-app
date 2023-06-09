import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const AuthorizedControls = () => {
  const handleLogout = (): void => {
    signOut(auth)
      .then(() => <Navigate to='/' />)
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Flex hideBelow={'md'} alignItems={'center'}>
        <Menu>
          <MenuButton
            fontWeight={400}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg={'transparent'}
            fontSize={'lg'}
            _hover={{ bg: 'transparent', textDecor: 'underline' }}
            _active={{ bg: 'transparent', textDecor: 'underline' }}
          >
            My Account
          </MenuButton>
          <MenuList>
            <MenuItem
              as={'a'}
              href={'/favourites'}
              fontWeight={500}
              _focus={{ color: 'white', bg: 'redwood.200' }}
              _hover={{ color: 'white', bg: 'redwood.200' }}
            >
              View Favourites
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          as={'a'}
          color={'white'}
          fontWeight={400}
          href={'/'}
          bg={'redwood.400'}
          fontSize={'lg'}
          _hover={{ bg: 'redwood.200' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </>

  );
}

export default AuthorizedControls;