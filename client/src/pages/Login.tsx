import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { useAuth } from "../contexts/auth-context";

const Login = () => {
  const { currentUser } = useAuth();

  if (currentUser) return <Navigate to='/' />

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      grow={1}>
      <Box
        rounded={'lg'}
        shadow={{ md: 'md', lg: 'xl' }}
        p={{ base: '6', md: '12' }}
        w={'lg'}>
        <Text fontSize={'2xl'} fontWeight={'600'} align={'center'} mb={4}>Login</Text>
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default Login;