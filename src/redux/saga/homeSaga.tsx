import {call, put} from 'redux-saga/effects';
import {getListUser} from '../../api/axiosClient';
import {StatusCodeHttp} from '../../common/const';
import {getListUserSucceedAction} from '../actions/homeAction';

const homeSaga = {
  *getListUser(payload: any) {
    try {
      const response = yield call(() => getListUser(payload || {}));
      if (response.status === StatusCodeHttp.SUCCESS) {
        yield put(getListUserSucceedAction(response.data.CONTENT));
      }
    } catch (error) {}
  },
};

export default homeSaga;
