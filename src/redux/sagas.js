import {takeLatest, all, put, fork, call} from 'redux-saga/effects';
import * as types from './actionType';
import {getRecipe} from './api';


export function* onLoadRecipeAsync({query}){
  try{
		console.log("query", query)
		const response = yield call(getRecipe, query);
		yield put({type: types.FETCH_RECIPE_SUCCESS, payload: response.data})
	}catch (error){
		yield put({type: types.FETCH_RECIPE_FAIL, payload: error})
	}
}

export function* onLoadRecipe(){
  yield takeLatest(types.FETCH_RECIPE_START, onLoadRecipeAsync)
}

const reciepeSaga = [fork(onLoadRecipe)];
 export default function* rootSaga(){
	 yield all([...reciepeSaga])
 }