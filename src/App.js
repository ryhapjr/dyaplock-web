import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductLinks from './Pages/links/products';
import BusinessLinks from './Pages/links/business';
import HomePage from './Pages/Home';
import LostPage from './Pages/LostPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route exact path="/products/:id" component={ProductLinks} />
            <Route exact path="/biz/:id" component={BusinessLinks} />
            <Route path="*" component={LostPage} />
          </Switch>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
