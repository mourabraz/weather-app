import { Reducer } from 'redux';

import { Current } from '../../../models/Current';
import { ActionTypes } from './types';

const INITIAL_STATE = null;

const current: Reducer<Current | null> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CURRENT_SUCCESS: {
      return action.payload.current;
    }
    default: {
      return state;
    }
  }
};

export default current;
