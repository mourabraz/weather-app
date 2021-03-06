import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiX } from 'react-icons/fi';

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
  isFocused?: boolean;
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
  isFocused = false,
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

  const handleCloseButton = useCallback(() => {
    setInputValue('');
    valueChange('');
  }, [valueChange]);

  return (
    <Container
      placeholderPosition={placeholderPosition}
      placeholderColor={placeholderColor}
      borderColor={borderColor}
      color={color}
      disabled={disabled}
      isFocused={isFocused}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        disabled={disabled}
        {...rest}
      />
      <button type="button" onClick={handleCloseButton} disabled={!inputValue}>
        <FiX size={20} color={iconColor} />
      </button>
      {Icon && <Icon size={20} color={iconColor} />}
      {title && <span>{title}</span>}
    </Container>
  );
};
