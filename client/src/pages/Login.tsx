import { Box, Flex } from "@chakra-ui/react";
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
        w={'md'}>
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default Login;