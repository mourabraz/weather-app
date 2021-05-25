import { Reducer } from 'redux';

import { Position } from '../../../interfaces';
import { ActionTypes } from './types';

const INITIAL_STATE = null;

const position: Reducer<Position | null> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSITION_SUCCESS: {
      return action.payload.position;
    }
    case ActionTypes.SET_POSITION_SUCCESS: {
      return action.payload.position;
    }
    default: {
      return state;
    }
  }
};

export default position;
