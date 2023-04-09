import {
  Box,
  Link,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Dropdown = () => {
  const [isBrowseClicked, setIsBrowseClicked] = useState<boolean>(false);
  const [isRandomClicked, setIsRandomClicked] = useState<boolean>(false);
  const { currentUser } = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsBrowseClicked(false);
        setIsRandomClicked(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box>
        <Stack spacing={0}>
          <Button
            rightIcon={<ChevronDownIcon />}
            bg={'transparent'}
            fontSize={'md'}
            _active={{ bg: 'transparent', textDecor: 'underline' }}
            onClick={() => setIsBrowseClicked(prevState => !prevState)}>
            Browse Recipes
          </Button>
          {isBrowseClicked ? (
            <Stack alignItems={'center'} justifyItems={'center'}>
              <Link href={'/categories'}>By Category</Link>
              <Link href={'/countries'}>By Country</Link>
            </Stack>
          ) : null}
          <Button
            rightIcon={<ChevronDownIcon />}
            bg={'transparent'}
            fontSize={'md'}
            _active={{ bg: 'transparent', textDecor: 'underline' }}
            onClick={() => setIsRandomClicked(prevState => !prevState)}>
            Get Random Recipe
          </Button>
          {isRandomClicked ? (
            <Stack alignItems={'center'} justifyItems={'center'}>
              <Link href={'/random_meal'}>Meal Recipe</Link>
              <Link href={'/random_drink'} pb={2}>Drink Recipe</Link>
            </Stack>
          ) : null}
          {currentUser ? (
            <Stack alignItems={'center'}>
              <Link href={'/favourites'} fontWeight={500}>View Favourites</Link>
              <Button w={'100%'} bg={'none'} onClick={handleLogout}>Logout</Button>
            </Stack>
          ) : (
            <Stack alignItems={'center'}>
              <Link href={'/login'} fontWeight={500}>Log In</Link>
              <Link href={'/signup'} fontWeight={500} pb={2}>Sign Up</Link>
            </Stack>
          )}
        </Stack>
      </Box>
    </>
  );
}

export default Dropdown;