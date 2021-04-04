import React from 'react';

import './ProductItem.module.scss';

type Props = {
  product: any;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const { title, description, img, price }: any = product;

  return (
    <article className="productContainer">
      <img className="cardImage" src={img} alt={title} width="20%" />
      <div className="productContent">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </article>
  );
};

export default ProductItem;
