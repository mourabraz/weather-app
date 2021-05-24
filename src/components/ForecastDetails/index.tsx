import React from 'react';

import { DailyForecast } from '../../models/DailyForecast';
import { WindIcon } from '../WindIcon';

import {
  Container,
  Row,
  TemperatureInfo,
  SunMoonInfo,
  OtherInfo,
  WindInfo,
} from './styles';

interface ForecastDetailsProps {
  day: DailyForecast;
}

export const ForecastDetails: React.FC<ForecastDetailsProps> = ({ day }) => {
  return (
    <Container>
      <Row>
        <TemperatureInfo>
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
        </TemperatureInfo>
        <SunMoonInfo>
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
        </SunMoonInfo>
        <OtherInfo>
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
        </OtherInfo>
        <WindInfo>
          <p>Vento</p>
          <p>
            <WindIcon direction={Math.abs(day.wind.deg)} size={42} />
            <span>{day.windSpeedFormatted} km/h</span>
          </p>
        </WindInfo>
      </Row>
    </Container>
  );
};
