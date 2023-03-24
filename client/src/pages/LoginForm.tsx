import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      grow={1}>
      <Box
        rounded={'lg'}
        shadow={'xl'}
        p={12}
        w={'md'}>
        <Stack spacing={6}>
          <Text fontSize={'2xl'} fontWeight={'600'} align={'center'}>Login</Text>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type={'email'} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type={'password'} />
          </FormControl>
          <Button
            type={'submit'}
            bg={'redwood.400'}
            color={'white'}
            _hover={{ bg: 'redwood.200' }}>
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default LoginForm;