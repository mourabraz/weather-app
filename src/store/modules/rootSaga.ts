import { all } from 'redux-saga/effects';

import position from './position/saga';
import current from './current/saga';

export default function* rootSaga() {
  yield all([position, current]);
}
