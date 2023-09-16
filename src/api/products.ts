import { client } from '../utils/fetchClient';
import { Product } from '../types/Product';

export const getProducts = () => {
  return client.get<Product[]>('/products');
};

export const createProduct = (data: Omit<Product, 'id'>) => {
  return client.post<Product>('/products', data);
};
