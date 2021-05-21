import React from 'react';
import { FiNavigation } from 'react-icons/fi';
import { Forecast } from '../../models/Forecast';
import { Colors } from '../../styles/colors';

import { Container, TemperatureInfo, InfoBox, WindIcon } from './styles';

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
          {current.tempFormatted}º <span>C</span>
        </h2>
        <h3>{current.weather[0].description}</h3>
        <p>
          Última atualzação:
          <span>
            {current.getFormattedDate("dd 'de' MMMM 'de' yyyy 'às' hh:mm")}
          </span>
        </p>
      </TemperatureInfo>
      <InfoBox>
        <div>
          <p>
            Sensação Térmica <span>{current.feelLikeFormatted} º</span>
          </p>
          <p>
            Vento
            <WindIcon direction={Math.abs(current.windDeg)}>
              <FiNavigation color={Colors.textIcons} size={16} />
            </WindIcon>
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
