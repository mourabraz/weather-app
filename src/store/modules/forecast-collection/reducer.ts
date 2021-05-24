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
    default: {
      return state;
    }
  }
};

export default forecastCollection;
