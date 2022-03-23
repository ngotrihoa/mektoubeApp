import {all, takeLatest} from 'redux-saga/effects';
import {
  authActionType,
  signupActionType,
  homeActionType,
} from '../actions/actionsType';
import authSaga from './authSaga';
import signupSaga from './signupSaga';
import homeSaga from './homeSaga';

function* rootSaga() {
  yield all([
    takeLatest(authActionType.SIGNIN, authSaga.signin),
    takeLatest(authActionType.SIGNUP, authSaga.signup),
    takeLatest(signupActionType.GET_ASYNC_ORIGIN, signupSaga.getOriginAsync),
    takeLatest(
      signupActionType.GET_CITY_BY_GEOLOCATION,
      signupSaga.getCityByGeolocation,
    ),
    takeLatest(signupActionType.GET_ASYNC_COUNTRY, signupSaga.getCountryAsync),
    takeLatest(signupActionType.GET_CITY_BY_REGION, signupSaga.getCityByRegion),
    takeLatest(
      signupActionType.GET_REGION_BY_COUNTRY,
      signupSaga.getRegionByCountry,
    ),
    takeLatest(homeActionType.GET_LIST_USERS, homeSaga.getListUser),
    takeLatest(homeActionType.GET_MORE_USERS, homeSaga.getMoreUser),
  ]);
}

export default rootSaga;
