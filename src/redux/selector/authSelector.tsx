import {createSelector} from 'reselect';

const selectSelf = state => state.auth;
const selectCurrentUserInfo = createSelector(
  selectSelf,
  state => state.userInfo,
);

const selectCurrentPicturedInfo = createSelector(
  selectSelf,
  state => state.pictures,
);

const selectIsLogin = createSelector(selectSelf, state => state.token);

const selectIsLoadingAuth = createSelector(
  selectSelf,
  state => state.isLoadingAuth,
);

const selectAuthError = createSelector(selectSelf, state => state.authError);

export {
  selectCurrentPicturedInfo,
  selectCurrentUserInfo,
  selectIsLogin,
  selectIsLoadingAuth,
  selectAuthError,
};
