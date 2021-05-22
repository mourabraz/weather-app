import React, { useState } from 'react';
import { Forecast } from '../../models/Forecast';
import { Item } from './components/Item';

import { Container, Content, List } from './styles';

interface ShowNextDaysProps {
  nextDays: Forecast[];
}

export const ShowNextDays: React.FC<ShowNextDaysProps> = ({ nextDays }) => {
  const [selectedDay, setSelectedDay] = useState<Forecast>();

  return (
    <Container>
      <h1>Next Days</h1>
      <Content>
        <List>
          {nextDays.map(d => (
            <Item
              key={String(d.date)}
              day={d}
              isSelected={!!selectedDay && selectedDay.date === d.date}
              onSelect={setSelectedDay}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
};
