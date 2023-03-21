import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from "@chakra-ui/react";
import { useState } from 'react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        <Stack spacing={4}>
          <Text fontSize={'2xl'} fontWeight={'600'} align={'center'}>Sign Up</Text>
          <HStack>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type={'text'}></Input>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type={'text'}></Input>
            </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type={'email'} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            bg={'redwood.400'}
            color={'white'}
            _hover={{ bg: 'redwood.200' }}>
            Sign up
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default SignupForm;