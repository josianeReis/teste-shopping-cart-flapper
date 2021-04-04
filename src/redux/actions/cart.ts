/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as actions from '../types';

export const addToCart = (payload: any) => {
  return {
    type: actions.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: any) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload,
  };
};

export const incProductQtd = (payload: any) => {
  return {
    type: actions.INC_PRODUCT_QTD,
    payload,
  };
};

export const decProductQtd = (payload: any) => {
  return {
    type: actions.DEC_PRODUCT_QTD,
    payload,
  };
};
