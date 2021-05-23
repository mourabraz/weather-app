import { combineReducers } from 'redux';

import position from './position/reducer';
import error from './error/reducer';
import current from './current/reducer';

export default combineReducers({
  position,
  error,
  current,
});
