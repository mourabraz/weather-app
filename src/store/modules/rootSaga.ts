import { all } from 'redux-saga/effects';

import position from './position/saga';
import currentForecast from './current-forecast/saga';
import forecastCollection from './forecast-collection/saga';
import manager from './manager/saga';

export default function* rootSaga() {
  yield all([position, currentForecast, forecastCollection, manager]);
}
