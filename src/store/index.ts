import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { AppError, Position } from '../interfaces';
import { City } from '../models/City';
import { CurrentForecast } from '../models/CurrentForecast';
import { ForecastCollection } from '../models/ForecastCollection';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface State {
  position: Position;
  error: AppError | null;
  currentForecast: CurrentForecast | null;
  forecastCollection: ForecastCollection | null;
  favorites: City[];
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
