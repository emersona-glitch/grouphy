import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
//importing saga
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';







//saga root, watching for actions from app.js
function* watcherSaga() {

}

//saga middleware creation
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    //reducers run every time an action is placed
    combineReducers({

    }),
    //logger always goes last
    applyMiddleware(sagaMiddleware, logger),
);

//saga engine start
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
