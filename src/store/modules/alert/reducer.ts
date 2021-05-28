import { Reducer } from 'redux';
import { ActionTypes } from './types';
import { ActionTypes as ActionTypesPosition } from '../position/types';
import { ActionTypes as ActionTypesCurrent } from '../current-forecast/types';
import { Alert } from '../../../interfaces';

const INITIAL_STATE = null;

const alert: Reducer<Alert | null> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ALERT:
    case ActionTypesPosition.GET_POSITION_FAILURE:
    case ActionTypesCurrent.GET_CURRENT_FORECAST_FAILURE: {
      return action.payload.alert;
    }
    case ActionTypes.CLEAR_ALERT: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default alert;
