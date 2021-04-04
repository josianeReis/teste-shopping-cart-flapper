/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const cart = (
  state = { cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]') },
  action: any
): any => {
  switch (action.type) {
    default:
      return state;
  }
};
