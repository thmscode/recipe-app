import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AuthContextProvider } from './contexts/auth-context';
import './index.css';

const theme = extendTheme({
  colors: {
    redwood: {
      200: '#BB4430',
      400: '#A23E48'
    },
    xanthous: {
      200: '#FFE066',
      400: '#FCBF49'
    },
    offwhite: {
      400: '#F5F5F5',
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthContextProvider>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </AuthContextProvider>
);