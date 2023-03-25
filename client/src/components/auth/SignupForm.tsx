import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack
} from "@chakra-ui/react";
import { useState } from 'react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form onSubmit={() => console.log('submit!')}>
      <Stack spacing={4}>
        <HStack>
          <FormControl isRequired>
            <FormLabel htmlFor={'firstName'}>First Name</FormLabel>
            <Input
              id={'firstName'}
              type={'text'} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor={'lastName'}>Last Name</FormLabel>
            <Input
              id={'lastName'}
              type={'text'} />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <FormLabel htmlFor={'email'}>Email Address</FormLabel>
          <Input
            id={'email'}
            type={'email'}
            placeholder={'eg. myname@example.com'} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor={'password'}>Password</FormLabel>
          <InputGroup>
            <Input
              id={'password'}
              type={showPassword ? 'text' : 'password'} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor={'confirmPassword'}>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              id={'confirmPassword'}
              type={showPassword ? 'text' : 'password'} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          type={'submit'}
          bg={'redwood.400'}
          color={'white'}
          _hover={{ bg: 'redwood.200' }}>
          Sign up
        </Button>
      </Stack>
    </form>
  );
}

export default SignupForm;