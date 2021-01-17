import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Home from './components/Home';
import Product from './components/Product';
import Navigation from './components/Navigation';
import Error from './components/Error';

global.cart = [];
global.total = 0;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} exact />
            <Route path="/product/:id" exact component={Product} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;