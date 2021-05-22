import React from 'react';

import { Forecast } from '../../../../models/Forecast';

import { Container } from './styles';

interface ItemProps {
  day: Forecast;
  onSelect: (item: Forecast) => void;
  isSelected: boolean;
}

export const Item: React.FC<ItemProps> = ({
  day,
  onSelect,
  isSelected = false,
}) => {
  return (
    <Container isSelected={isSelected} onClick={() => onSelect(day)}>
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
