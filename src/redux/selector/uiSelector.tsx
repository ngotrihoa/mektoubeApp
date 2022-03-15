import {createSelector} from 'reselect';

const selectSelf = state => state.ui;

const selectSnackbar = createSelector(selectSelf, state => state.snackbar);
const selectIsLoadingGlobal = createSelector(
  selectSelf,
  state => state.isLoadingGlobal,
);

export {selectSnackbar, selectIsLoadingGlobal};
