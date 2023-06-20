import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import FavouritesList from "../components/favourites/FavouritesList";

type UserObject = {
  firstName: string,
  favourites: {
    id: string,
    title: string,
    imgUrl: string
  }[]
}

const Favourites = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState<UserObject>();

  const capitalizeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    if (currentUser) {
      currentUser.getIdToken()
        .then((token) => {
          fetch('/api/user/getFavourites', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
          })
            .then(res => res.json())
            .then(data => setUser({ ...data }))
            .catch(e => console.log('failed'))
        })
        .catch((e) => console.log('failed'))
    }
  }, [currentUser]);

  if (!currentUser) return <Navigate to='/login' />

  return (
    <>
      <Flex
        direction={'column'}
        px={{ base: '4', sm: '8', md: '20', xl: '36' }}
        py={8}
      >
        {user ?
          <>
            <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>{capitalizeName(user.firstName)}'s Favourites</Text>
            {user.favourites.length === 0 ?
              <Text
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                textAlign={'center'}
                mt={6}
              >
                No favourites yet!
              </Text> :
              <FavouritesList favourites={user.favourites} />
            }
          </> :
          <LoadingSpinner />
        }
      </Flex>
    </>
  );
}

export default Favourites;