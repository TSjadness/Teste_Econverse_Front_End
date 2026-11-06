import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Product } from '../types/product';

interface ProductModalContextData {
  product: Product | null;
  openProduct: (product: Product) => void;
  closeProduct: () => void;
}

const ProductModalContext = createContext<ProductModalContextData | undefined>(undefined);

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);

  const openProduct = useCallback((selected: Product) => setProduct(selected), []);
  const closeProduct = useCallback(() => setProduct(null), []);

  const value = useMemo(
    () => ({ product, openProduct, closeProduct }),
    [product, openProduct, closeProduct],
  );

  return <ProductModalContext.Provider value={value}>{children}</ProductModalContext.Provider>;
}

export function useProductModal() {
  const context = useContext(ProductModalContext);

  if (!context) {
    throw new Error('useProductModal deve ser usado dentro de ProductModalProvider');
  }

  return context;
}
