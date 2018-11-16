import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Shelf from '../components/shelf/Shelf';
import Footer from '../components/Footer';
import FloatCart from './../components/floatCart/FloatCart';

import store from '../store';

/*
 * This is the original home page. 
 * But as we introduce AppContainer / Home for routing
 * The structure is AppContainer -> Home -> App
 * We keep the component name as "App" to avoid minimum change
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main>
            <a href="/">
              <img src={require(`../static/logo.png`)} />
            </a>
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
