import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Colors } from '../../styles/colors';
import { Container } from './styles';

interface ButtonProps {
  title?: string;
  icon: React.ComponentType<IconBaseProps>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconColor?: string;
  fillIcon?: 'none' | string;
  iconSize?: number;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon: Icon,
  onClick,
  iconColor = Colors.textIcons,
  fillIcon = 'none',
  iconSize = 20,
  disabled = false,
}) => {
  return (
    <Container
      type="button"
      disabled={disabled}
      onClick={onClick}
      fillIcon={fillIcon}
    >
      <Icon size={iconSize} color={iconColor} />
      {title && <span>{title}</span>}
    </Container>
  );
};
