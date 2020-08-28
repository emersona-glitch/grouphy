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

const giphyListReducer = (state = '', action) => {
    if (action.type === 'SET_SEARCH') {
        return action.payload;
        
    }
    return state;
}

const favoritesReducer = (state = [], action) => {
    if (action.type === 'SET_FAVORITES'){
        return action.payload;
    } 
    return state;
}

//get request path app.js -> index.js (saga) -> server.js -> database
function* fetchSearch(action) {
    //try catch for errors
    try{
        //make our get request to server side 
        //response is our rows of data
        let response = yield axios.get(`/api/search?q=${action.payload}`);
        console.log(response.data.data);
        //dispatch (put) to save in reducer
        let randomIndex = Math.floor(Math.random() * 26);
        yield put({ type: 'SET_SEARCH', payload: response.data.data[randomIndex].images.original.url });
    } catch(error) {
        console.log('error fetching search', error);
    }
}

function* fetchFavorites(){
    try{
        let response = yield axios.get('/api/favorite');
        console.log(response.data);
        yield put ({type: 'SET_FAVORITES', payload: response.data});
    } catch (error) {
        console.log('error in getting favorites', error)
    }
}

function* putCategory(action){
    try{
        let favId = action.payload.id
        console.log('put', favId)
        yield axios.put(`/api/favorite/${favId}`, action.payload)
        yield put ({ type: 'FETCH_FAVORITES' })
    } catch(error){
        console.log('error in put category', error)
    }
}

function* addFavorite(action){
    try{
        console.log(action.payload);
        let response = yield axios.post('/api/favorite', {url: action.payload})
        console.log(response.data)
        yield put ({type: 'FETCH_FAVORITES'})
    } catch (error) {
        console.log('error setting favorite', error)
    }
}


//saga root, watching for actions from app.js
function* watcherSaga() {
    yield takeEvery('FETCH_SEARCH', fetchSearch);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('PUT_CATEGORY', putCategory);
    yield takeEvery('ADD_FAVORITE', addFavorite);
}

//saga middleware creation
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    //reducers run every time an action is placed
    combineReducers({
        giphyListReducer,
        favoritesReducer
    }),
    //logger always goes last
    applyMiddleware(sagaMiddleware, logger),
);

//saga engine start
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
