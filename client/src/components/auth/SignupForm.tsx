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
import { useForm } from "react-hook-form";
import FormErrorMsg from "../ui/FormErrorMsg";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Stack spacing={6}>
        <HStack>
          <FormControl isRequired>
            <FormLabel htmlFor={'firstName'}>First Name</FormLabel>
            <Input
              id={'firstName'}
              type={'text'}
              {...register('firstName', {
                required: true,
                pattern: /^[A-Za-z\-]+$/i,
                maxLength: 20
              })} />
            {errors.firstName?.type === 'maxLength' && <FormErrorMsg>Cannot exceed 20 characters</FormErrorMsg>}
            {errors.firstName?.type === 'pattern' && <FormErrorMsg>Alphabetical characters only</FormErrorMsg>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor={'lastName'}>Last Name</FormLabel>
            <Input
              id={'lastName'}
              type={'text'}
              {...register('lastName', {
                required: true,
                pattern: /^[A-Za-z\-]+$/i,
                maxLength: 20
              })} />
            {errors.lastName?.type === 'maxLength' && <FormErrorMsg>Cannot exceed 20 characters</FormErrorMsg>}
            {errors.lastName?.type === 'pattern' && <FormErrorMsg>Alphabetical characters only</FormErrorMsg>}
          </FormControl>
        </HStack>

        <FormControl isRequired>
          <FormLabel htmlFor={'email'}>Email Address</FormLabel>
          <Input
            id={'email'}
            type={'email'}
            placeholder={'eg. myname@example.com'}
            {...register('email', { required: true, minLength: 8 })} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor={'password'}>Password</FormLabel>
          <InputGroup>
            <Input
              id={'password'}
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true, minLength: 8 })} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password?.type === 'minLength' && <FormErrorMsg>Must be longer than 8 characters</FormErrorMsg>}
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor={'confirmPassword'}>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              id={'confirmPassword'}
              type={showPassword ? 'text' : 'password'}
              {...register('confirmPassword', { required: true, minLength: 8 })} />
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