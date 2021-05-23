import { combineReducers } from 'redux';

import position from './position/reducer';
import error from './error/reducer';

export default combineReducers({
  position,
  error,
});
