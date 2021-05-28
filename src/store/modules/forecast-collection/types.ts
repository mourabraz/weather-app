import { Alert } from '../../../interfaces';
import { DailyForecast } from '../../../models/DailyForecast';
import { ForecastCollection } from '../../../models/ForecastCollection';

/* eslint-disable no-shadow */
export enum ActionTypes {
  GET_FORECAST_COLLECTION_REQUEST = '@collection/GET_FORECAST_COLLECTION_REQUEST',
  GET_FORECAST_COLLECTION_SUCCESS = '@collection/GET_FORECAST_COLLECTION_SUCCESS',
  GET_FORECAST_COLLECTION_FAILURE = '@collection/GET_FORECAST_COLLECTION_FAILURE',
  GET_FORECAST_COLLECTION_SELECTED = '@collection/GET_FORECAST_COLLECTION_SELECTED',
  SET_FORECAST_COLLECTION_SELECTED = '@collection/SET_FORECAST_COLLECTION_SELECTED',
}

export interface GetForecastCollectionRequest {
  type: typeof ActionTypes.GET_FORECAST_COLLECTION_REQUEST;
}

export interface GetForecastCollectionSuccess {
  type: typeof ActionTypes.GET_FORECAST_COLLECTION_SUCCESS;
  payload: {
    forecastCollection: ForecastCollection;
  };
}

export interface GetForecastCollectionFailure {
  type: typeof ActionTypes.GET_FORECAST_COLLECTION_FAILURE;
  payload: {
    alert: Alert;
  };
}

export interface SetForecastCollectionSelected {
  type: ActionTypes.SET_FORECAST_COLLECTION_SELECTED;
  payload: {
    dailyForecast: DailyForecast;
  };
}
