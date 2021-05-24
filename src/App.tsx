import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPositionRequest } from './store/modules/position/actions';

import { ForecastOneCall } from './models/ForecastOneCall';
import { Current as CurrentModel } from './models/Current';
import { Position } from './interfaces';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { Current } from './pages/Current';
import { ShowNextDays } from './pages/ShowNextDays';
import { ForecastDetails } from './pages/ForecastDetails';
import { DailyForecast } from './models/DailyForecast';
import { State } from './store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const position = useSelector<State, Position>(state => state.position);
  const current = useSelector<State, CurrentModel | null>(
    state => state.current,
  );

  const [forecastOneCall, setForecastOneCall] = useState<ForecastOneCall>();

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
        {current ? <Current current={current} /> : null}
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
