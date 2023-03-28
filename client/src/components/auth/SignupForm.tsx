import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack
} from "@chakra-ui/react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema, SignupFormValues } from "../../zod-schemas";
import FormErrorMsg from "../ui/FormErrorMsg";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({ resolver: zodResolver(SignupSchema) });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitHandler = async (data: SignupFormValues) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        setLoading(false);
        console.log(`${errorCode} - ${errorMsg}`);
      });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={6}>
        <HStack>
          <FormControl>
            <FormLabel htmlFor={'firstName'}>
              First Name
              <span style={{ color: 'red' }}> * </span>
            </FormLabel>
            <Input
              id={'firstName'}
              type={'text'}
              placeholder={'First Name'}
              {...register('firstName')} />
            {errors?.firstName && <FormErrorMsg>{errors.firstName.message}</FormErrorMsg>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor={'lastName'}>
              Last Name
              <span style={{ color: 'red' }}> * </span>
            </FormLabel>
            <Input
              id={'lastName'}
              type={'text'}
              placeholder={'Last Name'}
              {...register('lastName')} />
            {errors?.lastName && <FormErrorMsg>{errors.lastName.message}</FormErrorMsg>}
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel htmlFor={'email'}>
            Email Address
            <span style={{ color: 'red' }}> * </span>
          </FormLabel>
          <Input
            id={'email'}
            type={'email'}
            placeholder={'eg. myname@example.com'}
            {...register('email')} />
          {errors?.email && <FormErrorMsg>{errors.email.message}</FormErrorMsg>}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor={'password'}>
            Password
            <span style={{ color: 'red' }}> * </span>
          </FormLabel>
          <InputGroup>
            <Input
              id={'password'}
              type={showPassword ? 'text' : 'password'}
              placeholder={'Enter your desired password'}
              {...register('password')} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}>
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
              id={'confirmPassword'}
              type={showPassword ? 'text' : 'password'}
              placeholder={'Re-enter your password'}
              {...register('confirmPassword')} />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors?.confirmPassword && <FormErrorMsg>{errors.confirmPassword.message}</FormErrorMsg>}
        </FormControl>

        {loading ?
          <Button bg={'redwood.400'}>
            <Spinner color={'white'} />
          </Button> :
          <Button
            type={'submit'}
            bg={'redwood.400'}
            color={'white'}
            _hover={{ bg: 'redwood.200' }}>
            Sign up
          </Button>}
      </Stack>
    </form>
  );
}

export default SignupForm;