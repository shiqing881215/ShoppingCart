import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Shelf from '../components/shelf/Shelf';
import Footer from '../components/Footer';
import FloatCart from './../components/floatCart/FloatCart';

import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <img src={require(`../static/logo.png`)} />
            <img src={require(`../static/Hero_Pikachu_Holiday.jpg`)} />
            <Shelf />
          </main>
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
