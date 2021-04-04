import { combineReducers } from 'redux';

import { products } from './products';
import { cart } from './cart';
import { order } from './order';

const appReducers = combineReducers({
  products,
  cart,
  order,
});

export default appReducers;
