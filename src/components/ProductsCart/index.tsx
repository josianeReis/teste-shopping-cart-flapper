import React from 'react';
import { useSelector } from 'react-redux';

import './ProductsCart.module.scss';

// const ProductsList: React.FC = () => {
//   const products = useSelector((state: any) => state.products.products);

const ProductsCart: React.FC = () => {
  const cartProducts = useSelector((state: any) => state.cart.cartItems);

  return (
    <>
      {console.log('cartProducts', cartProducts)}
      <div>carrinho de produtos</div>
    </>
  );
};

export default ProductsCart;
