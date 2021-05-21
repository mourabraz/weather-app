import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${Colors.primaryText};
`;

export const Content = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
`;
