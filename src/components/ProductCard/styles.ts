import styled from 'styled-components';

export const Card = styled.article`
  flex: 0 0 305px;
  min-width: 0;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  transition: transform ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }
`;

export const Body = styled.button`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const Photo = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.35s ease;
  }

  ${Body}:hover & img {
    transform: scale(1.04);
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  height: 44px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.muted};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const OldPrice = styled.s`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Price = styled.strong`
  margin-top: 2px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Installment = styled.span`
  margin-top: 2px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Shipping = styled.span`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BuyWrapper = styled.div`
  margin-top: 14px;

  button {
    height: 44px;
    font-size: 13px;
    letter-spacing: 0.4px;
  }
`;
