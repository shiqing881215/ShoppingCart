import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

// const productsAPI = "https://react-shopping-cart-67954.firebaseio.com/products.json";
const productsAPI = "http://localhost:8001/api/products";

const compare = {
  'lowestprice': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

// This is all the fetch products logic happnes with filter and sort
// I'm not sure this is the best place for this logic to happen
// Maybe it should be, reducer is just to combine and construct the final state
export const fetchProducts = (filters, shippingFilter, sortBy, callback) => dispatch => {
  debugger;
  axios.get(productsAPI)
    .then(res => {
      let { products } = res.data;

      // whether filters contains this product availableSizes
      if(!!filters && filters.length > 0){
        products = products.filter(  // return all the elements in the array meets the find requirements
          p => filters.find(   // return the first element in the array meet requirement. p is a product inside of products
            f => p.availableSizes.find( size => size === f ) // f is each filter inside of filters
          ) 
        )
      }

      debugger;
      // Free shipping filter
      if (!!shippingFilter && shippingFilter) {
        products = products.filter(
          p => p.isFreeShipping
        )  
      }
      
      console.log(shippingFilter);


      if(!!sortBy){
        products = products.sort(compare[sortBy]);
      }

      if(!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Could not fetch products. Try again later.');
    });
}