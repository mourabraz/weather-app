import React from 'react';

import { Item } from '../Item';

import { Container } from './styles';

export const List: React.FC = () => {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  );
};
