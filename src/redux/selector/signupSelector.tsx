import {createSelector} from 'reselect';

const selectSelf = state => state.signup;

const selectEntityStore = createSelector(selectSelf, state => state.entity);
const selectBirthdayStore = createSelector(selectSelf, state => state.birthday);
const selectBirthdayFormatStore = createSelector(selectSelf, state => {
  return `${state.birthday.year}-${state.birthday.month}-${state.birthday.day}`;
});
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

const selectDataSignup = createSelector(
  selectEntityStore,
  selectBirthdayFormatStore,
  selectOriginStore,
  selectCitySelected,
  (gender, birthday, origin, city) => {
    return {
      affiliate: 1,
      mailing: 1,
      birthday,
      gender: gender === 'Male' ? 1 : 2,
      origin: origin[0]?.id,
      geoname_id: city.id,
    };
  },
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
  selectBirthdayFormatStore,
  selectDataSignup,
};
