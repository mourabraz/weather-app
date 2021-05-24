import { AppError } from '../../../interfaces';
import { ForecastCollection } from '../../../models/ForecastCollection';

/* eslint-disable no-shadow */
export enum ActionTypes {
  GET_FORECAST_COLLECTION_REQUEST = '@collection/GET_FORECAST_COLLECTION_REQUEST',
  GET_FORECAST_COLLECTION_SUCCESS = '@collection/GET_FORECAST_COLLECTION_SUCCESS',
  GET_FORECAST_COLLECTION_FAILURE = '@collection/GET_FORECAST_COLLECTION_FAILURE',
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
    error: AppError | null;
  };
}
