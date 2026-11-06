import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: min(1364px, 100%);
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewAll = styled.a`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Tabs = styled.div`
  width: ${({ theme }) => theme.container};
  margin: 21px auto 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.border};

  ${media.tablet} {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tab = styled.button<{ $active: boolean }>`
  height: 38px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  text-transform: uppercase;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.dark)};
  transition: background ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};

  &:last-child {
    border-right: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }

  ${media.tablet} {
    flex: 1 0 auto;
    padding: 0 20px;
    font-size: 14px;
    white-space: nowrap;
  }

  ${media.mobile} {
    font-size: 12px;
    padding: 0 16px;
  }
`;

export const Carousel = styled.div<{ $spaced: boolean }>`
  position: relative;
  display: flow-root;
  margin-top: ${({ $spaced }) => ($spaced ? '37px' : '25px')};
  padding: 0 42px;

  ${media.mobile} {
    padding: 0;
    margin-top: ${({ $spaced }) => ($spaced ? '24px' : '16px')};
  }
`;

export const Viewport = styled.div`
  overflow-x: auto;
  margin: -14px -12px -18px;
  padding: 14px 12px 18px;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 12px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile} {
    margin: -14px 0 -18px;
    padding: 14px 16px 18px;
    scroll-padding: 0 16px;
  }
`;

export const Track = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;

  > article {
    scroll-snap-align: start;
  }

  ${media.mobile} {
    gap: 12px;

    > article {
      flex-basis: min(305px, 78vw);
    }
  }
`;

export const Arrow = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  z-index: 2;
  top: 50%;
  ${({ $side }) => $side}: 0;
  width: 26px;
  height: 26px;
  margin-top: -13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.dark};
  transition: transform ${({ theme }) => theme.transition}, opacity ${({ theme }) => theme.transition};

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover:not(:disabled) {
    transform: scale(1.12);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  ${media.mobile} {
    ${({ $side }) => $side}: 4px;
  }
`;

export const Status = styled.p`
  padding: 60px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
`;
