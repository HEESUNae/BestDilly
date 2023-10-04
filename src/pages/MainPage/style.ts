import styled from 'styled-components';

export const StyledMainPage = styled.div`
  .best-board {
    border-top: 0.1rem dashed #ddd;
    padding: 3rem 2rem;
    .not-find {
      padding: 2rem;
      border-radius: 0.4rem;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    }
    .best-title-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 2rem;
      h2 {
        margin-bottom: 0;
      }
    }
    .list-container {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      li {
        cursor: pointer;
        border-radius: 0.4rem;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
        .photo {
          height: 150px;
          border-radius: 0.4rem;
        }
        .info {
          padding: 1.5rem;
          display: grid;
          gap: 1rem;
          border-top: 0.1rem dotted #ddd;
          img {
            width: 1.5rem;
          }
          p {
            display: flex;
            align-items: center;
          }
          &-local {
            span {
              font-size: 1.3rem;
            }
          }
          &-favorite {
            display: flex;
            align-items: center;
            font-size: 1.3rem;
            gap: 0.3rem;
          }
        }
      }
    }
  }

  /* 카카오 지도 */
  .kakao-map {
    margin: 0 2rem 2rem;
  }
`;
