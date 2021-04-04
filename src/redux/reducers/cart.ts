/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as actions from '../types';

const INITIAL_STATE = {
  cartItems: [],
};

export const cart = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const isInCart = state.cartItems.find(
        (item: any) => item.id === action.payload.id
      );
      const products = isInCart
        ? state.cartItems.map((item: any) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cartItems, { ...action.payload, quantity: 1 }];
      return { ...state, cartItems: products };
    }

    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
