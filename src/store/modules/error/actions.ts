import { AppError } from '../../../interfaces';
import { ActionTypes } from './types';

export function addError(error: AppError | null) {
  return {
    type: ActionTypes.ADD_ERROR,
    payload: {
      error,
    },
  };
}

export function clearError() {
  return {
    type: ActionTypes.CLEAR_ERROR,
  };
}
