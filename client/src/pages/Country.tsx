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
import { Recipe } from "../types";

const Country = () => {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const { country } = useParams();

  useEffect(() => {
    fetch(`/api/countries/${country}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecipes(data.countries.meals);
      });
  }, []);

  return (
    <Grid
      templateColumns={'repeat(12, 1fr)'}
      px={48}
      py={12}
      gridGap={8}
    >
      {(typeof recipes === 'undefined') ?
        <LoadingSpinner /> :
        (recipes.map(recipe =>
          <GridItem colSpan={2} key={recipe.idMeal}>
            <Card>
              <CardBody>
                <Image src={recipe.strMealThumb} />
                <Stack mt={'4'} spacing={'4'}>
                  <Heading size={'md'} textAlign={'center'}>{recipe.strMeal}</Heading>
                  <Divider />
                  <Text fontSize={'md'} textAlign={'center'}>
                    <Link href={`/meal_recipe/${recipe.idMeal}`}>View Recipe</Link>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
}

export default Country;