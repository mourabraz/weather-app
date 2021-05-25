import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import { State } from '../../index';
import { ForecastCollectionResponse, Position } from '../../../interfaces';

import { ForecastCollection } from '../../../models/ForecastCollection';
import { api } from '../../../services/api';

import {
  getForecastCollectionFailure,
  getForecastCollectionSuccess,
} from './actions';
import { ActionTypes } from './types';

function* getForecastCollectionRequest() {
  try {
    const position: Position = yield select((state: State) => state.position);

    const { data }: AxiosResponse<ForecastCollectionResponse> = yield call(
      api.get,
      `onecall?lat=${position?.lat}&lon=${position?.long}&exclude=alerts,hourly,minutely&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
    );

    const forecastCollection = ForecastCollection.fromResponse(data);

    yield put(getForecastCollectionSuccess(forecastCollection));
  } catch (error) {
    const appError = {
      title: 'Request ForecasCollectiont Error',
      messages: [
        // eslint-disable-next-line no-nested-ternary
        error.message
          ? error.message
          : typeof error === 'string'
          ? error
          : 'Unknow error',
      ],
    };
    yield put(getForecastCollectionFailure(appError));
  }
}

export default all([
  takeLatest(
    ActionTypes.GET_FORECAST_COLLECTION_REQUEST,
    getForecastCollectionRequest,
  ),
]);
