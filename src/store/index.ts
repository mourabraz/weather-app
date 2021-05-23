import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Position } from '../interfaces';

import rootReducer from './modules/rootReducer';

export interface State {
  position: Position;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
