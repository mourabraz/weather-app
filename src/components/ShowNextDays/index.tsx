import React from 'react';
import { useSelector } from 'react-redux';

import { State } from '../../store';

import { Item } from './components/Item';

import { Container, List } from './styles';

export const ShowNextDays: React.FC = () => {
  const daily = useSelector((state: State) => state.forecastCollection?.daily);

  return daily && daily.length ? (
    <Container>
      <h1>Next Days</h1>

      <List>
        {daily.map(d => (
          <Item key={String(d.date)} day={d} />
        ))}
      </List>
    </Container>
  ) : null;
};
