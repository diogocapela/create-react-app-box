import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from './redux/configureStore';

import globalStyles from './theme/styles';

import Home from 'pages/home';
import About from 'pages/about';

import Navbar from 'components/navbar';
import Footer from 'components/footer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
