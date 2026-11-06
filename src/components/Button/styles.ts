import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'accent';
  $fullWidth: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: transform ${({ theme }) => theme.transition},
    filter ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `
      : css`
          background: ${theme.colors.accent};
          color: ${theme.colors.dark};
        `}

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(39, 28, 71, 0.18);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
