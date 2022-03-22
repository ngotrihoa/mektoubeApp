import {homeActionType} from '../actions/actionsType';

const initialState = {
  listUsers: null,
  isLoading: false,
};

const handleGetListUsersSucceed = (state, payload) => {
  return {...state, isLoading: false, listUsers: payload.USERS};
};

const handleGetListUsersFailed = (state, payload) => {
  return {...state, isLoading: false};
};

const handleSetIsLoading = (state, payload) => {
  return {...state, isLoading: payload};
};

const handleGetMoreUsersSucceed = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    listUsers: [...state.listUsers, ...payload.USERS],
  };
};
const handleGetMoreUsersFailed = (state, payload) => {
  return {...state, isLoading: false};
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeActionType.GET_LIST_USERS_SUCCEED:
      return handleGetListUsersSucceed(state, action.payload);

    case homeActionType.GET_LIST_USERS_FAILED:
      return handleGetListUsersFailed(state, action.payload);

    case homeActionType.SET_IS_LOADING:
      return handleSetIsLoading(state, action.payload);

    case homeActionType.GET_MORE_USERS_SUCCEED:
      return handleGetMoreUsersSucceed(state, action.payload);

    case homeActionType.GET_MORE_USERS_FAILED:
      return handleGetMoreUsersFailed(state, action.payload);

    default:
      return {...state};
  }
};

export default homeReducer;
