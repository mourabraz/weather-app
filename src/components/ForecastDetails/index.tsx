import React from 'react';
import {
  WiBarometer,
  WiHumidity,
  WiSunrise,
  WiThermometer,
  WiUmbrella,
} from 'react-icons/wi';

import { DailyForecast } from '../../models/DailyForecast';
import { WindIcon } from '../WindIcon';

import { Colors } from '../../styles/colors';
import {
  Container,
  Row,
  TemperatureInfo,
  SunMoonInfo,
  OtherInfo,
  WindInfo,
} from './styles';
import { MoonPhase } from '../MoonPhase';

interface ForecastDetailsProps {
  day: DailyForecast;
}

export const ForecastDetails: React.FC<ForecastDetailsProps> = ({ day }) => {
  return (
    <Container>
      <Row>
        <TemperatureInfo>
          <WiThermometer color={Colors.textIcons} size={40} />
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
          <WiSunrise color={Colors.textIcons} size={40} />

          <p>
            Nascer do Sol <span>{day.getSunriseHour()}</span>
          </p>
          <p>
            Por do Sol <span>{day.getSunsetHour()}</span>
          </p>

          {day.moonPhase ? <MoonPhase phase={day.moonPhase} size={40} /> : null}

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
          <Row>
            <WiUmbrella size={40} color={Colors.textIcons} />
            <WiHumidity size={40} color={Colors.textIcons} />
            <WiBarometer size={40} color={Colors.textIcons} />
          </Row>
          <p>
            Precipitação
            <span>{day.popFormatted} %</span>
          </p>
          <p>
            Humidade <span>{day.humidity} %</span>
          </p>
          <p>
            Barómetro <span>{day.pressure} mb</span>
          </p>
          <p>
            Ponto de orvalho <span>{day.dewPointFormatted} ºC</span>
          </p>
          <p>
            UV <span>{day.uvi}</span>
          </p>
        </OtherInfo>
        <WindInfo>
          <WindIcon direction={Math.abs(day.wind.deg)} size={42} />
          <p>Vento</p>
          <p>{day.windSpeedFormatted} km/h</p>
        </WindInfo>
      </Row>
    </Container>
  );
};
