import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../../store';
import { Container } from './styles';

export const Footer: React.FC = () => {
  const position = useSelector((state: State) => state.position);

  return (
    <Container>
      <p>mourabraz &copy; 2021</p>
      <p>
        weather at <span>latitude {position?.lat}</span>,{' '}
        <span>longitude {position?.long}</span>
      </p>
    </Container>
  );
};
