import styled from 'styled-components';
import { myTheme } from '../../../my-theme';

export const StyledBasicInput = styled.input`
  border: 0.1rem solid #ccc;
  width: 100%;
  &[type='file'] {
    padding: 0;
    border: 0;
  }
  &[type='file']::file-selector-button {
    border-radius: 0.4rem;
    border: 0;
    background: ${myTheme.colors.sub};
    color: ${myTheme.colors.main};
    font-weight: 600;
    padding: 0.5rem 1rem;
  }
`;
