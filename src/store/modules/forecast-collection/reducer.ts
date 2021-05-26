import { Reducer } from 'redux';

import { ForecastCollection } from '../../../models/ForecastCollection';
import { ActionTypes } from './types';

const INITIAL_STATE = null;

const forecastCollection: Reducer<ForecastCollection | null> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.GET_FORECAST_COLLECTION_SUCCESS: {
      return action.payload.forecastCollection;
    }
    case ActionTypes.SET_FORECAST_COLLECTION_SELECTED: {
      return {
        ...state,
        selectedDay: action.payload.dailyForecast,
      };
    }
    default: {
      return state;
    }
  }
};

export default forecastCollection;
