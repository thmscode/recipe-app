import {
  Box,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { DrinkProps } from "../../types";
import { nanoid } from 'nanoid';

const Drink: React.FC<DrinkProps> = ({ recipe }) => {
  const ingredientsArray1: string[] = [];
  const ingredientsArray2: string[] = [];

  recipe.ingredients.forEach((ingredient, i) => {
    if (i % 2 === 0) ingredientsArray1.push(ingredient);
    if (i % 2 === 1) ingredientsArray2.push(ingredient);
  })

  return (
    <>
      <GridItem colSpan={12}>
        <Box>
          <Text fontSize={'3xl'}>{recipe.title}</Text>
          <Text fontSize={'md'}>{recipe.alcoholic} - {recipe.category}</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={4} rowSpan={5}>
        <Image src={recipe.thumbnail} />
      </GridItem>
      <GridItem colSpan={8} rowSpan={1}>
        <Text as={'u'} fontSize={'2xl'}>Ingredients</Text>
        <UnorderedList>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={2}>
            <GridItem key={nanoid()} px={4}>
              {ingredientsArray1.map(ingredient => <ListItem fontSize={'md'} key={nanoid()}>{ingredient}</ListItem>)}
            </GridItem>
            <GridItem px={4}>
              {ingredientsArray2.map(ingredient => <ListItem fontSize={'md'} key={nanoid()}>{ingredient}</ListItem>)}
            </GridItem>
          </Grid>
        </UnorderedList>
      </GridItem>
      <GridItem colSpan={8} rowSpan={4}>
        <Text as={'u'} fontSize={'2xl'}>Instructions</Text>
        <Box whiteSpace={'pre-wrap'} px={2}>
          <Text>{recipe.instructions}</Text>
          <br />
          <Text as={'i'}>Note: Serving in a {recipe.glass} is optional.</Text>
        </Box>
      </GridItem>
    </>
  );
}

export default Drink;