import React from 'react';

import { List } from './components/List';

import { Container, Content } from './styles';

export const ShowNextDays: React.FC = () => {
  return (
    <Container>
      <h1>Next Days</h1>
      <Content>
        <List />
      </Content>
    </Container>
  );
};
