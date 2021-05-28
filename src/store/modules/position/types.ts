import { Alert, Position } from '../../../interfaces';

/* eslint-disable no-shadow */
export enum ActionTypes {
  GET_POSITION_REQUEST = '@position/GET_POSITION_REQUEST',
  GET_POSITION_SUCCESS = '@position/GET_POSITION_SUCCESS',
  GET_POSITION_FAILURE = '@position/GET_POSITION_FAILURE',
  SET_POSITION_REQUEST = '@position/SET_POSITION_REQUEST',
  SET_POSITION_SUCCESS = '@position/SET_POSITION_SUCCESS',
  SET_POSITION_FAILURE = '@position/SET_POSITION_FAILURE',
}

export interface GetPositionRequest {
  type: typeof ActionTypes.GET_POSITION_REQUEST;
}

export interface GetPositionSuccess {
  type: typeof ActionTypes.GET_POSITION_SUCCESS;
  payload: {
    position: Position;
  };
}

export interface GetPositionFailure {
  type: typeof ActionTypes.GET_POSITION_FAILURE;
  payload: {
    alert: Alert;
  };
}

export interface SetPositionRequest {
  type: typeof ActionTypes.SET_POSITION_REQUEST;
  payload: {
    position: Position;
  };
}

export interface SetPositionSuccess {
  type: typeof ActionTypes.SET_POSITION_SUCCESS;
  payload: {
    position: Position;
  };
}

export interface SetPositionFailure {
  type: typeof ActionTypes.SET_POSITION_FAILURE;
  payload: {
    alert: Alert;
  };
}
