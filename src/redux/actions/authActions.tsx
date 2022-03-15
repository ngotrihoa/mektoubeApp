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

const setIsLoadingAuth = (payload: any) => {
  return {
    type: authActionType.SET_IS_LOADING_AUTH,
    payload,
  };
};

export {
  signinActions,
  signinFailedActions,
  signinSucceedActions,
  setIsLoadingAuth,
};
