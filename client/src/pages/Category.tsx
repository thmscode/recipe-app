import {
  Card,
  CardBody,
  Heading,
  Image,
  Grid,
  GridItem,
  Stack,
  Text,
  Divider,
  Link
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { RecipeCard } from "../types";

const Category = () => {
  const [recipes, setRecipes] = useState<RecipeCard[]>();
  const { category } = useParams();

  useEffect(() => {
    fetch(`/api/categories/${category}`)
      .then(res => res.json())
      .then(data => setRecipes(data.recipes.meals));
  }, [category]);

  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(4, 1fr)',
          md: 'repeat(6, 1fr)',
          lg: 'repeat(10, 1fr)',
          xl: 'repeat(12, 1fr)'
        }}
        px={{ base: '4', sm: '8', md: '20', xl: '36' }}
        py={12}
        gridGap={6}
      >
        {(typeof recipes === 'undefined') ?
          <LoadingSpinner /> :
          (recipes.map(recipe =>
            <GridItem colSpan={2} key={recipe.idMeal}>
              <Card>
                <CardBody>
                  <Image src={recipe.strMealThumb} />
                  <Stack mt={'4'} spacing={'4'}>
                    <Heading
                      size={{ base: 'sm', lg: 'md' }}
                      textAlign={'center'}
                      fontFamily={'Poppins'}
                    >
                      {recipe.strMeal}
                    </Heading>
                    <Divider />
                    <Text fontSize={{ base: 'sm', lg: 'md' }} textAlign={'center'}>
                      <Link href={`/meal_recipe/${recipe.idMeal}`}>View Recipe</Link>
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

export default Category;