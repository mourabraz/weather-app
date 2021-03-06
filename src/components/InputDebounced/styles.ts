import styled, { css } from 'styled-components';

interface ContainerProps {
  placeholderPosition?: 'left' | 'center' | 'right';
  placeholderColor: string;
  color: string;
  borderColor: string;
  disabled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 184px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${props => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};

  input {
    width: 110px;
    background: transparent;
    border: 0;
    color: ${props => props.color};

    &::placeholder {
      color: ${props => props.placeholderColor};
      text-align: ${props => props.placeholderPosition};
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  > svg {
    margin-left: 8px;
  }

  button {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;

    &:disabled {
      svg {
        display: none;
      }
    }
  }

  ${props =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : null}

  ${props =>
    props.isFocused
      ? css`
          border: 2px solid ${props.borderColor};
        `
      : null}

  span {
    width: max-content;
    background: ${props => props.color};
    padding: 16px;
    border: 1px solid ${props => props.borderColor};
    border-radius: 4px;
    font-size: 1.4rem;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.borderColor};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${props => props.borderColor} transparent;
      border-width: 0 6px 6px 6px;
      /* bottom: 20px; */
      bottom: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
