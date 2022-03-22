import {all, call, put} from 'redux-saga/effects';
import {
  getCityByGeolocation,
  getCityByRegion,
  getCountries,
  getOrigins,
  getRegionByCountry,
} from '../../api/axiosClient';
import {StatusCodeHttp} from '../../common/const';
import {
  getCityByGeolocationFailed,
  getCityByGeolocationSucceed,
  getCityByRegionFailed,
  getCityByRegionSucceed,
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
      console.log('🚀 ~ responseError', responseError);
      yield all([
        put(setSpinLoadingGlobal(false)),
        put(getCityByGeolocationFailed(responseError)),
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
  *getCityByRegion(action) {
    try {
      yield put(setSpinLoadingGlobal(true));
      const response = yield call(() => getCityByRegion(action.payload || {}));
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield all([
          put(getCityByRegionSucceed(response.data.CONTENT.ALL)),
          put(setSpinLoadingGlobal(false)),
        ]);
      }
    } catch (error) {
      const responseError = error.response;
      yield all([
        put(getCityByRegionFailed(responseError)),
        put(setSpinLoadingGlobal(false)),
      ]);
    }
  },
};

export default signupSaga;
