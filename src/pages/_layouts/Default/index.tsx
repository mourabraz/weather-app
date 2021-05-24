import React from 'react';

import { Header } from './components/Header';
import { Error } from './components/Error';

import { Container, Content } from './styles';

export const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Error />
    </Container>
  );
};
