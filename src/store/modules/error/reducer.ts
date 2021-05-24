import { Reducer } from 'redux';
import { ActionTypes } from './types';
import { ActionTypes as ActionTypesPosition } from '../position/types';
import { ActionTypes as ActionTypesCurrent } from '../current-forecast/types';
import { AppError } from '../../../interfaces';

const INITIAL_STATE = null;

const error: Reducer<AppError | null> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ERROR:
    case ActionTypesPosition.GET_POSITION_FAILURE:
    case ActionTypesCurrent.GET_CURRENT_FORECAST_FAILURE: {
      return action.payload.error;
    }
    case ActionTypes.CLEAR_ERROR: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default error;
