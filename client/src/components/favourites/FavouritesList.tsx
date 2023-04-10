import {
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { Favourites } from "../../types";

const FavouritesList: React.FC<Favourites> = ({ favourites }) => {
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(3, 1fr)',
          sm: 'repeat(6, 1fr)',
          md: 'repeat(9, 1fr)',
          lg: 'repeat(12, 1fr)',
          xl: 'repeat(15, 1fr)'
        }}
        gridGap={6}>
        {(favourites.map(recipe =>
          <GridItem colSpan={3} key={recipe.id}>
            <Card>
              <CardBody>
                <Image src={recipe.imgUrl} />
                <Stack spacing={4} mt={4}>
                  <Heading size={{ base: 'sm', lg: 'md' }} textAlign={'center'} fontFamily={'Poppins'}>{recipe.title}</Heading>
                  <Divider />
                  <Text fontSize={{ base: 'sm', lg: 'md' }} textAlign={'center'}>
                    <Link href={`/meal_recipe/${recipe.id}`}>View Recipe</Link>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default FavouritesList;