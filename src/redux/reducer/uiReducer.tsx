import {uiActionType} from '../actions/actionsType';

const initialState = {
  isLoadingGlobal: false,
  snackbar: {
    type: 'info',
    message: null,
    time: null,
  },
};

const handleSetSnackbarSuccess = (state, payload) => {
  return {
    ...state,
    snackbar: {
      type: payload.type,
      message: payload.message,
      time: Date.now(),
    },
  };
};

const handleSetSpinLoadingGlobal = (state, payload) => {
  return {...state, isLoadingGlobal: payload};
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActionType.SET_SNACKBAR:
      return handleSetSnackbarSuccess(state, action.payload);

    case uiActionType.SET_SPIN_LOADING_GLOBAL:
      return handleSetSpinLoadingGlobal(state, action.payload);

    default:
      return {...state};
  }
};

export default uiReducer;
