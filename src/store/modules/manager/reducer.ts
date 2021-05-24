import { Reducer } from 'redux';

import { City } from '../../../models/City';
import { ActionTypes } from './types';

const INITIAL_STATE: { favorites: City[] } = { favorites: [] };

const manager: Reducer<{ favorites: City[] }> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.GET_FAVORITES_SUCCESS: {
      return { favorites: action.payload.favorites };
    }
    case ActionTypes.TOGGLE_FAVORITES_SUCCESS: {
      if (action.payload.action === 'ADD') {
        return { favorites: [...state.favorites, action.payload.favorite] };
      }
      if (action.payload.action === 'REMOVE') {
        return {
          favorites: state.favorites.filter(
            i => i.id !== action.payload.favorite.id,
          ),
        };
      }

      return state;
    }
    default: {
      return state;
    }
  }
};

export default manager;
