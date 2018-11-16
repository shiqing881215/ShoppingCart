import React from 'react';
import PropTypes from 'prop-types';

import Sort from './Sort';
import Clearfix from '../Clearfix';


const ShelfHeader = (props) => {

  return (
    <div className="shelf-container-header">
      
      <div className="shelf-container-header-title">
        <h1>POKÉ PLUSH</h1>
      </div>
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <Sort />
      <Clearfix />
    </div>
  );
}

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired,
}

export default ShelfHeader;