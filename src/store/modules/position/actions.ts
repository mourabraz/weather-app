import { Position } from '../../../interfaces';
import { ActionTypes } from './types';

export function getPositionRequest() {
  return {
    type: ActionTypes.GET_POSITION_REQUEST,
  };
}

export function getPositionSuccess(position: Position) {
  return {
    type: ActionTypes.GET_POSITION_SUCCESS,
    payload: {
      position,
    },
  };
}

export function getPositionFailure(error: Error | string | null) {
  return {
    type: ActionTypes.GET_POSITION_FAILURE,
    payload: {
      error,
    },
  };
}
