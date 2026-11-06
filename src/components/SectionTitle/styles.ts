import styled from 'styled-components';
import { media } from '../../styles/media';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.container};
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 69px;
    right: 69px;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  ${media.tablet} {
    &::before {
      left: 0;
      right: 0;
    }
  }
`;

export const Heading = styled.h2`
  position: relative;
  padding: 0 35px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-weight: 700;
  line-height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  ${media.mobile} {
    padding: 0 16px;
    font-size: 22px;
  }
`;
