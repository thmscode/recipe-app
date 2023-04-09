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
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { Category } from "../types";

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories.categories));
  }, []);

  return (
    <Grid
      templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)', lg: 'repeat(10, 1fr)', xl: 'repeat(12, 1fr)' }}
      px={{ base: '4', sm: '8', md: '20', xl: '36' }}
      py={12}
      gridGap={6}>
      {(typeof categories === 'undefined') ?
        <LoadingSpinner /> :
        (categories.map(category =>
          <GridItem colSpan={2} key={category.idCategory}>
            <Card>
              <CardBody>
                <Image src={category.strCategoryThumb} />
                <Stack mt={4} spacing={4}>
                  <Heading size={{ base: 'sm', lg: 'md' }} textAlign={'center'}>{category.strCategory}</Heading>
                  <Divider />
                  <Text fontSize={{ base: 'sm', lg: 'md' }} textAlign={'center'}>
                    <Link href={`/categories/${category.strCategory}`}>View All</Link>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
}
export default CategoriesList;