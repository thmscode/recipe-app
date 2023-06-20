import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";
import { useAuth } from "../contexts/auth-context";

const Signup = () => {
  const { currentUser } = useAuth();

  if (currentUser) return <Navigate to='/' />

  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        grow={1}
      >
        <Box
          rounded={'lg'}
          shadow={{ md: 'md', lg: 'xl' }}
          p={{ base: 6, md: 12 }}
          w={'lg'}
        >
          <Text fontSize={'2xl'} fontWeight={'600'} align={'center'} mb={4}>Sign Up</Text>
          <SignupForm />
        </Box>
      </Flex>
    </>
  );
}

export default Signup;