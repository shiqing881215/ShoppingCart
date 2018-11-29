import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
import { addProduct } from '../../store/actions/floatCartActions';

import Product from './Product';
import Filter from './Filter';
import ShippingFilter from './ShippingFilter';
import ShelfHeader from './ShelfHeader';
import Clearfix from '../Clearfix';
import Spinner from '../Spinner';


class Shelf extends Component {
  state  = {
    loading: false,
  }

  componentWillMount() {
    const { filters, shippingFilter, sort } = this.props;

    this.handleFetchProducts(filters, shippingFilter, sort);
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, shippingFilter: nextShippingFilter, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, undefined, nextSort);
    }

    if (nextShippingFilter !== this.props.shippingFilter) {
      this.handleFetchProducts(undefined, nextShippingFilter, undefined);
    }
  }

  handleFetchProducts = (filters = this.props.filters, shippingFilter = this.props.shippingFilter, sort = this.props.sort) => {
    debugger;
    this.setState({ loading: true });
    this.props.fetchProducts(filters, shippingFilter, sort, () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { products } = this.props;
    
    const p = products.map(p => {
      return (
        <Product
          product={p}
          addProduct={this.props.addProduct}
          key={p.id}
        />
      );
    });

    return (
      <React.Fragment>
        {this.state.loading &&
          <Spinner />
        }
        <div className="content-container">
          <div className="filter-group">
            <Filter />
            <ShippingFilter />
          </div>
          <div className="shelf-container">
            <ShelfHeader productsLength={products.length}/>
            {p}
            <Clearfix />
          </div>
        </div>
        <Clearfix />
      </React.Fragment>
    )

  }
}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  filters: PropTypes.array,
  shippingFilter: PropTypes.bool,
  sort: PropTypes.string,
}

const mapStateToProps = state => ({
  products: state.products.items,
  filters: state.filters.items,
  shippingFilter: state.shippingFilter.items,
  sort: state.sort.item,
})

export default connect(mapStateToProps, { fetchProducts, addProduct })(Shelf);
