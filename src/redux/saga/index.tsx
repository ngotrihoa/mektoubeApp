import {all, takeLatest} from 'redux-saga/effects';
import {authActionType} from '../actions/actionsType';
import authSaga from './authSaga';

function* rootSaga() {
  yield all([takeLatest(authActionType.SIGNIN, authSaga.signin)]);
}

export default rootSaga;
