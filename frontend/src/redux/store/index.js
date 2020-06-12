import { createStore, compose, applyMiddleware, } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddlware from 'redux-saga';
import { createBrowserHistory } from 'history';

import rootReducer from "../reducers";
import rootSaga from "../sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddlware();
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;