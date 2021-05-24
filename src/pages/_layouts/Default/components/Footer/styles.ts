import styled from 'styled-components';
import { Colors } from '../../../../../styles/colors';

export const Container = styled.footer`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 52px;
  background: ${Colors.primaryDark};
  bottom: 0px;
  color: ${Colors.textIcons};
  padding: 0 16px;
  box-shadow: rgb(0 0 0 / 10%) 0px -4px 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
`;
