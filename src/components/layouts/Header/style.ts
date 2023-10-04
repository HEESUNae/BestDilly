import styled from 'styled-components';
import { myTheme } from '../../../my-theme';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 2rem;
  background-color: ${myTheme.colors.sub};
  .logo a {
    color: ${myTheme.colors.main};
  }
  .util a {
    margin-left: 2rem;
    color: #fff;
    font-size: 1.3rem;
  }
`;
