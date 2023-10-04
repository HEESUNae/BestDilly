import styled from 'styled-components';
import { myTheme } from '../../my-theme';

export const StyledSplashPage = styled.div`
  background-color: ${myTheme.colors.sub};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  p {
    color: #e8e8e8;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.5;
    &.logo {
      color: ${myTheme.colors.main};
      font-weight: 600;
      font-size: 2.8rem;
      line-height: 1;
      margin-top: 1rem;
      font-style: italic;
      border-bottom: 1px solid;
    }
  }
  img {
    &.loading {
      width: 6rem;
      height: 6rem;
      filter: sepia(1);
    }
  }
  button {
    display: flex;
    flex-direction: row-reverse;
    transition: 0.3s;
    border: 0.1rem solid;
    &:hover {
      gap: 1rem;
    }
  }
`;
