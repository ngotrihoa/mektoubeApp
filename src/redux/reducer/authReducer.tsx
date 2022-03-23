import {authActionType} from '../actions/actionsType';

const initialState = {
  userInfo: null,
  pictures: null,
  token: null,
  isLoadingAuth: false,
  authError: null,
};

const handleSignin = (state, payload) => {
  return {
    ...state,
    isLoadingAuth: true,
  };
};

const handleSignout = (state, payload) => {
  return {...initialState};
};

const handleSigninSucceed = (state, payload) => {
  return {
    ...state,
    isLoadingAuth: false,
    userInfo: payload.USER,
    pictures: payload.PICTURES,
    token: payload.token,
    authError: null,
  };
};

const handleSigninFailed = (_, payload) => {
  return {
    ...initialState,
    isLoadingAuth: false,
    authError: payload.data.errors[0],
  };
};
const handleSignup = (state, payload) => {
  return {
    ...state,
    isLoadingAuth: true,
  };
};

const handleSignupSucceed = (state, payload) => {
  console.log('🚀 ~ payload', payload);
  return {
    ...state,
    isLoadingAuth: false,
    token: payload.AUTH.token,
    authError: null,
  };
};

const handleSignupFailed = (_, payload) => {
  return {
    ...initialState,
    isLoadingAuth: false,
    authError: payload.data.errors[0],
  };
};

const handleSetIsLoadingAuth = (state, payload) => {
  return {...state, isLoadingAuth: payload, authError: null};
};

const handleResetAuthError = (state, payload) => {
  return {...state, authError: null};
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case authActionType.SIGNIN:
      return handleSignin(state, action.payload);

    case authActionType.SIGNIN_SUCCEED:
      return handleSigninSucceed(state, action.payload);

    case authActionType.SIGNIN_FAILED:
      return handleSigninFailed(state, action.payload);

    case authActionType.SIGNUP:
      return handleSignup(state, action.payload);

    case authActionType.SIGNUP_SUCCEED:
      return handleSignupSucceed(state, action.payload);

    case authActionType.SIGNUP_FAILED:
      return handleSignupFailed(state, action.payload);

    case authActionType.SET_IS_LOADING_AUTH:
      return handleSetIsLoadingAuth(state, action.payload);

    case authActionType.RESET_AUTH_ERROR:
      return handleResetAuthError(state, action.payload);

    case authActionType.SIGNOUT:
      return handleSignout(state, action.payload);

    default:
      return {...state};
  }
};

export default authReducer;
