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
      templateColumns={'repeat(12, 1fr)'}
      px={48}
      py={12}
      gridGap={6}>
      {(typeof countries === 'undefined') ?
        <LoadingSpinner /> :
        (countries.map(country =>
          <GridItem colSpan={2} key={nanoid()}>
            <Card>
              <CardBody>
                <Image src={`/images/flag_${country.strArea}.png`} border={'1px'} borderColor={'offwhite.400'} />
                <Stack mt={4} spacing={4}>
                  <Heading size={'md'} textAlign={'center'}>{country.strArea}</Heading>
                  <Divider />
                  <Text fontSize={'md'} textAlign={'center'}>
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