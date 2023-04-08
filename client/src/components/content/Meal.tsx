import {
  Box,
  Divider,
  Flex,
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
import FavouriteBtn from "./FavouriteBtn";

const Meal: React.FC<MealProps> = ({ recipe }) => {
  const ingredientsArray1: string[] = [];
  const ingredientsArray2: string[] = [];

  recipe.ingredients.forEach((ingredient, i) => {
    if (i % 2 === 0) ingredientsArray1.push(ingredient);
    if (i % 2 === 1) ingredientsArray2.push(ingredient);
  })

  return (
    <>
      <GridItem colSpan={12} rowSpan={1}>
        <Flex justify={'space-between'} align={'center'}>
          <Box>
            <Text fontSize={'3xl'}>{recipe.title}</Text>
            <Text fontSize={'md'}>{recipe.area} - {recipe.category}</Text>
          </Box>
          <FavouriteBtn
            recipeId={recipe.id}
            recipeTitle={recipe.title}
            recipeThumbnail={recipe.thumbnail} />
        </Flex>
      </GridItem>
      <GridItem colSpan={4} rowSpan={5}>
        <Image src={recipe.thumbnail} />
      </GridItem>
      <GridItem colSpan={8} rowSpan={1}>
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
      <GridItem colSpan={8} rowSpan={4}>
        <Text as={'u'} fontSize={'2xl'}>Instructions</Text>
        <Box whiteSpace={'pre-wrap'} px={2}>
          <Text>{recipe.instructions}</Text>
          <br />
          <Divider my={2} />
          <Link fontSize={'lg'} href={`${recipe.youtubeUrl}`} isExternal>
            Tutorial <ExternalLinkIcon />
          </Link>
        </Box>
      </GridItem>
    </>
  );
}

export default Meal;