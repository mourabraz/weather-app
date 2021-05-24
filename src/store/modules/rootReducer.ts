import { combineReducers } from 'redux';

import position from './position/reducer';
import error from './error/reducer';
import currentForecast from './current-forecast/reducer';
import forecastCollection from './forecast-collection/reducer';
import manager from './manager/reducer';

export default combineReducers({
  position,
  error,
  currentForecast,
  forecastCollection,
  manager,
});
