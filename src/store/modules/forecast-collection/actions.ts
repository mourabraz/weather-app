import { Alert } from '../../../interfaces';
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
  alert: Alert,
): GetForecastCollectionFailure {
  return {
    type: ActionTypes.GET_FORECAST_COLLECTION_FAILURE,
    payload: {
      alert,
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
