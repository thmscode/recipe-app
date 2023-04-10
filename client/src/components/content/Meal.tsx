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
      <GridItem area={'header'}>
        <Flex justify={'space-between'} align={'center'}>
          <Box>
            <Text fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}>{recipe.title}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{recipe.area} - {recipe.category}</Text>
          </Box>
          <Box hideBelow={'sm'}>
            <FavouriteBtn
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              recipeThumbnail={recipe.thumbnail} />
          </Box>
        </Flex>
      </GridItem>
      <GridItem area={'image'}>
        <Image src={recipe.thumbnail} />
        <Box mt={4} hideFrom={'md'}>
          <FavouriteBtn
            recipeId={recipe.id}
            recipeTitle={recipe.title}
            recipeThumbnail={recipe.thumbnail} />
        </Box>
      </GridItem>
      <GridItem area={'ingredients'}>
        <Box>
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
        </Box>
      </GridItem>
      <GridItem area={'instructions'}>
        <Text as={'u'} fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}>Instructions</Text>
        <Box whiteSpace={'pre-wrap'} px={2}>
          <Text fontSize={{ base: 'sm', lg: 'md' }}>{recipe.instructions}</Text>
          <br />
          <Divider my={2} />
          <Link fontSize={{ base: 'md', md: 'lg' }} href={`${recipe.youtubeUrl}`} isExternal>
            Tutorial <ExternalLinkIcon />
          </Link>
        </Box>
      </GridItem>
    </>
  );
}

export default Meal;