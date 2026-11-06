import { Product } from '../types/product';
import { request } from './api';

export const getProducts = () => request<Product[]>('/products');
