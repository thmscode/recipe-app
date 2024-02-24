import { Text } from '@chakra-ui/react';

const FormErrorMsg: React.FC<{ children?: string }> = ({ children }) => {
  return (
    <>
      <Text
        fontSize={{ base: 'xs', sm: 'sm' }}
        pos={'absolute'}
        color={'red.400'}
      >
        {children}
      </Text>
    </>
  );
}

export default FormErrorMsg;