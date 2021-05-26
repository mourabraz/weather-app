import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPositionRequest } from './store/modules/position/actions';

import { CurrentForecast } from './components/CurrentForecast';
import { ShowNextDays } from './components/ShowNextDays';
import { ForecastDetails } from './components/ForecastDetails';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPositionRequest());
  }, [dispatch]);

  return (
    <>
      <Default>
        <CurrentForecast />
        <ShowNextDays />
        <ForecastDetails />
      </Default>
      <GlobalStyle />
    </>
  );
};
