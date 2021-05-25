import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputDebouncedProps extends InputHTMLAttributes<HTMLInputElement> {
  time?: number;
  title?: string;
  valueChange: (value: string) => void;
  icon?: React.ComponentType<IconBaseProps>;
  iconColor?: string;
  placeholderPosition?: 'left' | 'center' | 'right';
  placeholderColor?: string;
  borderColor?: string;
  color?: string;
  disabled?: boolean;
}

export const InputDebounced: React.FC<InputDebouncedProps> = ({
  time = 300,
  title,
  valueChange,
  icon: Icon,
  iconColor = '#000',
  placeholderPosition = 'left',
  placeholderColor = '#aaa',
  borderColor = '#000',
  color = '#000',
  disabled = false,
  ...rest
}) => {
  const timer = useRef(0);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => {
    if (timer.current) window.clearTimeout(timer.current);

    setInputValue(currentTarget.value);

    timer.current = window.setTimeout(() => {
      valueChange(currentTarget.value);
    }, time);
  };

  return (
    <Container
      placeholderPosition={placeholderPosition}
      placeholderColor={placeholderColor}
      borderColor={borderColor}
      color={color}
      disabled={disabled}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        disabled={disabled}
        {...rest}
      />
      {Icon && <Icon size={20} color={iconColor} />}
      {title && <span>{title}</span>}
    </Container>
  );
};
