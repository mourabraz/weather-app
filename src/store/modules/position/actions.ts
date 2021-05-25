import { AppError, Position } from '../../../interfaces';
import {
  ActionTypes,
  GetPositionFailure,
  GetPositionRequest,
  GetPositionSuccess,
  SetPositionFailure,
  SetPositionRequest,
  SetPositionSuccess,
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

export function setPositionRequest(position: Position): SetPositionRequest {
  return {
    type: ActionTypes.SET_POSITION_REQUEST,
    payload: {
      position,
    },
  };
}

export function setPositionSuccess(position: Position): SetPositionSuccess {
  return {
    type: ActionTypes.SET_POSITION_SUCCESS,
    payload: {
      position,
    },
  };
}

export function setPositionFailure(error: AppError | null): SetPositionFailure {
  return {
    type: ActionTypes.SET_POSITION_FAILURE,
    payload: {
      error,
    },
  };
}
