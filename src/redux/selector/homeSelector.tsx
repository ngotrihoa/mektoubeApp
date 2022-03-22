import {createSelector} from 'reselect';

const selectSelf = state => state.home;

const selectListUser = createSelector(selectSelf, state => state.listUsers);

const selectIsHomeLoading = createSelector(
  selectSelf,
  state => state.isLoading,
);

export {selectListUser, selectIsHomeLoading};
