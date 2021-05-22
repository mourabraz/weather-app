import React from 'react';
import { FiNavigation } from 'react-icons/fi';

import { Forecast } from '../../models/Forecast';

import { Container, Row, Column } from './styles';

interface ForecastDetailsProps {
  day: Forecast;
}

export const ForecastDetails: React.FC<ForecastDetailsProps> = ({ day }) => {
  return (
    <Container>
      <h1>Detalhes do Dia</h1>

      <Row>
        <Column>coluna 1</Column>
        <Column>coluna 2</Column>
        <Column>coluna 3</Column>
        <Column>coluna 4</Column>
      </Row>
    </Container>
  );
};
