import styled, { css } from 'styled-components';

interface ContainerProps {
  placeholderPosition?: 'left' | 'center' | 'right';
  placeholderColor: string;
  color: string;
  borderColor: string;
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 160px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${props => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};

  input {
    width: 120px;
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
  svg {
    margin-left: 8px;
  }
  ${props =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : null}
`;
