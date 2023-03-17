import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer';

const Root = () => {
  return (
    <Flex direction={'column'} minH={'100vh'}>
      <Navbar />
      <Outlet />
      <Footer />
    </Flex>
  );
}

export default Root;