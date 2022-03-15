import {createSelector} from 'reselect';

const selectSelf = state => state.signup;

const selectEntityStore = createSelector(selectSelf, state => state.entity);
const selectBirthdayStore = createSelector(selectSelf, state => state.birthday);
const selectOriginStore = createSelector(selectSelf, state => state.origin);
const selectCitiesStore = createSelector(selectSelf, state => state.cities);
const selectRegionsStore = createSelector(selectSelf, state => state.regions);
const selectCountriesStore = createSelector(
  selectSelf,
  state => state.countries,
);
const selectCountrySelected = createSelector(
  selectSelf,
  state => state.countrySelected,
);
const selectCitySelected = createSelector(
  selectSelf,
  state => state.citySelected,
);
const selectRegionSelected = createSelector(
  selectSelf,
  state => state.regionSelected,
);

export {
  selectEntityStore,
  selectOriginStore,
  selectBirthdayStore,
  selectCitiesStore,
  selectCitySelected,
  selectCountriesStore,
  selectCountrySelected,
  selectRegionSelected,
  selectRegionsStore,
};
