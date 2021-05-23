import { Reducer } from 'redux';

import { Position } from '../../../interfaces';

const INITIAL_STATE = null;

const position: Reducer<Position | null> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@position/SET_POSITION': {
      return action.payload.position;
    }
    default: {
      return state;
    }
  }
};

export default position;
