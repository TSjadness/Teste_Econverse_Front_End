import { Minus, Plus } from '../Icons';
import { QuantitySelectorProps } from './type';
import { Wrapper } from './styles';

const QuantitySelector = ({ value, min = 1, max = 99, onChange }: QuantitySelectorProps) => (
  <Wrapper role="group" aria-label="Quantidade">
    <button type="button" aria-label="Diminuir quantidade" disabled={value <= min} onClick={() => onChange(value - 1)}>
      <Minus />
    </button>
    <output aria-live="polite">{String(value).padStart(2, '0')}</output>
    <button type="button" aria-label="Aumentar quantidade" disabled={value >= max} onClick={() => onChange(value + 1)}>
      <Plus />
    </button>
  </Wrapper>
);

export default QuantitySelector;
