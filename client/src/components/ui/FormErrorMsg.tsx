import { Text } from '@chakra-ui/react';

type Props = {
  children?: string;
}

const FormErrorMsg: React.FC<Props> = ({ children }) => {
  return (
    <Text
      fontSize={'sm'}
      pos={'absolute'}
      color={'red.400'}>
      {children}
    </Text>
  );
}

export default FormErrorMsg;