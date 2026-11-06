import styled from 'styled-components';
import { media } from '../../styles/media';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.container};
  margin: 0 auto;
  min-height: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 119px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  ${media.tablet} {
    gap: 12px 40px;
    padding: 6px 0;
  }

  ${media.mobile} {
    gap: 4px 20px;
  }
`;

export const Item = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.muted};

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    font-size: 10px;
    gap: 6px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;
