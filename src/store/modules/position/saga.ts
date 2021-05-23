import { SagaReturnType, all, call, put, takeLatest } from 'redux-saga/effects';

import { Position } from '../../../interfaces';

import { setPositionSuccess, setPositionFailure } from './actions';
import { ActionTypes } from './types';

const getPosition = async () => {
  return new Promise<Position>((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        p => {
          resolve({
            lat: p.coords.latitude,
            long: p.coords.longitude,
          });
        },
        e => reject(e.message || 'Geolocation: unknow error'),
      );
    } else {
      reject(new Error('Geolocation not found on navigator'));
    }
  });
};

type ResultGetPosition = SagaReturnType<typeof getPosition>;

function* setPosition() {
  try {
    const result: ResultGetPosition = yield call(getPosition);

    yield put(setPositionSuccess(result));
  } catch (error) {
    yield put(
      setPositionSuccess({
        lat: Number(process.env.REACT_APP_DEFAULT_LAT_POSITION),
        long: Number(process.env.REACT_APP_DEFAULT_LONG_POSITION),
      }),
    );
    yield put(setPositionFailure(error));
  }
}

export default all([takeLatest(ActionTypes.SET_POSITION_REQUEST, setPosition)]);
