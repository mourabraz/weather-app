import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 110px;
  height: 150px;

  & + div {
    margin-left: 20px;
  }

  p {
    display: flex;
    justify-content: center;

    /* date */
    &:nth-child(1) {
      font-size: 1.6rem;
    }

    /* image */
    &:nth-child(2) {
      align-items: center;

      img {
        width: 50px;
      }
    }

    /* temperatures max, min */
    &:nth-child(3) {
      align-items: baseline;

      span:nth-child(2) {
        margin-left: 16px;
        font-size: 1.2rem;
        filter: brightness(0.8);
      }
    }

    /* description */
    &:nth-child(4) {
      margin-top: 16px;
      height: 50px;
      text-align: center;
    }
  }
`;
