import {
  Box,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { DrinkProps } from "../../types";
import { nanoid } from 'nanoid';

const Drink: React.FC<DrinkProps> = ({ recipe }) => {
  return (
    <>
      <GridItem colSpan={12}>
        <Box>
          <Text fontSize={'3xl'}>{recipe.title}</Text>
          <Text fontSize={'md'}>{recipe.alcoholic} - {recipe.category}</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={3} rowSpan={4}>
        <Image src={recipe.thumbnail} />
      </GridItem>
      <GridItem colSpan={9} rowSpan={1}>
        <Text as={'u'} fontSize={'2xl'}>Instructions</Text>
        <Box px={2}>
        <Text>{recipe.instructions}</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={9} rowSpan={3}>
        <Text as={'u'} fontSize={'2xl'}>Ingredients</Text>
        <UnorderedList px={2}>
          <ListItem>{recipe.glass}</ListItem>
          {recipe.ingredients.map(ingredient => <ListItem fontSize={'md'} key={nanoid()}>{ingredient}</ListItem>)}
        </UnorderedList>
      </GridItem>
    </>
  );
}

export default Drink;