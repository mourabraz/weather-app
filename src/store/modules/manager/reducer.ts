import { Reducer } from 'redux';

import { City } from '../../../models/City';
import { ActionTypes } from './types';

const INITIAL_STATE: City[] = [];

const manager: Reducer<City[]> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_FAVORITES_SUCCESS: {
      return action.payload.favorites;
    }
    case ActionTypes.ADD_FAVORITES_SUCCESS: {
      return [...state, action.payload.favorite];
    }
    default: {
      return state;
    }
  }
};

export default manager;
