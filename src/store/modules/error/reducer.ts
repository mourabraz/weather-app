import { Reducer } from 'redux';
import { ActionTypes } from './types';
import { ActionTypes as ActionTypesPosition } from '../position/types';
import { ActionTypes as ActionTypesCurrent } from '../current/types';

const INITIAL_STATE = null;

const error: Reducer<Error | string | null> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_ERROR:
    case ActionTypesPosition.GET_POSITION_FAILURE:
    case ActionTypesCurrent.GET_CURRENT_FAILURE: {
      return action.payload.error;
    }
    default: {
      return state;
    }
  }
};

export default error;
