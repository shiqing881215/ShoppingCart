import { combineReducers } from 'redux';
import productReducer from './productReducer';
import floatCartReducer from './floatCartReducer';
import updateCartReducer from './updateCartReducer';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import shippingFilterReducer from './shippingFilterReducer';

// You can think this as the FINAL STATE of store
// it has 5 attributes here
// each of them is returned by a saparate reducer
// all of these 5 consists of the final state
export default combineReducers({
  products: productReducer,
  cartProducts: floatCartReducer,
  cartTotals: updateCartReducer,
  filters: filterReducer,
  sort: sortReducer,
  shippingFilter: shippingFilterReducer,
});