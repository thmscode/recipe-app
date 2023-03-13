import {
  Box,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { MealProps } from "../../types";
import { nanoid } from 'nanoid';

const Meal: React.FC<MealProps> = ({ recipe }) => {
  const ingredientsArray1: string[] = [];
  const ingredientsArray2: string[] = [];

  recipe.ingredients.map((ingredient, i) => {
    if (i % 2 === 0) ingredientsArray1.push(ingredient);
    if (i % 2 === 1) ingredientsArray2.push(ingredient);
  })

  return (
    <>
      <GridItem colSpan={12}>
        <Box>
          <Text fontSize={'3xl'}>{recipe.title}</Text>
          <Text fontSize={'md'}>{recipe.area} - {recipe.category}</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Image src={recipe.thumbnail} />
      </GridItem>
      <GridItem colSpan={8} rowSpan={5}>
        <Text as={'u'} fontSize={'2xl'}>Instructions</Text>
        <Box whiteSpace={'pre-wrap'} px={2}>
          <Text>{recipe.instructions}</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Box>
          <Text as={'u'} fontSize={'2xl'}>Ingredients</Text>
          <UnorderedList>
            <Grid templateColumns={'repeat(2, 1fr)'} gap={2}>
              <GridItem key={nanoid()} px={4}>
                {ingredientsArray1.map(ingredient => <ListItem key={nanoid()}>{ingredient}</ListItem>)}
              </GridItem>
              <GridItem px={4}>
                {ingredientsArray2.map((ingredient, i) => <ListItem key={nanoid()}>{ingredient}</ListItem>)}
              </GridItem>
            </Grid>
          </UnorderedList>
        </Box>
      </GridItem>
    </>
  );
}

export default Meal;