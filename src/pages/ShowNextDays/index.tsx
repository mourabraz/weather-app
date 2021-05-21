import React from 'react';
import { Forecast } from '../../models/Forecast';
import { Item } from './components/Item';

import { Container, Content, List } from './styles';

interface ShowNextDaysProps {
  nextDays: Forecast[];
}

export const ShowNextDays: React.FC<ShowNextDaysProps> = ({ nextDays }) => {
  return (
    <Container>
      <h1>Next Days</h1>
      <Content>
        <List>
          {nextDays.map(d => (
            <Item key={d.dateFormatted} day={d} />
          ))}
        </List>
      </Content>
    </Container>
  );
};
