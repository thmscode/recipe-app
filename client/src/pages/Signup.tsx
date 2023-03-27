import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
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
        <Text fontSize={'2xl'} fontWeight={'600'} align={'center'} mb={4}>Sign Up</Text>
        <SignupForm />
      </Box>
    </Flex>
  );
}

export default Signup;