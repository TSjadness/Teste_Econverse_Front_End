import { SyntheticEvent, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import fallback from '../../assets/images/product-fallback.png';
import Button from '../Button';
import QuantitySelector from '../QuantitySelector';
import { Close } from '../Icons';
import { useProductModal } from '../../context/ProductModalContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { Actions, CloseButton, Description, Details, Dialog, Info, Media, Overlay, Price, Title } from './styles';

const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallback;
};

const ProductModal = () => {
  const { product, closeProduct } = useProductModal();
  const [quantity, setQuantity] = useState(1);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return undefined;

    setQuantity(1);
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeProduct();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [product, closeProduct]);

  if (!product) return null;

  return createPortal(
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && closeProduct()}>
      <Dialog role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <CloseButton ref={closeRef} type="button" aria-label="Fechar" onClick={closeProduct}>
          <Close />
        </CloseButton>
        <Media>
          <img src={product.photo} alt={product.productName} onError={handleImageError} />
        </Media>
        <Info>
          <Title id={titleId}>{product.productName}</Title>
          <Price>{formatCurrency(product.price)}</Price>
          <Description>{product.descriptionShort}</Description>
          <Details href="#produtos" onClick={closeProduct}>
            Veja mais detalhes do produto &gt;
          </Details>
          <Actions>
            <QuantitySelector value={quantity} onChange={setQuantity} />
            <Button className="buy" variant="accent" onClick={closeProduct}>
              Comprar
            </Button>
          </Actions>
        </Info>
      </Dialog>
    </Overlay>,
    document.body,
  );
};

export default ProductModal;
