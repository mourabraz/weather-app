import { AppError, Position } from '../../../interfaces';
import {
  ActionTypes,
  GetPositionFailure,
  GetPositionRequest,
  GetPositionSuccess,
} from './types';

export function getPositionRequest(): GetPositionRequest {
  return {
    type: ActionTypes.GET_POSITION_REQUEST,
  };
}

export function getPositionSuccess(position: Position): GetPositionSuccess {
  return {
    type: ActionTypes.GET_POSITION_SUCCESS,
    payload: {
      position,
    },
  };
}

export function getPositionFailure(error: AppError | null): GetPositionFailure {
  return {
    type: ActionTypes.GET_POSITION_FAILURE,
    payload: {
      error,
    },
  };
}
