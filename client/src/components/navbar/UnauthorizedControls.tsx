import { Button, HStack } from "@chakra-ui/react";

const UnauthorizedControls = () => {
  return (
    <>
      <HStack hideBelow={'md'} spacing={6}>
        <Button
          as={'a'}
          color={'black'}
          fontWeight={500}
          variant={'link'}
          href={'/login'}
          fontSize={'lg'}
        >
          Log In
        </Button>
        <Button
          as={'a'}
          color={'white'}
          fontWeight={500}
          href={'/signup'}
          bg={'redwood.400'}
          fontSize={'lg'}
          _hover={{ bg: 'redwood.200' }}
        >
          Sign Up
        </Button>
      </HStack>
    </>
  );
}

export default UnauthorizedControls;