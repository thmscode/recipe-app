import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

type Props = {
  recipeId: string,
  recipeTitle: string,
  recipeThumbnail: string
}

const FavouriteBtn: React.FC<Props> = ({ recipeId, recipeTitle, recipeThumbnail }) => {
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
  }, [currentUser, recipeId]);

  const addHandler = (): void => {
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

  const removeHandler = (): void => {
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
          w={'100%'}
          size={{ base: 'sm', lg: 'md' }}
          type={'submit'}
          bg={'redwood.400'}
          color={'white'}
          fontWeight={400}
          _hover={{ bg: 'redwood.200' }}
          onClick={removeHandler}
        >
          Remove from Favourites
        </Button> :
        <Button
          w={'100%'}
          size={{ base: 'sm', lg: 'md' }}
          type={'submit'}
          bg={'redwood.400'}
          color={'white'}
          fontWeight={400}
          _hover={{ bg: 'redwood.200' }}
          onClick={addHandler}
        >
          Add to Favourites
        </Button>
      }
    </>
  );
}

export default FavouriteBtn;