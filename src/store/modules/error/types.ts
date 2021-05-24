/* eslint-disable no-shadow */
import { AppError } from '../../../interfaces';

export enum ActionTypes {
  ADD_ERROR = '@error/ADD_ERROR',
  CLEAR_ERROR = '@error/CLEAR_ERROR',
}

export interface AddError {
  type: typeof ActionTypes.ADD_ERROR;
  payload: {
    error: AppError | null;
  };
}

export interface ClearError {
  type: typeof ActionTypes.CLEAR_ERROR;
}
