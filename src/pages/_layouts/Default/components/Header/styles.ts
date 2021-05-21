import styled from 'styled-components';
import { Colors } from '../../../../../styles/colors';

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 62px;
  background: ${Colors.primaryDark};
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px;
  top: 0px;
  color: ${Colors.textIcons};
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button + div {
    margin-left: 16px;
  }
`;
