import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
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
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({ resolver: zodResolver(LoginSchema) });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitHandler = (data: LoginFormValues) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // user.getIdToken -> Gets JWT 
        console.log(user);
        setLoading(false)
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

        {loading ?
          <Button bg={'redwood.400'}>
            <Spinner color={'white'} />
          </Button> :
          <Button
            type={'submit'}
            bg={'redwood.400'}
            color={'white'}
            _hover={{ bg: 'redwood.200' }}>
            Login
          </Button>}
      </Stack>
    </form>
  );
}

export default LoginForm;