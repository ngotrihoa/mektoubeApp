import {call, put} from 'redux-saga/effects';
import {signin} from '../../api/axiosAuth';
import {StatusCodeHttp} from '../../common/const';
import {signinActions, signinFailedActions} from '../actions/authActions';

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
        yield put(signinActions(response.data));
      }
    } catch (error) {
      const errorResponse = error.response;
      yield put(signinFailedActions({status: errorResponse?.status || 400}));
    }
  },
};

export default authSaga;
