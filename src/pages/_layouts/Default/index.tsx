import React from 'react';

import { Header } from './components/Header';
import { Alert } from './components/Alert';

import { Container, Content } from './styles';
import { Footer } from './components/Footer';

export const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
      <Alert />
    </Container>
  );
};
