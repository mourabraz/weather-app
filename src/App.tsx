import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from './store';
import { getPositionRequest } from './store/modules/position/actions';

import { ForecastCollection } from './models/ForecastCollection';
import { CurrentForecast as CurrentForecastModel } from './models/CurrentForecast';
import { DailyForecast } from './models/DailyForecast';
import { Position } from './interfaces';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { CurrentForecast } from './pages/CurrentForecast';
import { ShowNextDays } from './pages/ShowNextDays';
import { ForecastDetails } from './pages/ForecastDetails';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const position = useSelector<State, Position>(state => state.position);
  const current = useSelector<State, CurrentForecastModel | null>(
    state => state.currentForecast,
  );

  const [forecastOneCall, setForecastOneCall] = useState<ForecastCollection>();

  const [selectedDay, setSelectedDay] = useState<DailyForecast>();

  useEffect(() => {
    dispatch(getPositionRequest());
  }, [dispatch]);

  useEffect(() => {
    async function load() {
      try {
        /* const responseJson = await fetch(
          `${process.env.REACT_APP_API}onecall?lat=${position?.lat}&lon=${position?.long}&exclude=alerts,hourly,minutely&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
        ); */
        // await responseJson.json();
      } catch (error) {
        console.log(error);
      }
    }
  }, [position]);

  return (
    <>
      <Default>
        {current ? <CurrentForecast current={current} /> : null}
        {forecastOneCall ? (
          <>
            <ShowNextDays
              nextDays={forecastOneCall.daily}
              selectedDay={selectedDay}
              onSelect={setSelectedDay}
            />
            {selectedDay ? <ForecastDetails day={selectedDay} /> : null}
          </>
        ) : null}
      </Default>
      <GlobalStyle />
    </>
  );
};
