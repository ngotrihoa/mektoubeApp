import {authActionType} from './actionsType';

const signinActions = (payload: any) => {
  return {
    type: authActionType.SIGNIN,
    payload,
  };
};

const signinSucceedActions = (payload: any) => {
  return {
    type: authActionType.SIGNIN_SUCCEED,
    payload,
  };
};

const signinFailedActions = (payload: any) => {
  return {
    type: authActionType.SIGNIN_FAILED,
    payload,
  };
};
const signupActions = (payload: any) => {
  return {
    type: authActionType.SIGNUP,
    payload,
  };
};

const signupSucceedActions = (payload: any) => {
  return {
    type: authActionType.SIGNUP_SUCCEED,
    payload,
  };
};

const signupFailedActions = (payload: any) => {
  return {
    type: authActionType.SIGNUP_FAILED,
    payload,
  };
};

const setIsLoadingAuth = (payload: any) => {
  return {
    type: authActionType.SET_IS_LOADING_AUTH,
    payload,
  };
};

const resetAuthErrorAction = (payload: any) => {
  return {
    type: authActionType.RESET_AUTH_ERROR,
    payload,
  };
};

export {
  signinActions,
  signinFailedActions,
  signinSucceedActions,
  setIsLoadingAuth,
  signupActions,
  signupFailedActions,
  signupSucceedActions,
  resetAuthErrorAction,
};
