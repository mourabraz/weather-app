import { AppError } from '../../../interfaces';
import { City } from '../../../models/City';
import {
  ActionTypes,
  AddFavoritesFailure,
  AddFavoritesRequest,
  AddFavoritesSuccess,
  GetFavoritesRequest,
  GetFavoritesSuccess,
  Refresh,
} from './types';

export function refresh(): Refresh {
  return {
    type: ActionTypes.REFRESH,
  };
}

export function getFavoritesRequest(): GetFavoritesRequest {
  return {
    type: ActionTypes.GET_FAVORITES_REQUEST,
  };
}

export function getFavoritesSuccess(favorites: City[]): GetFavoritesSuccess {
  return {
    type: ActionTypes.GET_FAVORITES_SUCCESS,
    payload: {
      favorites,
    },
  };
}

export function addFavoritesRequest(favorite: City): AddFavoritesRequest {
  return {
    type: ActionTypes.ADD_FAVORITES_REQUEST,
    payload: {
      favorite,
    },
  };
}

export function addFavoritesSuccess(favorite: City): AddFavoritesSuccess {
  return {
    type: ActionTypes.ADD_FAVORITES_SUCCESS,
    payload: {
      favorite,
    },
  };
}

export function addFavoritesFailure(
  error: AppError | null,
): AddFavoritesFailure {
  return {
    type: ActionTypes.ADD_FAVORITES_FAILURE,
    payload: {
      error,
    },
  };
}
