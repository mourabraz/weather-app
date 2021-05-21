import React from 'react';

import { Container, TemperatureInfo, InfoBox } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <h1>Cortes, Leiria</h1>
      <TemperatureInfo>
        <h2>
          <span>icon</span> 18º <span>C</span>
        </h2>
        <h3>Geralmente nublado</h3>
        <p>Última atualzação às 09:53</p>
      </TemperatureInfo>
      <InfoBox>
        <div>
          <p>
            Sensação Térmica <span>17º</span>
          </p>
          <p>
            Vento <span>sudoeste</span> <span>9 km/h</span>
          </p>
          <p>
            Visibilidade <span>10 km</span>
          </p>
        </div>
        <div>
          <p>
            Barómetro <span>1019,00 mb</span>
          </p>
          <p>
            Humidade <span>83%</span>
          </p>
          <p>
            Ponto de Condensação <span>14º</span>
          </p>
        </div>
      </InfoBox>
    </Container>
  );
};
