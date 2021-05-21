import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Colors } from '../../styles/colors';
import { Container } from './styles';

interface ButtonProps {
  title?: string;
  icon: React.ComponentType<IconBaseProps>;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon: Icon,
  disabled = false,
}) => {
  return (
    <Container type="button" disabled={disabled}>
      <Icon size={20} color={Colors.textIcons} />
      {title && <span>{title}</span>}
    </Container>
  );
};
