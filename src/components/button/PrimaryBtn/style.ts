import styled from 'styled-components';
import { myTheme } from '../../../my-theme';

export const StyledPrimaryBtn = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${myTheme.colors.sub};
    color: ${myTheme.colors.main};
    border: 0;
    padding: 0.6rem 1rem;
    font-size: 1.3rem;
    border-radius: 0.4rem;
    img {
      width: 2rem;
    }
  }
`;
