import {
  Card,
  CardBody,
  Heading,
  Grid,
  GridItem,
  Stack,
  Text,
  Divider,
  Link,
  Image,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const CountriesList = () => {
  const [countries, setCountries] = useState<{ strArea: string }[]>();

  useEffect(() => {
    fetch('/api/countries')
      .then(res => res.json())
      .then(data => setCountries(data.countries.meals));
  }, []);

  return (
    <Grid
      templateColumns={{
        base: 'repeat(4, 1fr)',
        sm: 'repeat(6, 1fr)',
        lg: 'repeat(8, 1fr)',
        xl: 'repeat(10, 1fr)'
      }}
      px={{ base: '4', sm: '8', md: '20', xl: '36' }}
      py={12}
      gridGap={6}>
      {(typeof countries === 'undefined') ?
        <LoadingSpinner /> :
        (countries.map(country =>
          <GridItem colSpan={2} key={nanoid()}>
            <Card>
              <CardBody>
                <Image src={`/images/flag_${country.strArea}.png`} border={'1px'} borderColor={'gray.200'} />
                <Stack mt={4} spacing={4}>
                  <Heading size={{ base: 'sm', lg: 'md' }} textAlign={'center'} fontFamily={'Poppins'}>{country.strArea}</Heading>
                  <Divider />
                  <Text fontSize={{ base: 'sm', lg: 'md' }} textAlign={'center'}>
                    <Link href={`/countries/${country.strArea}`}>View All</Link>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
}
export default CountriesList;