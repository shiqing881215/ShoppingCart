import { UPDATE_SHIPPING_FILTER } from './types';


export const updateShippingFilters = (filters) => dispatch => {

  // payload is true or false to indicate whether free shipping
  dispatch({
    type: UPDATE_SHIPPING_FILTER,
    payload: filters,
  });

}
