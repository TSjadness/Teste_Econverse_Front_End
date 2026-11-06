import { Product } from '../../types/product';

export interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}
