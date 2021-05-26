import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DailyForecast } from '../../../../models/DailyForecast';
import { State } from '../../../../store';
import { setForecastCollectionSelected } from '../../../../store/modules/forecast-collection/actions';

import { Container } from './styles';

interface ItemProps {
  day: DailyForecast;
}

export const Item: React.FC<ItemProps> = ({ day }) => {
  const dispatch = useDispatch();

  const selected = useSelector(
    (state: State) => state.forecastCollection?.selectedDay,
  );

  const handleSelect = useCallback(() => {
    dispatch(setForecastCollectionSelected(day));
  }, [day, dispatch]);

  return (
    <Container
      isSelected={!!selected && selected.date === day.date}
      onClick={handleSelect}
    >
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
