import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 110px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.white};

  button {
    display: flex;
    color: ${({ theme }) => theme.colors.dark};
    transition: transform ${({ theme }) => theme.transition}, opacity ${({ theme }) => theme.transition};

    &:hover:not(:disabled) {
      transform: scale(1.2);
    }

    &:disabled {
      opacity: 0.35;
      cursor: default;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  output {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 14px;
  }
`;
