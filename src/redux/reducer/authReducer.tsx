import {authActionType} from '../actions/actionsType';

const initialState = {
  userInfo: null,
  pictures: null,
  token: null,
  isLoadingAuth: false,
  authError: null,
};

const handleSigninSucceed = (state, payload) => {
  return {
    ...state,
    userInfo: payload.USER,
    pictures: payload.PICTURES,
    token: payload.token,
    authError: null,
  };
};

const handleSetIsLoadingAuth = (state, payload) => {
  return {...state, isLoadingAuth: payload, authError: null};
};

const handleSigninFailed = (_, payload) => {
  return {...initialState, authError: payload.data.errors[0]};
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case authActionType.SIGNIN_SUCCEED:
      return handleSigninSucceed(state, action.payload);

    case authActionType.SIGNIN_FAILED:
      return handleSigninFailed(state, action.payload);

    case authActionType.SET_IS_LOADING_AUTH:
      return handleSetIsLoadingAuth(state, action.payload);

    default:
      return {...state};
  }
};

export default authReducer;
