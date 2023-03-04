import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'

const Root = () => {
  return (
    <Flex direction={'column'} minH={'100vh'}>
      <Navbar />
      <Outlet />
    </Flex>
  );
}

export default Root;