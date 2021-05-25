import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from './store';
import { getPositionRequest } from './store/modules/position/actions';

import { ForecastCollection } from './models/ForecastCollection';
import { DailyForecast } from './models/DailyForecast';

import { CurrentForecast } from './components/CurrentForecast';
import { ShowNextDays } from './components/ShowNextDays';
import { ForecastDetails } from './components/ForecastDetails';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';

export const App: React.FC = () => {
  const dispatch = useDispatch();
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
        <CurrentForecast />
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
