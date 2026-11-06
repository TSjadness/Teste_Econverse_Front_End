import styled from 'styled-components';
import { media } from '../../styles/media';

export const Nav = styled.nav`
  width: ${({ theme }) => theme.container};
  margin: 0 auto;
  height: 41px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  background: ${({ theme }) => theme.colors.white};

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 92px;
  }

  ${media.tablet} {
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    ul {
      width: max-content;
      min-width: 100%;
      justify-content: flex-start;
      gap: 32px;
      padding: 0 16px;
    }
  }
`;

export const NavLink = styled.a<{ $highlight: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 500)};
  text-transform: uppercase;
  color: ${({ $highlight, theme }) => ($highlight ? theme.colors.primary : theme.colors.muted)};
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
