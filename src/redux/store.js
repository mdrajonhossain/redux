
import {combineReducers,  createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/reducers';



const rootReducer = combineReducers({
	reduce: reducers,
})


const store = createStore(rootReducer, applyMiddleware(thunk))




export default store;