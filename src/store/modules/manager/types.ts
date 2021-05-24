import { AppError } from '../../../interfaces';
import { City } from '../../../models/City';

/* eslint-disable no-shadow */
export enum ActionTypes {
  REFRESH = '@manager/REFRESH',
  TOGGLE_FAVORITES_REQUEST = '@manager/TOGGLE_FAVORITES_REQUEST',
  TOGGLE_FAVORITES_SUCCESS = '@manager/TOGGLE_FAVORITES_SUCCESS',
  TOGGLE_FAVORITES_FAILURE = '@manager/TOGGLE_FAVORITES_FAILURE',
  GET_FAVORITES_REQUEST = '@manager/GET_FAVORITES_REQUEST',
  GET_FAVORITES_SUCCESS = '@manager/GET_FAVORITES_SUCCESS',
}

export interface Refresh {
  type: typeof ActionTypes.REFRESH;
}

export interface GetFavoritesRequest {
  type: typeof ActionTypes.GET_FAVORITES_REQUEST;
}

export interface GetFavoritesSuccess {
  type: typeof ActionTypes.GET_FAVORITES_SUCCESS;
  payload: {
    favorites: City[];
  };
}

export interface ToggleFavoritesRequest {
  type: typeof ActionTypes.TOGGLE_FAVORITES_REQUEST;
}

export interface ToggleFavoritesSuccess {
  type: typeof ActionTypes.TOGGLE_FAVORITES_SUCCESS;
  payload: {
    action: 'ADD' | 'REMOVE';
    favorite: City;
  };
}

export interface ToggleFavoritesFailure {
  type: typeof ActionTypes.TOGGLE_FAVORITES_FAILURE;
  payload: {
    error: AppError | null;
  };
}
