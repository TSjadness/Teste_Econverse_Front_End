import styled from 'styled-components';
import { media } from '../../styles/media';

export const Block = styled.div<{ $top?: string }>`
  margin-top: ${({ $top }) => $top ?? '96px'};

  ${media.tablet} {
    margin-top: 64px;
  }

  ${media.mobile} {
    margin-top: 48px;
  }
`;
