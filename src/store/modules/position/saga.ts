import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Position } from '../../../interfaces';

import { refresh } from '../manager/actions';
import {
  getPositionSuccess,
  getPositionFailure,
  setPositionSuccess,
} from './actions';
import { ActionTypes, SetPositionRequest } from './types';

const getNavigatorPosition = async () => {
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

function* getPosition() {
  let position = {
    lat: Number(process.env.REACT_APP_DEFAULT_LAT_POSITION),
    long: Number(process.env.REACT_APP_DEFAULT_LONG_POSITION),
  };

  try {
    position = yield call(getNavigatorPosition);
  } catch (error) {
    const appError = {
      title: 'Geolocation Error',
      messages: [
        // eslint-disable-next-line no-nested-ternary
        error.message
          ? error.message
          : typeof error === 'string'
          ? error
          : 'Unknow error',
        'Using default vales for the position',
      ],
    };

    yield put(getPositionFailure(appError));
  }

  yield put(getPositionSuccess(position));

  yield put(refresh());
}

function* setPosition({ payload: { position } }: SetPositionRequest) {
  yield put(setPositionSuccess(position));

  yield put(refresh());
}

export default all([
  takeLatest(ActionTypes.GET_POSITION_REQUEST, getPosition),
  takeLatest(ActionTypes.SET_POSITION_REQUEST, setPosition),
]);
