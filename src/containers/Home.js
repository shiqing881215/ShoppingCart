import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FloatCart from './../components/floatCart/FloatCart';
import './Home.css';

// This is the home component which has a link to the real App component
class Home extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <img src={require(`../static/logo.png`)} className="logo"/>
        <div className="topImage">
            <a href="/pokePlush" >
                <img src={require(`../static/Hero_Holiday_Extravaganza.jpg`)} />
            </a>
        </div>
        <div className="bottomImage">
            <img src={require(`../static/NEWS_Fluffy_Eevee.jpg`)} />
            <img src={require(`../static/NEWS_Pokeball_Plush.jpg`)} />
            <img src={require(`../static/NEWS_Holiday_Double_Tile.jpg`)} />
        </div>
        <div className="topImage">
            <img src={require(`../static/All-Pokemon-Desktop-Wallpaper.jpg`)} />
        </div>
        <Footer />
        <FloatCart />
      </div>
      </Provider>
    )
  }
}

export default Home;