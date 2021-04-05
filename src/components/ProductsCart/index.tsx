import React from 'react';
// import { useSelector } from 'react-redux';
import List from '../List';

import './ProductsCart.module.scss';

const ProductsCart: React.FC = () => {
  // const cartProducts = useSelector((state: any) => state.cart.cartItems);

  return (
    <div className="shopping-cart-container">
      <p className="title">Carrinho</p>
      <List />
    </div>
  );
};

export default ProductsCart;
