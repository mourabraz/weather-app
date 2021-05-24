import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from './store';
import { getPositionRequest } from './store/modules/position/actions';

import { ForecastCollection } from './models/ForecastCollection';
import { CurrentForecast as CurrentForecastModel } from './models/CurrentForecast';
import { DailyForecast } from './models/DailyForecast';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { CurrentForecast } from './pages/CurrentForecast';
import { ShowNextDays } from './pages/ShowNextDays';
import { ForecastDetails } from './pages/ForecastDetails';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentForecast = useSelector<State, CurrentForecastModel | null>(
    state => state.currentForecast,
  );
  const forecastCollection = useSelector<State, ForecastCollection | null>(
    state => state.forecastCollection,
  );

  const [selectedDay, setSelectedDay] = useState<DailyForecast>();

  useEffect(() => {
    dispatch(getPositionRequest());
  }, [dispatch]);

  return (
    <>
      <Default>
        {currentForecast ? <CurrentForecast current={currentForecast} /> : null}
        {forecastCollection ? (
          <>
            <ShowNextDays
              nextDays={forecastCollection.daily}
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
