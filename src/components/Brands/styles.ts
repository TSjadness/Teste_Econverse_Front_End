import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: ${({ theme }) => theme.container};
  margin: 0 auto;
`;

export const List = styled.ul`
  margin-top: 43px;
  display: flex;
  justify-content: space-between;

  ${media.tablet} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    margin-top: 32px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;

  ${media.mobile} {
    width: 140px;
    height: 140px;

    img {
      width: 84px;
    }
  }
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.12);
  transition: transform ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};

  img {
    width: 117px;
    height: auto;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
  }
`;
