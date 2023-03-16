import {
  Box,
  Divider,
  Grid,
  GridItem,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { MealProps } from "../../types";
import { nanoid } from 'nanoid';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Meal: React.FC<MealProps> = ({ recipe }) => {
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
          <Text fontSize={'md'}>{recipe.area} - {recipe.category}</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Image src={recipe.thumbnail} />
      </GridItem>
      <GridItem colSpan={9} rowSpan={5}>
        <Text as={'u'} fontSize={'2xl'}>Instructions</Text>
        <Box whiteSpace={'pre-wrap'} px={2}>
          <Text>{recipe.instructions}</Text>
          <Divider my={2} />
          <Link fontSize={'lg'} href={`${recipe.youtubeUrl}`} isExternal>
            Tutorial <ExternalLinkIcon />
          </Link>
        </Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Box>
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
        </Box>
      </GridItem>
    </>
  );
}

export default Meal;