import React from 'react';
import { useSelector } from 'react-redux';
import {
  WiBarometer,
  WiHumidity,
  WiSunrise,
  WiThermometer,
  WiUmbrella,
} from 'react-icons/wi';

import { State } from '../../store';
import { WindIcon } from '../WindIcon';
import { MoonPhase } from '../MoonPhase';

import { Colors } from '../../styles/colors';
import {
  Container,
  Row,
  TemperatureInfo,
  SunMoonInfo,
  OtherInfo,
  WindInfo,
} from './styles';

export const ForecastDetails: React.FC = () => {
  const selectedDay = useSelector(
    (state: State) => state.forecastCollection?.selectedDay,
  );

  return selectedDay ? (
    <Container>
      <Row>
        <TemperatureInfo>
          <WiThermometer color={Colors.textIcons} size={40} />
          <p>
            Máx: <span>{selectedDay.tempFormatted?.max} ºC</span>
          </p>
          <p>
            Min: <span>{selectedDay.tempFormatted?.min} ºC</span>
          </p>
          <p>
            Dia <span>{selectedDay.tempFormatted?.day} ºC</span>
          </p>
          <p>
            Noite <span>{selectedDay.tempFormatted?.eve} ºC</span>
          </p>
        </TemperatureInfo>
        <SunMoonInfo>
          <WiSunrise color={Colors.textIcons} size={40} />

          <p>
            Nascer do Sol <span>{selectedDay.getSunriseHour()}</span>
          </p>
          <p>
            Por do Sol <span>{selectedDay.getSunsetHour()}</span>
          </p>

          {selectedDay.moonPhase ? (
            <MoonPhase phase={selectedDay.moonPhase} size={40} />
          ) : null}

          <p>
            Nascer da Lua <span>{selectedDay.getMoonriseHour()}</span>
          </p>
          <p>
            Por da Lua <span>{selectedDay.getMoonsetHour()}</span>
          </p>
          <p>
            Fase lunar <span>{selectedDay.moonPhase}</span>
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
            <span>{selectedDay.popFormatted} %</span>
          </p>
          <p>
            Humidade <span>{selectedDay.humidity} %</span>
          </p>
          <p>
            Barómetro <span>{selectedDay.pressure} mb</span>
          </p>
          <p>
            Ponto de orvalho <span>{selectedDay.dewPointFormatted} ºC</span>
          </p>
          <p>
            UV <span>{selectedDay.uvi}</span>
          </p>
        </OtherInfo>
        <WindInfo>
          <WindIcon direction={Math.abs(selectedDay.wind.deg)} size={42} />
          <p>Vento</p>
          <p>{selectedDay.windSpeedFormatted} km/h</p>
        </WindInfo>
      </Row>
    </Container>
  ) : null;
};
