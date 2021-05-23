import React, { useState } from 'react';

import { Forecast } from '../../models/Forecast';

import { Item } from './components/Item';

import { Container, List } from './styles';

interface ShowNextDaysProps {
  nextDays: Forecast[];
  onSelect: (item: Forecast) => void;
  selectedDay?: Forecast;
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
