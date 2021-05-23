import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { Position } from '../interfaces';
import { Current } from '../models/Current';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface State {
  position: Position;
  error: Error | string | null;
  current: Current | null;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
