import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {

  render() {
    return (
      <div className='nav'>
          <NavLink exact activeClassName='active' to='/'>HOME</NavLink>
          <NavLink activeClassName='active' to='/pokePlush'>PLUSH</NavLink>
          <NavLink exact activeClassName='active' to='/'>FIGURES & PINS</NavLink>
          <NavLink exact activeClassName='active' to='/'>TRADING CARD GAME</NavLink>
          <NavLink exact activeClassName='active' to='/'>CLOTHING</NavLink>
          <NavLink exact activeClassName='active' to='/'>ALL CATOGERIES</NavLink>
      </div>
    )
  }
}

export default Nav;