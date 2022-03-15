import {signupActionType} from './actionsType';

const setEntity = (payload: any) => {
  return {
    type: signupActionType.SET_ENTITY,
    payload,
  };
};

const setBirthday = (payload: any) => {
  return {
    type: signupActionType.SET_BIRTHDAY,
    payload,
  };
};

const setOrigin = (payload: any) => {
  return {
    type: signupActionType.SET_ORIGIN,
    payload,
  };
};

const getOriginAsync = (payload?: any) => {
  return {
    type: signupActionType.GET_ASYNC_ORIGIN,
    payload,
  };
};
const getOriginAsyncSucceed = (payload: any) => {
  return {
    type: signupActionType.GET_ASYNC_ORIGIN_SUCCEED,
    payload,
  };
};
const getOriginAsyncFailed = (payload: any) => {
  return {
    type: signupActionType.GET_ASYNC_ORIGIN_FAILED,
    payload,
  };
};

const getCityByGeolocation = (payload: any) => {
  return {
    type: signupActionType.GET_CITY_BY_GEOLOCATION,
    payload,
  };
};

const getCityByGeolocationSucceed = (payload: any) => {
  return {
    type: signupActionType.GET_CITY_BY_GEOLOCATION_SUCCEED,
    payload,
  };
};

const getCityByGeolocationFailed = (payload: any) => {
  return {
    type: signupActionType.GET_CITY_BY_GEOLOCATION_FAILED,
    payload,
  };
};

const setSelectedCityStore = payload => {
  return {
    type: signupActionType.SET_SELECTED_CITY,
    payload,
  };
};

const setSelectedCountryStore = payload => {
  return {
    type: signupActionType.SET_SELECTED_CITY,
    payload,
  };
};

const setSelectedRegionStore = payload => {
  return {
    type: signupActionType.SET_SELECTED_REGION,
    payload,
  };
};

const getCountryAsync = (payload?: any) => {
  return {
    type: signupActionType.GET_ASYNC_COUNTRY,
    payload,
  };
};
const getCountryAsyncSucceed = (payload: any) => {
  return {
    type: signupActionType.GET_ASYNC_COUNTRY_SUCCEED,
    payload,
  };
};
const getCountryAsyncFailed = (payload: any) => {
  return {
    type: signupActionType.GET_ASYNC_COUNTRY_FAILED,
    payload,
  };
};

const getRegionByCountry = (payload: any) => {
  return {
    type: signupActionType.GET_REGION_BY_COUNTRY,
    payload,
  };
};

const getRegionByCountrySucceed = (payload: any) => {
  return {
    type: signupActionType.GET_REGION_BY_COUNTRY_SUCCEED,
    payload,
  };
};

const getRegionByCountryFailed = (payload: any) => {
  return {
    type: signupActionType.GET_REGION_BY_COUNTRY_FAILED,
    payload,
  };
};

export {
  setEntity,
  setBirthday,
  setOrigin,
  setSelectedCityStore,
  setSelectedCountryStore,
  setSelectedRegionStore,
  getOriginAsync,
  getOriginAsyncSucceed,
  getOriginAsyncFailed,
  getCityByGeolocation,
  getCityByGeolocationSucceed,
  getCityByGeolocationFailed,
  getCountryAsync,
  getCountryAsyncFailed,
  getCountryAsyncSucceed,
  getRegionByCountry,
  getRegionByCountryFailed,
  getRegionByCountrySucceed,
};
