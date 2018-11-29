import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { updateShippingFilters } from '../../store/actions/shippingFilterActions';
import Checkbox from '../Checkbox';

class ShippingFilter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    debugger;
    var isChecked = document.getElementById("Free").checked;

    // call the updateShippingFilters action to pass the new free shipping boolean
    this.props.updateShippingFilters(isChecked);
  }

  render() {
    return (
      <div className="filters">
        <h4 className="title">Free Shipping</h4>
          <Checkbox
              classes="filters-available-size"
              label="Free"
              handleCheckboxChange={this.toggleCheckbox}
              key="FreeShipping"
          />
      </div>
    );
  }
}

// here "updateShippingFilters" is not the real action, it's a key on prop
ShippingFilter.propTypes = {
  updateShippingFilters: PropTypes.func.isRequired,
  shippingFilter: PropTypes.bool,
}

// the state here is from Store, in the index.js, 
// the final state has a field for "filters", and it returns by filterReducer
// here it maps the filters.items from final state to the filters props on the component
const mapStateToProps = state => ({
  shippingFilter: state.shippingFilter.items,
})

// This updateFilters action is the action from store (filterActions.js)
// This connect the component with store
// Allows store to push new state to props and allows 
// component to dispatch action to store
export default connect(mapStateToProps, { updateShippingFilters })(ShippingFilter);