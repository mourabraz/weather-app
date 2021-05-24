import { AppError } from '../../../interfaces';
import { ActionTypes, AddError, ClearError } from './types';

export function addError(error: AppError | null): AddError {
  return {
    type: ActionTypes.ADD_ERROR,
    payload: {
      error,
    },
  };
}

export function clearError(): ClearError {
  return {
    type: ActionTypes.CLEAR_ERROR,
  };
}
