import { Alert } from '../../../interfaces';
import { City } from '../../../models/City';
import {
  ActionTypes,
  GetFavoritesRequest,
  GetFavoritesSuccess,
  Refresh,
  ToggleFavoritesFailure,
  ToggleFavoritesRequest,
  ToggleFavoritesSuccess,
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

export function toggleFavoritesRequest(): ToggleFavoritesRequest {
  return {
    type: ActionTypes.TOGGLE_FAVORITES_REQUEST,
  };
}

export function toggleFavoritesSuccess(
  favorite: City,
  action: 'ADD' | 'REMOVE',
): ToggleFavoritesSuccess {
  return {
    type: ActionTypes.TOGGLE_FAVORITES_SUCCESS,
    payload: {
      favorite,
      action,
    },
  };
}

export function toggleFavoritesFailure(alert: Alert): ToggleFavoritesFailure {
  return {
    type: ActionTypes.TOGGLE_FAVORITES_FAILURE,
    payload: {
      alert,
    },
  };
}
