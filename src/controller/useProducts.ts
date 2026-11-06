import { useEffect, useState } from 'react';
import { getProducts } from '../service/productService';
import { Product } from '../types/product';

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(): State {
  const [state, setState] = useState<State>({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    getProducts()
      .then((products) => {
        if (active) setState({ products, loading: false, error: null });
      })
      .catch((error: Error) => {
        if (active) setState({ products: [], loading: false, error: error.message });
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
}
