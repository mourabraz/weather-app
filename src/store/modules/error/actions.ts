import { ActionTypes } from './types';

export function addError(error: Error | string | null) {
  return {
    type: ActionTypes.ADD_ERROR,
    payload: {
      error,
    },
  };
}
