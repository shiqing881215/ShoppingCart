import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

// This is the home component which has a link to the real App component
class Home extends Component {
  render() {
    return (
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
      </div>
    )
  }
}

export default Home;