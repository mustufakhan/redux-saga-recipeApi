import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import createSagamiddleware from  'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagamiddleware();
const middleware = [sagaMiddleware]

if(process.env.NODE_ENV === 'developement'){
	middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;