import React from 'react';

import { DailyForecast } from '../../../../models/DailyForecast';

import { Container } from './styles';

interface ItemProps {
  day: DailyForecast;
  onSelect: (item: DailyForecast) => void;
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
        <img src={day.iconWeatherUrl} alt={day.weather.main} />
      </p>
      <p>
        <span>{day.tempFormatted?.max}º</span>
        <span>{day.tempFormatted?.min}º</span>
      </p>
      <p>{day.weather.description}</p>
    </Container>
  );
};
