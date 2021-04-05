/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  decProductQtd,
  incProductQtd,
  removeFromCart,
} from '../../redux/actions/cart';

import ProductQuantity from '../ProductQuantity';
import './List.scss';

const columns: any = [
  {
    id: 'title',
    label: 'Produto',
  },
  {
    id: 'price',
    label: 'Valor (P x Qtd)',
    render: (index: any, column: any, product: any, action: any) => {
      return (
        <div
          key={`product-col-${column.id}`}
          className={`col col-${index}`}
          data-label={column.label}
        >
          {(product[column.id] * product.quantity).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      );
    },
  },
  {
    id: 'quantity',
    label: 'Qtd',
    render: (index: any, column: any, product: any, action: any) => {
      return (
        <ProductQuantity
          value={product.quantity}
          inc={() => action(incProductQtd(product))}
          dec={() => action(decProductQtd(product))}
        />
      );
    },
  },
  {
    id: 'exclude',
    label: 'Excluir',
    render: (index: any, column: any, product: any, action: any) => {
      return (
        <RiDeleteBin6Line
          onClick={() => action(removeFromCart(product))}
          className="iconGroup"
          size={24}
          color="rgba(204, 162, 38)"
        />
      );
    },
  },
];

const List: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart.cartItems);

  const totalCart = products
    .reduce((a: any, c: any) => a + c.price * c.quantity, 0)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  console.log('products products', products);

  return products.length ? (
    <div id="table-container">
      <ul className="responsive-table">
        <li className="table-header">
          {columns.map((el: any, index: any) => {
            return (
              <div key={`col-${el.id}`} className={`col col-${index}`}>
                {el.label}
              </div>
            );
          })}
        </li>
        {products.map((item: Record<string, any>) => {
          return (
            <li key={`product-${item.id}`} className="table-row">
              {columns.map((column: any, index: any) => {
                return (
                  <div
                    key={`product-col-${column.id}`}
                    className={`col col-${index}`}
                    data-label={column.label}
                  >
                    {!column.render
                      ? item[column.id]
                      : column.render(index, column, item, (fn: any) =>
                          dispatch(fn)
                        )}
                  </div>
                );
              })}
            </li>
          );
        })}
        <li className="table-footer">
          <div className="shopping-resume">
            <div className="footer-label">Total</div>
            <div className="shopping-total-value">{totalCart || 0}</div>
          </div>
          <div className="button-finish">
            <button>Finalizar Compra</button>
          </div>
        </li>
      </ul>
    </div>
  ) : (
    <p>Carrinho vazio</p>
  );
};

export default List;
