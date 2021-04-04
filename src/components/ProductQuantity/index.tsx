import React from 'react';

import './ProductQuantity.scss';

type Props = {
  value: string;
  inc: any;
  dec: any;
};

const ProductQuantity: React.FC<Props> = ({ value, inc, dec }: Props) => {
  return (
    <div className="qtd-container">
      <button onClick={dec}>-</button>
      {value}
      <button onClick={inc}>+</button>
    </div>
  );
};

export default ProductQuantity;
