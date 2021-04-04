import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';

import './ProductsList.scss';

const ProductsList: React.FC = () => {
  const products = useSelector((state: any) => state.products.products);

  return (
    <div className="products-list-container">
      {products.map((item: any) => {
        return <ProductItem key={`product-id-${item.id}`} product={item} />;
      })}
    </div>
  );
};

export default ProductsList;
