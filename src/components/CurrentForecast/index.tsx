import React from 'react';
import { useSelector } from 'react-redux';

import { CurrentForecast as CurrentForecastModel } from '../../models/CurrentForecast';
import { ForecastCollection } from '../../models/ForecastCollection';
import { State } from '../../store';

import { WindIcon } from '../WindIcon';
import { Container, TemperatureInfo, InfoBox } from './styles';

export const CurrentForecast: React.FC = () => {
  const current = useSelector<State, CurrentForecastModel | null>(
    state => state.currentForecast,
  );
  const collection = useSelector<State, ForecastCollection | null>(
    state => state.forecastCollection,
  );

  return current ? (
    <Container>
      <h1>{current.city.localName}</h1>
      <h3>
        {collection?.current.getFormattedDate(
          "dd 'de' MMMM 'de' yyyy 'às' HH:mm",
        )}
      </h3>
      <TemperatureInfo>
        <h2>
          <img src={current.iconWeatherUrl} alt={current.weather.main} />
          {current.tempFormatted.avg}º <span>C</span>
        </h2>
        <h3>{current.weather.description}</h3>
      </TemperatureInfo>

      <InfoBox>
        <div>
          <p>
            Sensação Térmica <span>{current.feelsLikeFormatted.avg} º</span>
          </p>
          <p>
            Vento
            <WindIcon
              direction={Math.abs(current.wind.deg)}
              size={16}
              style={{
                display: 'inline-block',
              }}
            />
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
  ) : null;
};
