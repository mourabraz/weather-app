import { Reducer } from 'redux';

import { CurrentForecast } from '../../../models/CurrentForecast';
import { ActionTypes } from './types';

const INITIAL_STATE = null;

const currentForecast: Reducer<CurrentForecast | null> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.GET_CURRENT_FORECAST_SUCCESS: {
      return action.payload.current;
    }
    default: {
      return state;
    }
  }
};

export default currentForecast;
