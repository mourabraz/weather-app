import React from 'react';
import { WiWindDeg } from 'react-icons/wi';

import { Colors } from '../../styles/colors';
import { Container } from './styles';

export const WindIcon: React.FC<{
  direction: number;
  size?: number;
  style?: React.CSSProperties;
}> = ({ direction, size = 20, style }) => {
  return (
    <Container direction={direction} style={style}>
      <WiWindDeg color={Colors.textIcons} size={size} />
    </Container>
  );
};
