import {homeActionType} from '../actions/actionsType';

const initialState = {
  listUsers: null,
};

const handleGetListUsersSucceed = (state, payload) => {
  return {...state, listUsers: payload.USERS};
};

const handleGetListUsersFailed = (state, payload) => {
  return {...state};
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeActionType.GET_LIST_USERS_SUCCEED:
      return handleGetListUsersSucceed(state, action.payload);

    case homeActionType.GET_LIST_USERS_FAILED:
      return handleGetListUsersFailed(state, action.payload);

    default:
      return {...state};
  }
};

export default homeReducer;
