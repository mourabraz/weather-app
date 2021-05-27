import styled, { css } from 'styled-components';
import { Colors } from '../../../../styles/colors';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 110px;
  height: 169px;
  border-radius: 8px;
  padding: 8px;
  border: 2px solid transparent;

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
      align-items: center;
      text-align: center;
      margin-top: 8px;
      padding: 0 8px;
      height: 50px;
    }
  }

  &:hover {
    border: 2px solid ${Colors.selectedBackgroundDark};
  }

  ${props =>
    props.isSelected
      ? css`
          background-color: ${Colors.selectedBackground};
          border: 2px solid ${Colors.selectedBackground};

          &::after {
            content: '';
            border-style: solid;
            border-color: ${Colors.selectedBackground} transparent;
            border-width: 16px 16px 0 16px;
            bottom: -18px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          &:hover {
            border: 2px solid ${Colors.selectedBackgroundDark};

            &::after {
              border-color: ${Colors.selectedBackgroundDark} transparent;
            }
          }
        `
      : null}

  @media (max-width: 1053px) {
    width: 100px;
    height: 169px;
    margin-left: -12px;

    & + div {
      margin-left: 5px;
    }

    p {
      /* description */
      &:nth-child(4) {
        align-items: center;
        text-align: center;
        margin-top: 8px;
        padding: 0 4px;
        height: 50px;
      }
    }
  }
`;
