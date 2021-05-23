import { ActionTypes } from './types';

export function setError(error: Error | string | null) {
  return {
    type: ActionTypes.SET_ERROR,
    payload: {
      error,
    },
  };
}
