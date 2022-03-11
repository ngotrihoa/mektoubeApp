import {authActionType} from './actionsType';

const signinActions = payload => {
  return {
    type: authActionType.LOGIN,
    payload,
  };
};

const signinSucceedActions = payload => {
  return {
    type: authActionType.SIGNIN_SUCCEED,
    payload,
  };
};

const signinFailedActions = payload => {
  return {
    type: authActionType.SIGNIN_FAILED,
    payload,
  };
};

export {signinActions, signinFailedActions, signinSucceedActions};
