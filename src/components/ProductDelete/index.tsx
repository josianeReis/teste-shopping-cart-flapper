import React from 'react';

import { RiDeleteBin6Line } from 'react-icons/ri';

import './ProductDelete.scss';

const ProductDelete: React.FC = () => {
  return (
    <div className="delete-option-container">
      <button>
        <RiDeleteBin6Line
          className="iconGroup"
          size={24}
          color="rgba(204, 162, 38)"
        />
      </button>
    </div>
  );
};

export default ProductDelete;
