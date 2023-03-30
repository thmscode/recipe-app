import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginFormValues } from "../../zod-schemas";
import FormErrorMsg from "../ui/FormErrorMsg";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState<string>('');
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({ resolver: zodResolver(LoginSchema) });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitHandler = (data: LoginFormValues) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => navigate('/'))
      .catch(() => setError('Failed to log in.'));
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={6}>
        <FormControl>
          <FormLabel htmlFor={'email'}>Email</FormLabel>
          <Input
            id={'email'}
            type={'email'}
            {...register('email')} />
          {errors?.email && <FormErrorMsg>{errors.email.message}</FormErrorMsg>}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={'password'}>Password</FormLabel>
          <Input
            id={'password'}
            type={'password'}
            {...register('password')} />
          {errors?.password && <FormErrorMsg>{errors.password.message}</FormErrorMsg>}
        </FormControl>

        <Box>
          <Button
            disabled={loading}
            type={'submit'}
            bg={'redwood.400'}
            w={'100%'}
            color={'white'}
            _hover={{ bg: 'redwood.200' }}>
            {loading ? <Spinner color={'white'} /> : 'Login'}
          </Button>
          {error && <Text mt={3} fontSize={'md'} align={'center'} color={'red.500'} fontWeight={500}>{error}</Text>}
        </Box>
      </Stack>
    </form>
  );
}

export default LoginForm;