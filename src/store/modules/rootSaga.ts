import { all } from 'redux-saga/effects';

import position from './position/saga';
import currentForecast from './current-forecast/saga';

export default function* rootSaga() {
  yield all([position, currentForecast]);
}
