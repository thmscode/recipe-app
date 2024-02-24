import {
  Box,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { nanoid } from 'nanoid';
import { DrinkRecipe } from "../../types";

type Props = {
  recipe: DrinkRecipe
}

const Drink: React.FC<Props> = ({ recipe }) => {
  const ingredientsArray1: string[] = [];
  const ingredientsArray2: string[] = [];

  recipe.ingredients.forEach((ingredient, i) => {
    if (i % 2 === 0) ingredientsArray1.push(ingredient);
    if (i % 2 === 1) ingredientsArray2.push(ingredient);
  })

  return (
    <>
      <GridItem area={'header'}>
        <Box>
          <Text fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}>{recipe.title}</Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>{recipe.alcoholic} - {recipe.category}</Text>
        </Box>
      </GridItem>
      <GridItem area={'image'}>
        <Image src={recipe.thumbnail} />
      </GridItem>
      <GridItem area={'ingredients'}>
        <Text as={'u'} fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}>Ingredients</Text>
        <UnorderedList>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={2}>
            <GridItem key={nanoid()} px={4}>
              {ingredientsArray1.map(ingredient => <ListItem fontSize={{ base: 'sm', lg: 'md' }} key={nanoid()}>{ingredient}</ListItem>)}
            </GridItem>
            <GridItem px={4}>
              {ingredientsArray2.map(ingredient => <ListItem fontSize={{ base: 'sm', lg: 'md' }} key={nanoid()}>{ingredient}</ListItem>)}
            </GridItem>
          </Grid>
        </UnorderedList>
      </GridItem>
      <GridItem area={'instructions'}>
        <Text as={'u'} fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}>Instructions</Text>
        <Box whiteSpace={'pre-wrap'} px={2}>
          <Text fontSize={{ base: 'sm', lg: 'md' }}>{recipe.instructions}</Text>
          <br />
          <Text as={'i'} fontSize={{ base: 'sm', lg: 'md' }}>Note: Serving in a {recipe.glass} is optional.</Text>
        </Box>
      </GridItem>
    </>
  );
}

export default Drink;