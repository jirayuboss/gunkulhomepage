import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import Home from './components/Home';
import Product from './components/Product';
import Navigation from './components/Navigation';
import Error from './components/Error';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: []
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={Product} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;