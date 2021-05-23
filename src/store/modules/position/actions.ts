import { Position } from '../../../interfaces';
import { setError } from '../error/actions';
import { ActionTypes } from './types';

export function setPositionRequest() {
  return {
    type: ActionTypes.SET_POSITION_REQUEST,
  };
}

export function setPositionSuccess(position: Position) {
  return {
    type: ActionTypes.SET_POSITION_SUCCESS,
    payload: {
      position,
    },
  };
}

export function setPositionFailure(error: Error | string | null) {
  return setError(error);
}
