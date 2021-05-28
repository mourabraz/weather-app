/* eslint-disable no-shadow */
import { Alert } from '../../../interfaces';

export enum ActionTypes {
  ADD_ALERT = '@alert/ADD_ALERT',
  CLEAR_ALERT = '@alert/CLEAR_ALERT',
}

export interface AddAlert {
  type: typeof ActionTypes.ADD_ALERT;
  payload: {
    alert: Alert;
  };
}

export interface ClearAlert {
  type: typeof ActionTypes.CLEAR_ALERT;
}
