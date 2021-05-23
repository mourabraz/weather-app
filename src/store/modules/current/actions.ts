import { Current } from '../../../models/Current';
import { ActionTypes } from './types';

export function getCurrentRequest() {
  return {
    type: ActionTypes.GET_CURRENT_REQUEST,
  };
}

export function getCurrentSuccess(current: Current) {
  return {
    type: ActionTypes.GET_CURRENT_SUCCESS,
    payload: {
      current,
    },
  };
}

export function getCurrentFailure(error: Error | string | null) {
  return {
    type: ActionTypes.GET_CURRENT_FAILURE,
    payload: {
      error,
    },
  };
}
