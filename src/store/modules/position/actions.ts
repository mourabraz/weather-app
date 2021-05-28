import { Alert, Position } from '../../../interfaces';
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

export function getPositionFailure(alert: Alert): GetPositionFailure {
  return {
    type: ActionTypes.GET_POSITION_FAILURE,
    payload: {
      alert,
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

export function setPositionFailure(alert: Alert): SetPositionFailure {
  return {
    type: ActionTypes.SET_POSITION_FAILURE,
    payload: {
      alert,
    },
  };
}
