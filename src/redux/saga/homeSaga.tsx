import {call, put} from 'redux-saga/effects';
import {getListUser} from '../../api/axiosClient';
import {StatusCodeHttp} from '../../common/const';
import {
  getListUserFailedAction,
  getListUserSucceedAction,
  getMoreUserFailedAction,
  getMoreUserSucceedAction,
} from '../actions/homeAction';

const homeSaga = {
  *getListUser(payload: any) {
    try {
      const response = yield call(() => getListUser(payload || {}));
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield put(getListUserSucceedAction(response.data.CONTENT));
      }
    } catch (error) {
      const errorResponse = error.response;
      yield put(getListUserFailedAction(errorResponse));
    }
  },

  *getMoreUser(payload: any) {
    try {
      const response = yield call(() => getListUser(payload || {}));
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield put(getMoreUserSucceedAction(response.data.CONTENT));
      }
    } catch (error) {
      const errorResponse = error.response;
      yield put(getMoreUserFailedAction(errorResponse));
    }
  },
};

export default homeSaga;
