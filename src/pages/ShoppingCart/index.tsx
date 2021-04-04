import React, { useEffect, useCallback, useState } from 'react';
import ProductsList from '../../components/ProductsList';
import ProductsCart from '../../components/ProductsCart';
import { getProducts } from '../../services';

import './ShoppingCart.module.scss';

const ShoppingCart: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState();

  const fetchProducts = useCallback(async () => {
    const response = await getProducts();
    return setProducts(response.data);
  }, []);

  useEffect(() => {
    // fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="container">
      <ProductsList />
      <ProductsCart />
    </main>
  );
};

export default ShoppingCart;
