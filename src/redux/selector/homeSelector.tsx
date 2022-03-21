import {createSelector} from 'reselect';

const selectSelf = state => state.home;

const selectListUser = createSelector(selectSelf, state => state.listUsers);

export {selectListUser};
