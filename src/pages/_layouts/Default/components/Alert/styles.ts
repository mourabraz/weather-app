import styled from 'styled-components';
import { Colors } from '../../../../../styles/colors';

export const Container = styled.div`
  position: absolute;
  top: 78px;
  left: 16px;
  display: flex;
  flex-direction: column;

  width: 250px;

  background-color: ${Colors.errorLight};
  padding: 8px;
  border-radius: 8px;

  color: ${Colors.error};

  box-shadow: 1px 4px 8px 4px rgb(0 0 0 / 20%);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    border-radius: 50%;

    border: none;

    background-color: ${Colors.error};

    &:hover {
      filter: brightness(0.8);
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const Content = styled.div``;
