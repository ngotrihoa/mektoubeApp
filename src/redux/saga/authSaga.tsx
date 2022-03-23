import {call, put} from 'redux-saga/effects';
import {signin, signup} from '../../api/axiosAuth';
import {StatusCodeHttp} from '../../common/const';
import {
  signinFailedActions,
  signinSucceedActions,
  signupFailedActions,
  signupSucceedActions,
} from '../actions/authActions';

const authSaga = {
  *signin(action: any) {
    try {
      const data = {
        login: action.payload.email,
        password: action.payload.password,
        validitySeconds: 670000,
      };
      const response = yield call(() => signin(data));

      if (response.status === StatusCodeHttp.SUCCESS) {
        yield put(signinSucceedActions(response.data.CONTENT));
      }
    } catch (error) {
      const errorResponse = error.response;
      yield put(signinFailedActions(errorResponse));
    }
  },
  *signup(action: any) {
    try {
      const response = yield call(() => signup(action.payload));

      if (response.status === StatusCodeHttp.SUCCESS) {
        yield put(signupSucceedActions(response.data.CONTENT));
      }
    } catch (error) {
      const errorResponse = error.response;
      console.log('🚀 ~ errorResponse', errorResponse);
      yield put(signupFailedActions(errorResponse));
    }
  },
};

export default authSaga;
