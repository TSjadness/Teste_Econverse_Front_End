import styled from 'styled-components';

interface FlexProps {
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: string;
  $margin?: string;
}

export const Column = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => $margin};
`;

export const Row = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => $margin};
`;

export const ContainerBase = styled.div<{ $bgColor?: string; $padding?: string }>`
  width: 100%;
  background-color: ${({ $bgColor }) => $bgColor};
  padding: ${({ $padding }) => $padding};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: ${({ theme }) => theme.container};
  margin: 0 auto;
`;
