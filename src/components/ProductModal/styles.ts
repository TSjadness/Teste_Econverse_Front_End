import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/media';

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pop = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.54);
  animation: ${fade} 0.25s ease both;
`;

export const Dialog = styled.div`
  position: relative;
  width: 770px;
  height: 300px;
  display: grid;
  grid-template-columns: 390px 1fr;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.alt};
  animation: ${pop} 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) both;

  ${media.tablet} {
    width: min(770px, 100%);
    grid-template-columns: 1fr 1fr;
  }

  ${media.mobile} {
    height: auto;
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    grid-template-columns: 1fr;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 24px;
  display: flex;
  padding: 4px;
  color: ${({ theme }) => theme.colors.dark};
  transition: transform ${({ theme }) => theme.transition};

  &:hover {
    transform: rotate(90deg);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 32px;

  img {
    width: 250px;
    max-width: 100%;
    height: 230px;
    object-fit: contain;
  }

  ${media.tablet} {
    padding: 0 16px;
  }

  ${media.mobile} {
    padding: 40px 24px 0;

    img {
      height: 200px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 62px 40px 38px 0;

  ${media.tablet} {
    padding: 62px 24px 32px 0;
  }

  ${media.mobile} {
    padding: 16px 24px 24px;
    gap: 0;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #333;
`;

export const Price = styled.p`
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Description = styled.p`
  margin-top: 32px;
  max-width: 270px;
  font-size: 11px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Details = styled.a`
  margin-top: 8px;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  transition: opacity ${({ theme }) => theme.transition};

  &:hover {
    opacity: 0.7;
  }
`;

export const Actions = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${media.mobile} {
    margin-top: 24px;
  }

  button[type='button'].buy {
    flex: 1 1 140px;
    max-width: 188px;
    width: 188px;
    height: 36px;
    font-size: 14px;
  }
`;
