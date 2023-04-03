import { useState, useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import { Navigate } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import { UserObject } from "../types";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import FavouritesList from "../components/favourites/FavouritesList";

const Favourites = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState<UserObject>();

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
    <Grid
      templateColumns={'repeat(12, auto)'}
      px={48}
      py={8}>
      {user ?
        <FavouritesList
          firstName={user.firstName}
          favourites={user.favourites} /> :
        <LoadingSpinner />}
    </Grid>
  );
}

export default Favourites;