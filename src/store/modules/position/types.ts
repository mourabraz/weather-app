import { AppError, Position } from '../../../interfaces';

/* eslint-disable no-shadow */
export enum ActionTypes {
  GET_POSITION_REQUEST = '@position/GET_POSITION_REQUEST',
  GET_POSITION_SUCCESS = '@position/GET_POSITION_SUCCESS',
  GET_POSITION_FAILURE = '@position/GET_POSITION_FAILURE',
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
    error: AppError | null;
  };
}
