const LIST_PRICE_FACTOR = 1.07;
const INSTALLMENTS = 2;

export const getListPrice = (price: number) =>
  Math.round(price * LIST_PRICE_FACTOR * 100) / 100;

export const getInstallment = (price: number) =>
  Math.round((price / INSTALLMENTS) * 100) / 100;

export const INSTALLMENT_COUNT = INSTALLMENTS;
