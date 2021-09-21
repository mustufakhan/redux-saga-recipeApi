import {combineReducers} from 'redux';
import recipesReducer from './reducer';

const rootReducer = combineReducers({
	data: recipesReducer,
})

export default rootReducer;