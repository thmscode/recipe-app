import {
  Card,
  CardBody,
  Divider,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { UserObject } from "../../types";

const FavouritesList: React.FC<UserObject> = ({ firstName, favourites }) => {
  const capitalizeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const userFirstName = capitalizeName(firstName);

  return (
    <>
      <GridItem colSpan={12}>
        <Text fontSize={'2xl'}>{userFirstName}'s Favourites</Text>
      </GridItem>
      {favourites.length === 0 ?
      <GridItem colSpan={12}>
        <Text fontSize={'xl'} textAlign={'center'}>No favourites yet!</Text>
      </GridItem> :
        (favourites.map(recipe =>
          <GridItem colSpan={3} key={recipe.id}>
            <Card>
              <CardBody>
                <Image src={recipe.imgUrl} />
                <Stack>
                  <Heading size={'md'} textAlign={'center'}>{recipe.title}</Heading>
                  <Divider />
                  <Text fontSize={'md'} textAlign={'center'}>
                    <Link href={`/meal_recipe/${recipe.id}`}>View Recipe</Link>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </>
  );
}

export default FavouritesList;