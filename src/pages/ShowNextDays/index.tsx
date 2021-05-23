import React from 'react';

import { DailyForecast } from '../../models/DailyForecast';

import { Item } from './components/Item';

import { Container, List } from './styles';

interface ShowNextDaysProps {
  nextDays: DailyForecast[];
  onSelect: (item: DailyForecast) => void;
  selectedDay?: DailyForecast;
}

export const ShowNextDays: React.FC<ShowNextDaysProps> = ({
  nextDays,
  onSelect,
  selectedDay,
}) => {
  return (
    <Container>
      <h1>Next Days</h1>

      <List>
        {nextDays.map(d => (
          <Item
            key={String(d.date)}
            day={d}
            isSelected={!!selectedDay && selectedDay.date === d.date}
            onSelect={onSelect}
          />
        ))}
      </List>
    </Container>
  );
};
