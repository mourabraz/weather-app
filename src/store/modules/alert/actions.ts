import { Alert } from '../../../interfaces';
import { ActionTypes, AddAlert, ClearAlert } from './types';

export function addAlert(alert: Alert): AddAlert {
  return {
    type: ActionTypes.ADD_ALERT,
    payload: {
      alert,
    },
  };
}

export function clearAlert(): ClearAlert {
  return {
    type: ActionTypes.CLEAR_ALERT,
  };
}
