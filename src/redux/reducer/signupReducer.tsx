import {signupActionType} from '../actions/actionsType';

const initialState = {
  entity: null,
  birthday: {
    day: null,
    month: null,
    year: null,
  },
  citySelected: null,
  countrySelected: null,
  regionSelected: null,
  origin: null,
  cities: null,
  countries: null,
  regions: null,
};

const handleSetEntity = (state, payload: any) => {
  return {...state, entity: payload};
};
const handleSetBirthday = (state, payload: any) => {
  return {...state, birthday: payload};
};
const handleSetOrigin = (state, payload: any) => {
  return {...state, origin: payload};
};

const handleSetAsyncOriginSucceed = (state, payload: any[]) => {
  const origin = payload.map(item => {
    return {...item, selected: false};
  });
  return {...state, origin};
};
const handleSetAsyncOriginFailed = (state, payload: any) => {
  return {...state};
};

const handleSetSelectedCity = (state, payload: any) => {
  return {...state, citySelected: payload};
};

const handleSetSelectedCountry = (state, payload: any) => {
  return {...state, countrySelected: payload};
};

const handleGetCityByGeolocationSucceed = (state, payload) => {
  return {...state, cities: payload.cities};
};
const handleGetCityByGeolocationFailed = (state, payload) => {
  return {...state};
};

const handleGetCountryAsyncSucceed = (state, payload) => {
  return {...state, countries: payload.ALL.countries};
};

const handleGetCountryAsyncFailed = (state, payload) => {
  return {...state};
};

const handleGetRegionByCountrySucceed = (state, payload) => {
  return {...state, regions: payload.regions};
};

const handleGetRegionByCountryFailed = (state, payload) => {
  return {...state};
};

const handleGetCityByRegionSucceed = (state, payload) => {
  return {...state, cities: payload.cities};
};
const handleGetCityByRegionFailed = (state, payload) => {
  return {...state};
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signupActionType.SET_ENTITY:
      return handleSetEntity(state, action.payload);
    case signupActionType.SET_BIRTHDAY:
      return handleSetBirthday(state, action.payload);
    case signupActionType.SET_ORIGIN:
      return handleSetOrigin(state, action.payload);
    case signupActionType.SET_SELECTED_CITY:
      return handleSetSelectedCity(state, action.payload);
    case signupActionType.SET_SELECTED_COUNTRY:
      return handleSetSelectedCountry(state, action.payload);
    case signupActionType.GET_ASYNC_ORIGIN_SUCCEED:
      return handleSetAsyncOriginSucceed(state, action.payload);
    case signupActionType.GET_ASYNC_ORIGIN_FAILED:
      return handleSetAsyncOriginFailed(state, action.payload);
    case signupActionType.GET_CITY_BY_GEOLOCATION_SUCCEED:
      return handleGetCityByGeolocationSucceed(state, action.payload);
    case signupActionType.GET_CITY_BY_GEOLOCATION_FAILED:
      return handleGetCityByGeolocationFailed(state, action.payload);
    case signupActionType.GET_ASYNC_COUNTRY_SUCCEED:
      return handleGetCountryAsyncSucceed(state, action.payload);
    case signupActionType.GET_ASYNC_COUNTRY_FAILED:
      return handleGetCountryAsyncFailed(state, action.payload);
    case signupActionType.GET_REGION_BY_COUNTRY_SUCCEED:
      return handleGetRegionByCountrySucceed(state, action.payload);
    case signupActionType.GET_REGION_BY_COUNTRY_FAILED:
      return handleGetRegionByCountryFailed(state, action.payload);
    case signupActionType.GET_CITY_BY_REGION_SUCCEED:
      return handleGetCityByRegionSucceed(state, action.payload);
    case signupActionType.GET_CITY_BY_REGION_FAILED:
      return handleGetCityByRegionFailed(state, action.payload);

    default:
      return {...state};
  }
};

export default signupReducer;
