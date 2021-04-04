/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';

import './ProductItem.scss';

type Props = {
  product: any;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, description, img, price }: any = product;
  console.log('productItem', product);

  return (
    <article id="card">
      <img className="card-img" src={img} alt={title} />

      <div className="card-details">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">R$ {price}</p>
      </div>

      <div className="button">
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
