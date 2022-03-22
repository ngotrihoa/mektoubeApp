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

const setIsLoadingAction = (payload: any) => {
  return {
    type: homeActionType.SET_IS_LOADING,
    payload,
  };
};

const getMoreUserAction = (payload: any) => {
  return {
    type: homeActionType.GET_MORE_USERS,
    payload,
  };
};
const getMoreUserSucceedAction = (payload: any) => {
  return {
    type: homeActionType.GET_MORE_USERS_SUCCEED,
    payload,
  };
};
const getMoreUserFailedAction = (payload: any) => {
  return {
    type: homeActionType.GET_MORE_USERS_FAILED,
    payload,
  };
};

export {
  getListUserAction,
  getListUserSucceedAction,
  getListUserFailedAction,
  setIsLoadingAction,
  getMoreUserAction,
  getMoreUserSucceedAction,
  getMoreUserFailedAction,
};
