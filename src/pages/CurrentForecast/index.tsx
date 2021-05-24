import React from 'react';
import { FiNavigation } from 'react-icons/fi';

import { CurrentForecast as CurrentForecastModel } from '../../models/CurrentForecast';

import { Colors } from '../../styles/colors';

import { Container, TemperatureInfo, InfoBox, WindIcon } from './styles';

interface CurrentForecastProps {
  current: CurrentForecastModel;
}

export const CurrentForecast: React.FC<CurrentForecastProps> = ({
  current,
}) => {
  return (
    <Container>
      <h1>
        {current.city.name} / <span>{current.city.countryCode}</span>
      </h1>
      <TemperatureInfo>
        <h2>
          <img src={current.iconWeatherUrl} alt={current.weather.main} />
          {current.tempFormatted.avg}º <span>C</span>
        </h2>
        <h3>{current.weather.description}</h3>
        <p>
          Última atualzação:
          <span>
            {current.getFormattedDate("dd 'de' MMMM 'de' yyyy 'às' HH:mm")}
          </span>
        </p>
      </TemperatureInfo>

      <InfoBox>
        <div>
          <p>
            Sensação Térmica <span>{current.feelsLikeFormatted.avg} º</span>
          </p>
          <p>
            Vento
            <WindIcon direction={Math.abs(current.wind.deg)}>
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
        </div>
      </InfoBox>
    </Container>
  );
};
