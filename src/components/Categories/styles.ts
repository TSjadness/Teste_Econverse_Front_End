import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: 100%;
  padding-top: 39px;

  ${media.tablet} {
    padding-top: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 42px;

  ${media.tablet} {
    justify-content: flex-start;
    gap: 24px;
    overflow-x: auto;
    padding: 8px 24px 20px;
    scroll-snap-type: x proximity;
    scroll-padding: 0 24px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      flex: 0 0 auto;
      scroll-snap-align: start;
    }
  }

  ${media.mobile} {
    padding: 8px 16px 20px;
    scroll-padding: 0 16px;
    gap: 16px;
  }
`;

export const Card = styled.a<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.dark)};

  span.box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 128px;
    border-radius: 8px;
    background: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.light)};
    box-shadow: 0 4px 14px rgba(0, 0, 0, ${({ $active }) => ($active ? 0.14 : 0.08)});
    transition: transform ${({ theme }) => theme.transition},
      box-shadow ${({ theme }) => theme.transition};
  }

  img {
    width: 64px;
    height: 64px;
  }

  &:hover span.box {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  }
`;
