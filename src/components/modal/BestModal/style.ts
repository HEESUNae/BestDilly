import styled from 'styled-components';
import { myTheme } from '../../../my-theme';

export const StyledBestModal = styled.div`
  .view-modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-container {
      background-color: #fff;
      border-radius: 0.4rem;
      position: relative;
      overflow: hidden;
      max-width: 35rem;
      .modal {
        &-close-btn {
          position: absolute;
          right: 0;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 0.4rem 0 1rem;
          width: 4.2rem;
          height: 4.2rem;
          background-color: ${myTheme.colors.sub};
          img {
            width: 3rem;
            height: 3rem;
          }
        }
      }

      .photo {
        height: 20rem;
        border-radius: 0.4rem;
        img {
          width: 100%;
        }
      }
      .info {
        padding: 2rem;
        overflow-y: auto;
        display: grid;
        gap: 0.8rem;
        p {
          display: flex;
          align-items: center;
        }
        &-local {
          span {
            font-size: 1.3rem;
          }
          img {
            width: 1.5rem;
          }
        }
        &-favorite {
          button {
            border-radius: 0.4rem;
            border: 0;
            padding: 0.3rem 0.6rem;
            background-color: #ffe6eb;
            display: inline-flex;
            align-items: center;
            font-size: 1.3rem;
            gap: 0.3rem;
            img {
              width: 1.5rem;
            }
          }
        }
        &-desc {
          color: #555;
          font-weight: 300;
          display: -webkit-box !important;
          word-wrap: break-word;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 1.3;
        }
      }
      .btn-container {
        display: flex;
        div {
          width: 50%;
          &:nth-child(2) {
            button {
              background-color: ${myTheme.colors.main};
              color: ${myTheme.colors.sub};
              position: relative;
              /* &::before {
                content: '삭제시 복구불가';
                position: absolute;
                left: 23%;
                top: -3rem;
                z-index: 999;
                background-color: rgba(0, 0, 0, 0.8);
                color: #fff;
                padding: 1rem;
                border-radius: 0.4rem;
                font-size: 1.2rem;
                animation: fadeIn infinite 2s alternate-reverse;
              } */
              /* &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translate(-50%, 0);
                top: -0.3rem;
                z-index: 999;
                border-top: 10px solid rgba(0, 0, 0, 0.8);
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 0 solid transparent;
              }*/
            }
          }
        }
        button {
          width: 100%;
          border-radius: 0;
          display: flex;
          height: 4.2rem;
          justify-content: center;
        }
      }
    }
  }
`;
