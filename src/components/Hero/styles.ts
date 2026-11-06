import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/media';
import heroImage from '../../assets/images/hero-black-friday.png';

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 390px;
  background: url(${heroImage}) center / cover no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%);
    pointer-events: none;
  }

  ${media.tablet} {
    height: 340px;
  }

  ${media.mobile} {
    height: auto;
    min-height: 320px;
  }
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.container};
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding-top: 81px;
  color: ${({ theme }) => theme.colors.white};
  animation: ${rise} 0.7s ease both;

  ${media.tablet} {
    padding-top: 56px;
  }

  ${media.mobile} {
    padding: 40px 0;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 100%;
  margin-bottom: 28px;
  max-width: 640px;

  ${media.tablet} {
    font-size: 40px;
    margin-bottom: 20px;
  }

  ${media.mobile} {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

export const Highlight = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 49px;

  ${media.tablet} {
    font-size: 26px;
    margin-bottom: 32px;
  }

  ${media.mobile} {
    font-size: 22px;
    margin-bottom: 24px;
  }

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 206px;
  height: 50px;
  margin-left: 7px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 16px;
  font-weight: 600;
  transition: transform ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  ${media.mobile} {
    margin-left: 0;
    width: 100%;
    max-width: 206px;
  }
`;
