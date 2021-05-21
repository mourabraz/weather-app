import React from 'react';

import { Forecast } from '../../../../models/Forecast';

import { Container } from './styles';

interface ItemProps {
  day: Forecast;
}

export const Item: React.FC<ItemProps> = ({ day }) => {
  return (
    <Container>
      <p>{day.getFormattedDate('EEE dd')}</p>
      <p>
        <img src={day.iconWeatherUrl} alt={day.weather[0].main} />
      </p>
      <p>
        <span>{day.tempMaxMinFormatted?.max}º</span>
        <span>{day.tempMaxMinFormatted?.min}º</span>
      </p>
      <p>{day.weather[0].description}</p>
    </Container>
  );
};
