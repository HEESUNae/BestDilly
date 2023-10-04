import styled from 'styled-components';

export const StyledPrimaryCheck = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 6rem);
  align-items: center;
  gap: 1rem;

  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label {
    color: #4f3f00;
    background: #eee;
    border: 0;
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    display: inline-block;
    font-size: 1.3rem;
    cursor: pointer;
  }
  input[type='checkbox']:checked + label {
    background: #f7c04a;
  }
`;
