import {all, takeLatest} from 'redux-saga/effects';
import {authActionType, signupActionType} from '../actions/actionsType';
import authSaga from './authSaga';
import signupSaga from './signupSaga';

function* rootSaga() {
  yield all([
    takeLatest(authActionType.SIGNIN, authSaga.signin),
    takeLatest(signupActionType.GET_ASYNC_ORIGIN, signupSaga.getOriginAsync),
    takeLatest(
      signupActionType.GET_CITY_BY_GEOLOCATION,
      signupSaga.getCityByGeolocation,
    ),
    takeLatest(signupActionType.GET_ASYNC_COUNTRY, signupSaga.getCountryAsync),
    takeLatest(
      signupActionType.GET_REGION_BY_COUNTRY,
      signupSaga.getRegionByCountry,
    ),
  ]);
}

export default rootSaga;
