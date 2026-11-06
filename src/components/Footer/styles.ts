import styled from "styled-components";
import { media } from "../../styles/media";

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
`;

export const Gray = styled.div`
  min-height: 282px;
  background: ${({ theme }) => theme.colors.light};
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.container};
  min-height: 282px;
  margin: 0 auto;
  padding-top: 43px;
  display: flex;

  ${media.tablet} {
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const Brand = styled.div`
  flex: 0 0 442px;
  height: 197px;
  padding: 20px 56px 0 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  img {
    width: 165px;
    height: auto;
  }

  p {
    margin-top: 16px;
    max-width: 300px;
    font-size: 14px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.7);
  }

  ${media.tablet} {
    flex: none;
    height: auto;
    padding: 0 0 32px;
    border-right: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
`;

export const Social = styled.ul`
  margin-top: 24px;
  display: flex;
  gap: 26px;

  a {
    display: flex;
    transition:
      opacity ${({ theme }) => theme.transition},
      transform ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.7;
      transform: translateY(-2px);
    }
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Columns = styled.div`
  display: flex;
  padding: 30px 0 0 90px;

  nav:nth-child(1) {
    width: 221px;
  }

  nav:nth-child(2) {
    width: 249px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.7);
  }

  ul {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 11px;

    font-family: Work Sans;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0%;
  }

  a {
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.54);
    transition: color ${({ theme }) => theme.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    padding: 32px 0 0;

    nav:nth-child(1),
    nav:nth-child(2) {
      width: auto;
    }
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Bottom = styled.p`
  min-height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;
