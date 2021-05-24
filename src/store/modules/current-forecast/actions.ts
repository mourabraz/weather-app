import { AppError } from '../../../interfaces';
import { CurrentForecast } from '../../../models/CurrentForecast';
import {
  ActionTypes,
  GetCurrentForecastFailure,
  GetCurrentForecastRequest,
  GetCurrentForecastSuccess,
} from './types';

export function getCurrentForecastRequest(): GetCurrentForecastRequest {
  return {
    type: ActionTypes.GET_CURRENT_FORECAST_REQUEST,
  };
}

export function getCurrentForecastSuccess(
  current: CurrentForecast,
): GetCurrentForecastSuccess {
  return {
    type: ActionTypes.GET_CURRENT_FORECAST_SUCCESS,
    payload: {
      current,
    },
  };
}

export function getCurrentForecastFailure(
  error: AppError | null,
): GetCurrentForecastFailure {
  return {
    type: ActionTypes.GET_CURRENT_FORECAST_FAILURE,
    payload: {
      error,
    },
  };
}
