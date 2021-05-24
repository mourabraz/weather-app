import { CurrentForecast } from '../../../models/CurrentForecast';
import { ActionTypes } from './types';

export function getCurrentForecastRequest() {
  return {
    type: ActionTypes.GET_CURRENT_FORECAST_REQUEST,
  };
}

export function getCurrentForecastSuccess(current: CurrentForecast) {
  return {
    type: ActionTypes.GET_CURRENT_FORECAST_SUCCESS,
    payload: {
      current,
    },
  };
}

export function getCurrentForecastFailure(error: Error | string | null) {
  return {
    type: ActionTypes.GET_CURRENT_FORECAST_FAILURE,
    payload: {
      error,
    },
  };
}
