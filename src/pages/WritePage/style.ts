import styled from 'styled-components';

export const StyledWritePage = styled.div`
  .write-container {
    width: 30rem;
    margin: 0 auto;
    padding: 2rem;
    margin-top: 2rem;
    border: 0.1rem dashed #ddd;
  }
  form {
    label {
      display: flex;
      align-items: center;
      margin: 1.6rem 0;
      gap: 0.5rem;
      p {
        width: 4rem;
        margin-top: 0.2rem;
      }
    }
    .file-viewer {
      img {
        height: 20rem;
        object-fit: cover;
      }
    }

    .btn-container {
      display: flex;
      justify-content: center;
    }
  }
`;
