import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { FavouriteBtnProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const FavouriteBtn: React.FC<FavouriteBtnProps> = ({ recipeId, recipeTitle, recipeThumbnail }) => {
  const [isFavourited, setIsFavourited] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      currentUser.getIdToken()
        .then((token) => {
          fetch('/api/user/isRecipeFavourited', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: recipeId })
          })
            .then((res) => res.json())
            .then((data) => setIsFavourited(data.favourited))
            .catch((error) => console.log('failed'));
        })
        .catch((error) => console.log('failed'));
    }
  }, []);

  const addHandler = () => {
    if (currentUser) {
      currentUser.getIdToken()
        .then((token) => {
          fetch('/api/user/addRecipeToFavourites', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: recipeId,
              title: recipeTitle,
              imgUrl: recipeThumbnail
            })
          })
            .then(() => setIsFavourited(true))
        })
        .catch((error) => console.log('failed'));
    } else navigate('/login');
  };

  const removeHandler = () => {
    if (currentUser) {
      currentUser.getIdToken()
        .then((token) => {
          fetch('/api/user/removeRecipeFromFavourites', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: recipeId })
          })
            .then(() => setIsFavourited(false))
        })
        .catch((error) => console.log('failed'));
    } else navigate('/login');
  };

  return (
    <>
      {isFavourited ?
        <Button
          type={'submit'}
          bg={'redwood.400'}
          color={'white'}
          _hover={{ bg: 'redwood.200' }}
          onClick={removeHandler}>
          Remove From Favourites
        </Button> :
        <Button
          type={'submit'}
          bg={'redwood.400'}
          color={'white'}
          _hover={{ bg: 'redwood.200' }}
          onClick={addHandler}>
          Add to Favourites
        </Button>
      }
    </>

  );
}

export default FavouriteBtn;