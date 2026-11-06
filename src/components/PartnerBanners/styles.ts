import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: ${({ theme }) => theme.container};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Banner = styled.a`
  display: block;
  width: 100%;
  aspect-ratio: 634 / 350;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;
