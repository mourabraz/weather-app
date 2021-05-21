import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.button`
  position: relative;
  background: transparent;
  height: 32px;
  width: 32px;
  border-radius: 10px;
  border: 0;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      filter: none;
    }
  }
  &:hover {
    filter: brightness(0.9);
  }

  span {
    width: max-content;
    background: white; //${Colors.primaryLight};
    padding: 16px;
    border: 1px solid ${Colors.accent};
    border-radius: 4px;
    font-size: 1.4rem;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    color: ${Colors.primaryText};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${Colors.accent} transparent;
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
