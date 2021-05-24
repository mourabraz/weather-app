import { all, put, takeLatest, select } from 'redux-saga/effects';

import * as LocalStorage from '../../../services/localStorage';
import { City } from '../../../models/City';

import { State } from '../../index';
import { getCurrentForecastRequest } from '../current-forecast/actions';
import { getForecastCollectionRequest } from '../forecast-collection/actions';
import {
  toggleFavoritesFailure,
  toggleFavoritesSuccess,
  getFavoritesSuccess,
  getFavoritesRequest,
} from './actions';

import { ActionTypes } from './types';

function* refresh() {
  yield put(getFavoritesRequest());

  yield put(getCurrentForecastRequest());

  yield put(getForecastCollectionRequest());
}

function* getFavorites() {
  const favorites: City[] = LocalStorage.getFavorites();

  yield put(
    getFavoritesSuccess(
      favorites
        .sort((a, b) => {
          if (a.countryCode > b.countryCode) return 1;
          if (a.countryCode < b.countryCode) return -1;
          return 0;
        })
        .sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        }),
    ),
  );
}

function* toggleFavorites() {
  const favorite: City = yield select(
    (state: State) => state.currentForecast?.city,
  );

  if (favorite) {
    const favorites: City[] = LocalStorage.getFavorites();

    const found = favorites.find(i => i.id === favorite.id);

    if (found) {
      LocalStorage.setFavorites(favorites.filter(i => i.id !== favorite.id));
      yield put(toggleFavoritesSuccess(favorite, 'REMOVE'));
    } else {
      LocalStorage.setFavorites([...favorites, favorite]);
      yield put(toggleFavoritesSuccess(favorite, 'ADD'));
    }
  } else {
    const appError = {
      title: 'Add/Remove favorite Error',
      messages: ['Without a City to add/remove'],
    };

    yield put(toggleFavoritesFailure(appError));
  }
}

export default all([
  takeLatest(ActionTypes.REFRESH, refresh),
  takeLatest(ActionTypes.GET_FAVORITES_REQUEST, getFavorites),
  takeLatest(ActionTypes.TOGGLE_FAVORITES_REQUEST, toggleFavorites),
]);
