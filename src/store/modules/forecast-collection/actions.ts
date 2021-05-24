import { AppError } from '../../../interfaces';
import { ForecastCollection } from '../../../models/ForecastCollection';
import {
  ActionTypes,
  GetForecastCollectionFailure,
  GetForecastCollectionRequest,
  GetForecastCollectionSuccess,
} from './types';

export function getForecastCollectionRequest(): GetForecastCollectionRequest {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_REQUEST,
  };
}

export function getForecastCollectionSuccess(
  forecastCollection: ForecastCollection,
): GetForecastCollectionSuccess {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_SUCCESS,
    payload: {
      forecastCollection,
    },
  };
}

export function getForecastCollectionFailure(
  error: AppError | null,
): GetForecastCollectionFailure {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_FAILURE,
    payload: {
      error,
    },
  };
}
