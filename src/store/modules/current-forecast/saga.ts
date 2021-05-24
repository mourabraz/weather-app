import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import { State } from '../../index';
import { CurrentForecastResponse, Position } from '../../../interfaces';

import { CurrentForecast } from '../../../models/CurrentForecast';
import api from '../../../services/api';

import {
  getCurrentForecastFailure,
  getCurrentForecastSuccess,
} from './actions';
import { ActionTypes } from './types';
import { City } from '../../../models/City';

function* getCurrentForecastRequest() {
  try {
    const position: Position = yield select((state: State) => state.position);
    const favorites: City[] = yield select(
      (state: State) => state.manager.favorites,
    );

    const { data }: AxiosResponse<CurrentForecastResponse> = yield call(
      api.get,
      `weather?lat=${position?.lat}&lon=${position?.long}&cnt=1&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
    );

    const current = CurrentForecast.fromResponse(data);
    current.city.isFavorite = !!favorites.find(i => i.id === current.city.id);

    yield put(getCurrentForecastSuccess(current));
  } catch (error) {
    const appError = {
      title: 'Request Current Forecast Error',
      messages: [
        // eslint-disable-next-line no-nested-ternary
        error.message
          ? error.message
          : typeof error === 'string'
          ? error
          : 'Unknow error',
      ],
    };
    yield put(getCurrentForecastFailure(appError));
  }
}

export default all([
  takeLatest(
    ActionTypes.GET_CURRENT_FORECAST_REQUEST,
    getCurrentForecastRequest,
  ),
]);
