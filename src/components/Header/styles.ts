import styled from 'styled-components';
import { media } from '../../styles/media';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.container};
  margin: 0 auto;
  min-height: 71px;
  display: grid;
  grid-template-columns: 1fr minmax(0, 630px) 1fr;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 24px;
    padding: 12px 0;
  }

  ${media.mobile} {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'logo actions'
      'search search';
    gap: 12px;
  }
`;

export const LogoLink = styled.a`
  display: inline-flex;
  width: 140px;

  img {
    width: 140px;
    height: auto;
  }

  ${media.mobile} {
    grid-area: logo;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  height: 48px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.light};
  transition: box-shadow ${({ theme }) => theme.transition};

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  ${media.mobile} {
    grid-area: search;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 56px 0 16px;
    border: 0;
    background: transparent;
    font-size: 14px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.muted};
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 12px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;

  ${media.tablet} {
    gap: 18px;
  }

  ${media.mobile} {
    grid-area: actions;
    gap: 12px;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  transition: transform ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-2px) scale(1.06);
  }

  img {
    width: 32px;
    height: 32px;
  }

  ${media.mobile} {
    img {
      width: 28px;
      height: 28px;
    }
  }
`;
