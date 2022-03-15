import {uiActionType} from './actionsType';

const setSnackbar = (payload: any) => {
  return {
    type: uiActionType.SET_SNACKBAR,
    payload,
  };
};

const setSpinLoadingGlobal = (payload: any) => {
  return {
    type: uiActionType.SET_SPIN_LOADING_GLOBAL,
    payload,
  };
};

export {setSnackbar, setSpinLoadingGlobal};
