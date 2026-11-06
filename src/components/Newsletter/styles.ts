import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: 100%;
  min-height: 162px;
  background: ${({ theme }) => theme.colors.darkDefault};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.container};
  min-height: 162px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 20px;
    padding: 32px 0;
  }
`;

export const Info = styled.div`
  max-width: 540px;

  h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 120%;

    ${media.mobile} {
      font-size: 22px;
    }
  }

  p {
    margin-top: 8px;
    font-size: 13.5px;
    line-height: 150%;
  }
`;

export const Form = styled.form`
  width: 640px;
  max-width: 100%;

  ${media.tablet} {
    width: 100%;
  }

  .fields {
    display: flex;
    justify-content: flex-start;
    gap: 8px;

    ${media.mobile} {
      flex-direction: column;

      input[type='text'],
      input[type='email'] {
        flex: 0 0 auto;
        width: 100%;
        max-width: none;
        border-radius: 222px;
      }
    }
  }

  input[type='text'],
  input[type='email'] {
    flex: 1 1 0;
    min-width: 0;
    max-width: 231px;
    width: 231px;
    height: 41px;
    padding: 12px 24px 12px 24px;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    font-size: 14px;


    &::placeholder {
      color: ${({ theme }) => theme.colors.muted};
    }

    ${media.tablet} {
      max-width: none;
    }
  }

  button {
    flex: 0 0 auto;
    width: 157px;
    height: 41px;
    font-size: 14px;
    border-radius: 8px;

    ${media.mobile} {
      width: 100%;
    }
  }

  label {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
  }

  input[type='checkbox'] {
    width: 14px;
    height: 14px;
    accent-color: ${({ theme }) => theme.colors.accent};
  }
`;
