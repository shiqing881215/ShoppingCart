import { UPDATE_SHIPPING_FILTER } from '../actions/types';


const initialState = {
  item: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SHIPPING_FILTER:
      //console.log(state);
      return {
        ...state,
        items: action.payload   // payload is true or false
      };
    default:
      return state;
  }
}
