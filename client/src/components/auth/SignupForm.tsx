import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema, SignupFormValues } from "../../zod-schemas";
import FormErrorMsg from "../ui/FormErrorMsg";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({ resolver: zodResolver(SignupSchema) });
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = async (data: SignupFormValues) => {
    setError('');
    setLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => userCredentials.user.getIdToken())
      .then((token) => {
        fetch('/api/user/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
          })
        })
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') setError('Email already in use.')
        else setError('Failed to create an account. Please try again later.')
      });
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing={6}>
          <HStack>
            <FormControl>
              <FormLabel htmlFor={'firstName'}>
                First Name
                <span style={{ color: 'red' }}> * </span>
              </FormLabel>
              <Input
                fontSize={{ base: 'sm', sm: 'md' }}
                id={'firstName'}
                type={'text'}
                placeholder={'First Name'}
                {...register('firstName')}
              />
              {errors?.firstName && <FormErrorMsg>{errors.firstName.message}</FormErrorMsg>}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor={'lastName'}>
                Last Name
                <span style={{ color: 'red' }}> * </span>
              </FormLabel>
              <Input
                fontSize={{ base: 'sm', sm: 'md' }}
                id={'lastName'}
                type={'text'}
                placeholder={'Last Name'}
                {...register('lastName')}
              />
              {errors?.lastName && <FormErrorMsg>{errors.lastName.message}</FormErrorMsg>}
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel htmlFor={'email'}>
              Email Address
              <span style={{ color: 'red' }}> * </span>
            </FormLabel>
            <Input
              fontSize={{ base: 'sm', sm: 'md' }}
              id={'email'}
              type={'email'}
              placeholder={'eg. myname@example.com'}
              {...register('email')}
            />
            {errors?.email && <FormErrorMsg>{errors.email.message}</FormErrorMsg>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor={'password'}>
              Password
              <span style={{ color: 'red' }}> * </span>
            </FormLabel>
            <InputGroup>
              <Input
                fontSize={{ base: 'sm', sm: 'md' }}
                id={'password'}
                type={showPassword ? 'text' : 'password'}
                placeholder={'Enter your desired password'}
                {...register('password')}
              />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors?.password && <FormErrorMsg>{errors.password.message}</FormErrorMsg>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor={'confirmPassword'}>
              Confirm Password
              <span style={{ color: 'red' }}> * </span>
            </FormLabel>
            <InputGroup>
              <Input
                fontSize={{ base: 'sm', sm: 'md' }}
                id={'confirmPassword'}
                type={showPassword ? 'text' : 'password'}
                placeholder={'Re-enter your password'}
                {...register('confirmPassword')}
              />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors?.confirmPassword && <FormErrorMsg>{errors.confirmPassword.message}</FormErrorMsg>}
          </FormControl>

          <Box>
            <Button
              fontWeight={400}
              disabled={loading}
              type={'submit'}
              bg={'redwood.400'}
              w={'100%'}
              color={'white'}
              _hover={{ bg: 'redwood.200' }}
            >
              {loading ? <Spinner color={'white'} /> : 'Sign Up'}
            </Button>
            {error && <Text mt={3} fontSize={'md'} align={'center'} color={'red.500'} fontWeight={500}>{error}</Text>}
          </Box>
        </Stack>
      </form>
    </>
  );
}

export default SignupForm;