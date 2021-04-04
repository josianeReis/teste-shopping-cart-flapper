import React from 'react';
import ProductItem from '../ProductItem';

import './ProductList.module.scss';

const ProductList: React.FC = () => {
  const products: any = [
    {
      id: 1,
      title: 'This is the COOLEST Cube Ever',
      description:
        'This cube will keep you busy the entire day and it is very fun to play with',
      price: 15.0,
      img:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
      title: 'Large Coffee Cup',
      description:
        'Get a big cup of coffee every morning before the day starts',
      price: 20.0,
      img:
        'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div className="productListContainer">
      {products.map((item: any) => {
        return <ProductItem key={`product-id-${item.id}`} product={item} />;
      })}
    </div>
  );
};

export default ProductList;
