import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { updateFilters } from '../../store/actions/filterActions';
import { updateShippingFilters } from '../../store/actions/shippingFilterActions';
import Checkbox from '../Checkbox';

const availableSizes = [
  'XS',
  'S',
  'M',
  'ML',
  'L',
  'XL',
  'XXL',
];

class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
  } else {
      this.selectedCheckboxes.add(label);
    }

    // props has an attribute called updateFilters and it was passed with updateFilters action
    // from store in the last line in this file
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckbox = (label) => (
    <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
    />
  )

  createCheckboxes = () => (
    availableSizes.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}

// here "updateFilters" is not the real action, it's a key on prop
Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array,
}

// the state here is from Store, in the index.js, 
// the final state has a field for "filters", and it returns by filterReducer
// here it maps the filters.items from final state to the filters props on the component
const mapStateToProps = state => ({
  filters: state.filters.items,
})

// This updateFilters action is the action from store (filterActions.js)
// This connect the component with store
// Allows store to push new state to props and allows 
// component to dispatch action to store
export default connect(mapStateToProps, { updateFilters })(Filter);