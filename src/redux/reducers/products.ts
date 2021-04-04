/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: 'This is the COOLEST Cube Ever',
      description:
        'This cube will keep you busy the entire day and it is very fun to play with',
      price: 15.0,
      image:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
      title: 'Large Coffee Cup',
      description:
        'Get a big cup of coffee every morning before the day starts',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
  ],
};

export const products = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
