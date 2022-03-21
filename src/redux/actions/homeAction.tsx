import {homeActionType} from './actionsType';

const getListUserAction = (payload: any) => {
  return {
    type: homeActionType.GET_LIST_USERS,
    payload,
  };
};

const getListUserSucceedAction = (payload: any) => {
  return {
    type: homeActionType.GET_LIST_USERS_SUCCEED,
    payload,
  };
};
const getListUserFailedAction = (payload: any) => {
  return {
    type: homeActionType.GET_LIST_USERS_FAILED,
    payload,
  };
};

export {getListUserAction, getListUserSucceedAction, getListUserFailedAction};
