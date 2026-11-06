import { SyntheticEvent } from 'react';
import fallback from '../../assets/images/product-fallback.png';
import Button from '../Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { getInstallment, getListPrice, INSTALLMENT_COUNT } from '../../utils/pricing';
import { ProductCardProps } from './type';
import { Body, BuyWrapper, Card, Description, Installment, OldPrice, Photo, Price, Shipping } from './styles';

const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallback;
};

const ProductCard = ({ product, onSelect }: ProductCardProps) => (
  <Card>
    <Body type="button" onClick={() => onSelect(product)} aria-label={`Ver detalhes de ${product.productName}`}>
      <Photo>
        <img src={product.photo} alt={product.productName} loading="lazy" onError={handleImageError} />
      </Photo>
      <Description>{product.descriptionShort}</Description>
      <OldPrice>{formatCurrency(getListPrice(product.price))}</OldPrice>
      <Price>{formatCurrency(product.price)}</Price>
      <Installment>
        ou {INSTALLMENT_COUNT}x de {formatCurrency(getInstallment(product.price))} sem juros
      </Installment>
      <Shipping>Frete grátis</Shipping>
    </Body>
    <BuyWrapper>
      <Button fullWidth onClick={() => onSelect(product)}>
        Comprar
      </Button>
    </BuyWrapper>
  </Card>
);

export default ProductCard;
