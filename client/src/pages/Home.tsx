import {
  Box,
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      bgImage={"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940&q=80')"}
      bgPosition={'center'}
      flexGrow={'1'}
      direction={'column'}
      justifyContent={'center'}
      px={36}
    >
      <Flex justify={'space-between'} align={'center'} pb={24}>
        <Flex direction={'column'}>
          <Text fontSize={'6xl'} color={'white'} fontWeight={'bold'}>Healthy Eating</Text>
          <Text fontSize={'5xl'} color={'white'}>Starts Here</Text>
        </Flex>
        <Box w={'40%'}>
          <Text color={'white'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quis labore rem maiores inventore atque ratione laboriosam culpa non! Iure mollitia sint quia id commodi soluta voluptates quis dolorem quisquam!
            Placeat ratione obcaecati debitis soluta nulla sunt voluptatem eaque expedita excepturi. Culpa natus doloremque aliquid atque quidem blanditiis ea facilis voluptatem! Nisi, ratione eaque! Quaerat, assumenda!
          </Text>
          <Button
            as={'a'}
            color={'white'}
            fontWeight={500}
            href={'/signup'}
            bg={'redwood.400'}
            fontSize={'lg'}
            mt={3}
            _hover={{
              bg: 'redwood.200'
            }}>
            Get Started
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;