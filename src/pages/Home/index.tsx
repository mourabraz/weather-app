import React from 'react';
import { Forecast } from '../../models/Forecast';

import { Container, TemperatureInfo, InfoBox } from './styles';

interface HomeProps {
  current: Forecast;
}

export const Home: React.FC<HomeProps> = ({ current }) => {
  return (
    <Container>
      <h1>Cortes, Leiria</h1>
      <TemperatureInfo>
        <h2>
          <img src={current.iconWeatherUrl} alt={current.weather[0].main} />
          18º <span>C</span>
        </h2>
        <h3>{current.weather[0].description}</h3>
        <p>Última atualzação: {current.dateFormatted}</p>
      </TemperatureInfo>
      <InfoBox>
        <div>
          <p>
            Sensação Térmica <span>{current.tempFormatted} º</span>
          </p>
          <p>
            Vento <span>sudoeste</span>{' '}
            <span>{current.windSpeedFormatted} km/h</span>
          </p>
          <p>
            Visibilidade <span>{current.visibilityFormatted} km</span>
          </p>
        </div>
        <div>
          <p>
            Barómetro <span>{current.pressure} mb</span>
          </p>
          <p>
            Humidade <span>{current.humidity} %</span>
          </p>
          <p>
            Ponto de Condensação <span>{current.dewPoint} º</span>
          </p>
        </div>
      </InfoBox>
    </Container>
  );
};
