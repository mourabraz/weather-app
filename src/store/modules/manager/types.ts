import { AppError } from '../../../interfaces';
import { City } from '../../../models/City';

/* eslint-disable no-shadow */
export enum ActionTypes {
  REFRESH = '@manger/REFRESH',
  ADD_FAVORITES_REQUEST = '@manger/ADD_FAVORITES_REQUEST',
  ADD_FAVORITES_SUCCESS = '@manger/ADD_FAVORITES_SUCCESS',
  ADD_FAVORITES_FAILURE = '@manger/ADD_FAVORITES_FAILURE',
  GET_FAVORITES_REQUEST = '@manger/GET_FAVORITES_REQUEST',
  GET_FAVORITES_SUCCESS = '@manger/GET_FAVORITES_SUCCESS',
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

export interface AddFavoritesRequest {
  type: typeof ActionTypes.ADD_FAVORITES_REQUEST;
  payload: {
    favorite: City;
  };
}

export interface AddFavoritesSuccess {
  type: typeof ActionTypes.ADD_FAVORITES_SUCCESS;
  payload: {
    favorite: City;
  };
}

export interface AddFavoritesFailure {
  type: typeof ActionTypes.ADD_FAVORITES_FAILURE;
  payload: {
    error: AppError | null;
  };
}
