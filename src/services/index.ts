/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import api from './api';

export function getProducts(): Promise<any> {
  return api.get('products');
}

export function register(params: object): Promise<any> {
  return api.post('register', params);
}
