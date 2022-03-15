import {all, call, put} from 'redux-saga/effects';
import {
  getCityByGeolocation,
  getCountries,
  getOrigins,
  getRegionByCountry,
} from '../../api/axiosClient';
import {StatusCodeHttp} from '../../common/const';
import {
  getCityByGeolocationFailed,
  getCityByGeolocationSucceed,
  getCountryAsyncSucceed,
  getOriginAsyncFailed,
  getOriginAsyncSucceed,
  getRegionByCountryFailed,
  getRegionByCountrySucceed,
} from '../actions/signupActions';
import {setSpinLoadingGlobal} from '../actions/uiAction';

const signupSaga = {
  *getOriginAsync(action) {
    try {
      yield put(setSpinLoadingGlobal(true));
      const response = yield call(() => getOrigins(action.payload || {}));
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield all([
          put(getOriginAsyncSucceed(response.data)),
          put(setSpinLoadingGlobal(false)),
        ]);
      }
    } catch (error) {
      const responseError = error.response;
      yield all([
        put(getOriginAsyncFailed(responseError)),
        put(setSpinLoadingGlobal(false)),
      ]);
    }
  },

  *getCityByGeolocation(action) {
    try {
      yield put(setSpinLoadingGlobal(true));
      const response = yield call(() =>
        getCityByGeolocation(action.payload || {}),
      );
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield all([
          put(getCityByGeolocationSucceed(response.data.CONTENT)),
          put(setSpinLoadingGlobal(false)),
        ]);
      }
    } catch (error) {
      const responseError = error.response;
      yield all([
        put(getCityByGeolocationFailed(responseError)),
        put(setSpinLoadingGlobal(false)),
      ]);
    }
  },

  *getCountryAsync(action) {
    try {
      yield put(setSpinLoadingGlobal(true));
      const response = yield call(() => getCountries(action.payload || {}));
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield all([
          put(getCountryAsyncSucceed(response.data.CONTENT)),
          put(setSpinLoadingGlobal(false)),
        ]);
      }
    } catch (error) {
      const responseError = error.response;
      yield all([
        put(getCountryAsyncSucceed(responseError)),
        put(setSpinLoadingGlobal(false)),
      ]);
    }
  },

  *getRegionByCountry(action) {
    try {
      yield put(setSpinLoadingGlobal(true));
      const response = yield call(() =>
        getRegionByCountry(action.payload || {}),
      );
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield all([
          put(getRegionByCountrySucceed(response.data.CONTENT)),
          put(setSpinLoadingGlobal(false)),
        ]);
      }
    } catch (error) {
      const responseError = error.response;
      yield all([
        put(getRegionByCountryFailed(responseError)),
        put(setSpinLoadingGlobal(false)),
      ]);
    }
  },
};

export default signupSaga;
