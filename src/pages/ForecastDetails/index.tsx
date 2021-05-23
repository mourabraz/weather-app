import React from 'react';
import { FiNavigation } from 'react-icons/fi';

import { DailyForecast } from '../../models/DailyForecast';

import { Colors } from '../../styles/colors';
import { Container, Row, Column, WindIcon } from './styles';

interface ForecastDetailsProps {
  day: DailyForecast;
}

export const ForecastDetails: React.FC<ForecastDetailsProps> = ({ day }) => {
  return (
    <Container>
      <h1>Detalhes do Dia</h1>

      <Row>
        <Column>
          <p>
            Máx: <span>{day.tempFormatted?.max} ºC</span>
          </p>
          <p>
            Min: <span>{day.tempFormatted?.min} ºC</span>
          </p>

          <p>
            Dia <span>{day.tempFormatted?.day} ºC</span>
          </p>

          <p>
            Noite <span>{day.tempFormatted?.eve} ºC</span>
          </p>
        </Column>
        <Column>
          <p>
            Nascer do Sol <span>{day.getSunriseHour()}</span>
          </p>
          <p>
            Por do Sol <span>{day.getSunsetHour()}</span>
          </p>
          <p>
            Nascer da Lua <span>{day.getMoonriseHour()}</span>
          </p>
          <p>
            Por da Lua <span>{day.getMoonsetHour()}</span>
          </p>
          <p>
            Fase lunar <span>{day.moonPhase}</span>
          </p>
        </Column>
        <Column>
          <p>
            Precipitação <span>{day.popFormatted} %</span>
          </p>
          <p>
            Ponto de orvalho <span>{day.dewPointFormatted} ºC</span>
          </p>
          <p>
            Humidade <span>{day.humidity} %</span>
          </p>
          <p>
            UV <span>{day.uvi}</span>
          </p>
        </Column>
        <Column>
          <p>Vento</p>
          <p>
            <WindIcon direction={Math.abs(day.wind.deg)}>
              <FiNavigation color={Colors.textIcons} size={40} />
            </WindIcon>
          </p>
          <p>
            <span>{day.windSpeedFormatted} km/h</span>
          </p>
        </Column>
      </Row>
    </Container>
  );
};
