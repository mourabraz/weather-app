import { Reducer } from 'redux';
import { ActionTypes } from './types';

const INITIAL_STATE = null;

const error: Reducer<Error | string | null> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR: {
      return action.payload.error;
    }
    default: {
      return state;
    }
  }
};

export default error;
