import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      grow={1}>
      <Box
        rounded={'lg'}
        shadow={'xl'}
        p={12}
        w={'lg'}>
        <Text fontSize={'2xl'} fontWeight={'600'} align={'center'} mb={4}>Login</Text>
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default Login;