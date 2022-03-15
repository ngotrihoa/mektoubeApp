import {all, call, put} from 'redux-saga/effects';
import {signin} from '../../api/axiosAuth';
import {StatusCodeHttp} from '../../common/const';
import {
  setIsLoadingAuth,
  signinFailedActions,
  signinSucceedActions,
} from '../actions/authActions';

const authSaga = {
  *signin(action: any) {
    try {
      yield put(setIsLoadingAuth(true));
      const data = {
        login: action.payload.email,
        password: action.payload.password,
        validitySeconds: 670000,
      };
      const response = yield call(() => signin(data));

      if (response.status === StatusCodeHttp.SUCCESS) {
        yield all([
          put(setIsLoadingAuth(false)),
          put(signinSucceedActions(response.data.CONTENT)),
        ]);
      }
    } catch (error) {
      const errorResponse = error.response;
      yield put(signinFailedActions(errorResponse));
    }
  },
};

export default authSaga;
