import { Alert } from '../../../interfaces';
import { CurrentForecast } from '../../../models/CurrentForecast';

/* eslint-disable no-shadow */
export enum ActionTypes {
  GET_CURRENT_FORECAST_REQUEST = '@current/GET_CURRENT_FORECAST_REQUEST',
  GET_CURRENT_FORECAST_SUCCESS = '@current/GET_CURRENT_FORECAST_SUCCESS',
  GET_CURRENT_FORECAST_FAILURE = '@current/GET_CURRENT_FORECAST_FAILURE',
}

export interface GetCurrentForecastRequest {
  type: typeof ActionTypes.GET_CURRENT_FORECAST_REQUEST;
}

export interface GetCurrentForecastSuccess {
  type: typeof ActionTypes.GET_CURRENT_FORECAST_SUCCESS;
  payload: {
    current: CurrentForecast;
  };
}

export interface GetCurrentForecastFailure {
  type: typeof ActionTypes.GET_CURRENT_FORECAST_FAILURE;
  payload: {
    alert: Alert;
  };
}
