import { AppError } from '../../../interfaces';
import { DailyForecast } from '../../../models/DailyForecast';
import { ForecastCollection } from '../../../models/ForecastCollection';
import {
  ActionTypes,
  GetForecastCollectionFailure,
  GetForecastCollectionRequest,
  GetForecastCollectionSuccess,
  SetForecastCollectionSelected,
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

export function setForecastCollectionSelected(
  dailyForecast: DailyForecast,
): SetForecastCollectionSelected {
  return {
    type: ActionTypes.SET_FORECAST_COLLECTION_SELECTED,
    payload: {
      dailyForecast,
    },
  };
}
