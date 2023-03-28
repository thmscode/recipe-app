import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginFormValues } from "../../zod-schemas";
import FormErrorMsg from "../ui/FormErrorMsg";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({ resolver: zodResolver(LoginSchema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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