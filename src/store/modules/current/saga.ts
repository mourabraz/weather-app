import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { State } from '../..';
import { CurrentResponse, Position } from '../../../interfaces';

import { Current } from '../../../models/Current';
import api from '../../../services/api';

import { getCurrentFailure, getCurrentSuccess } from './actions';
import { ActionTypes } from './types';

function* getCurrent() {
  try {
    const position: Position = yield select((state: State) => state.position);

    console.log('CURRENT REQUEST ', position);

    const { data }: AxiosResponse<CurrentResponse> = yield call(
      api.get,
      `weather?lat=${position?.lat}&lon=${position?.long}&cnt=1&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
    );

    const current = Current.fromResponse(data);

    console.log('SAGA GETCURRENT', current);
    yield put(getCurrentSuccess(current));
  } catch (error) {
    yield put(getCurrentFailure(error));
  }
}

export default all([takeLatest(ActionTypes.GET_CURRENT_REQUEST, getCurrent)]);
