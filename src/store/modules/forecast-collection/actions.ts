import { AppError } from '../../../interfaces';
import { ForecastCollection } from '../../../models/ForecastCollection';
import { ActionTypes } from './types';

export function getForecastCollectionRequest() {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_REQUEST,
  };
}

export function getForecastCollectionSuccess(
  forecastCollection: ForecastCollection,
) {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_SUCCESS,
    payload: {
      forecastCollection,
    },
  };
}

export function getForecastCollectionFailure(error: AppError | null) {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_FAILURE,
    payload: {
      error,
    },
  };
}
