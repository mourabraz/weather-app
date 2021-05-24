import { all, put, takeLatest } from 'redux-saga/effects';

import * as LocalStorage from '../../../services/localStorage';
import { City } from '../../../models/City';

import { getCurrentForecastRequest } from '../current-forecast/actions';
import { getForecastCollectionRequest } from '../forecast-collection/actions';
import {
  addFavoritesFailure,
  addFavoritesSuccess,
  getFavoritesSuccess,
} from './actions';

import { ActionTypes, AddFavoritesRequest } from './types';

function* refresh() {
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

function* addFavorites({ payload: { favorite } }: AddFavoritesRequest) {
  const favorites: City[] = LocalStorage.getFavorites();

  const found = favorites.find(i => i.id === favorite.id);

  if (found) {
    const appError = {
      title: 'Add favorite Error',
      messages: ['the city is already on favorites'],
    };

    yield put(addFavoritesFailure(appError));
  } else {
    LocalStorage.setFavorites([...favorites, favorite]);
    yield put(addFavoritesSuccess(favorite));
  }
}

export default all([
  takeLatest(ActionTypes.REFRESH, refresh),
  takeLatest(ActionTypes.GET_FAVORITES_REQUEST, getFavorites),
  takeLatest(ActionTypes.ADD_FAVORITES_REQUEST, addFavorites),
]);
