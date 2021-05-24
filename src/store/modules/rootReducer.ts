import { combineReducers } from 'redux';

import position from './position/reducer';
import error from './error/reducer';
import currentForecast from './current-forecast/reducer';

export default combineReducers({
  position,
  error,
  currentForecast,
});
