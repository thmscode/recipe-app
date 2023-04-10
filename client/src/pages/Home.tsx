import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";
import { useAuth } from "../contexts/auth-context";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <Flex
      bgImage={"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940&q=80')"}
      bgPosition={'center'}
      flexGrow={'1'}
      px={{ base: '4', sm: '8', md: '20', xl: '36' }}
      py={24}>
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        justify={{ base: 'center', xl: 'space-between' }}
        align={'center'}
        gap={{ base: '12', xl: '0' }}>
        <Flex direction={'column'} align={'center'}>
          <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }} color={'white'} fontWeight={'bold'}>Healthy Eating</Text>
          <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }} color={'white'}>Starts Here</Text>
        </Flex>
        <Flex direction={'column'} w={{ base: '100%', xl: '40%' }}>
          <Text color={'white'} fontSize={'sm'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ipsum, ex culpa iure blanditiis esse voluptates earum? Ex veniam beatae quam quod cum dolorem velit nihil iste expedita? Voluptatibus!
            Mollitia, iure assumenda, dolorum totam perspiciatis nulla quasi voluptatem doloremque est iusto, deserunt unde nostrum? Eveniet beatae nulla recusandae deleniti eos asperiores, nam aliquam animi culpa sapiente.
          </Text>
          <Button
            as={'a'}
            color={'white'}
            fontWeight={400}
            href={currentUser ? '/categories' : '/signup'}
            bg={'redwood.400'}
            fontSize={{ base: 'md', sm: 'lg' }}
            mt={3}
            _hover={{ bg: 'redwood.200' }}
            alignSelf={{ base: 'center', xl: 'start' }}>
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;