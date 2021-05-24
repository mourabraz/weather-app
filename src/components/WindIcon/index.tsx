import React from 'react';
import { FiNavigation } from 'react-icons/fi';

import { Colors } from '../../styles/colors';
import { Container } from './styles';

export const WindIcon: React.FC<{
  direction: number;
  size?: number;
  style?: React.CSSProperties;
}> = ({ direction, size = 20, style }) => {
  return (
    <Container direction={direction} style={style}>
      <FiNavigation color={Colors.textIcons} size={size} />
    </Container>
  );
};
