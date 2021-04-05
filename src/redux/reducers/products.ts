/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: 'Nome do produto 1',
      description:
        'is simply dummy text of the printing and typesetting industry',
      price: 25.0,
      img:
        'https://images.unsplash.com/photo-1598134025798-bfb6540ca748?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    },
    {
      id: 2,
      title: 'Nome do produto 2',
      description:
        'Lorem Ipsum is not simply random text. It has roots in a piece of',
      price: 7.0,
      img:
        'https://images.unsplash.com/photo-1517242027094-631f8c218a0f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',
    },
  ],
};

export const products = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
