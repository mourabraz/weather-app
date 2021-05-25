import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../../store';
import { Container } from './styles';

export const Footer: React.FC = () => {
  const position = useSelector((state: State) => state.position);
  const current = useSelector((state: State) => state.currentForecast);

  return (
    <Container>
      <p>mourabraz &copy; 2021</p>
      <p>
        atualizado em (hora local):
        <span>
          {current?.getFormattedDate("dd 'de' MMMM 'de' yyyy 'às' HH:mm")}
        </span>
      </p>
      <p>
        weather at<span>latitude {position?.lat}</span>,
        <span>longitude {position?.long}</span>
      </p>
    </Container>
  );
};
