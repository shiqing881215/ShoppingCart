import { UPDATE_FILTER } from './types';


export const updateFilters = (filters) => dispatch => {

  // payload is all the filters like - xs, xl
  // the filter logic here is OR - size can be xs or xl or ...
  dispatch({
    type: UPDATE_FILTER,
    payload: filters,
  });

}
