import { formatCurrency } from './formatCurrency';
import { getInstallment, getListPrice } from './pricing';

describe('formatCurrency', () => {
  it('formata valores em reais', () => {
    expect(formatCurrency(1499.9)).toBe('R$ 1.499,90');
    expect(formatCurrency(520)).toBe('R$ 520,00');
  });
});

describe('pricing', () => {
  it('calcula preço de lista e parcela a partir do preço do JSON', () => {
    expect(getListPrice(100)).toBe(107);
    expect(getInstallment(15000)).toBe(7500);
  });
});
