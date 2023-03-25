import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <form onSubmit={() => console.log('submit!')}>
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
    </form>
  );
}

export default LoginForm;