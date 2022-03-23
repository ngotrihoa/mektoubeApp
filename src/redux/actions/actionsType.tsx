const authActionType = {
  SIGNIN: 'auth/signin',
  SIGNIN_SUCCEED: 'auth/signinSucceed',
  SIGNIN_FAILED: 'auth/signinFailed',
  SET_IS_LOADING_AUTH: 'auth/setIsLoadingAuth',
  SIGNUP: 'auth/signup',
  SIGNUP_SUCCEED: 'auth/signupSucceed',
  SIGNUP_FAILED: 'auth/signupFailed',
  RESET_AUTH_ERROR: 'auth/resetAuthError',
  SIGNOUT: 'auth/signout',
};

const signupActionType = {
  SET_ENTITY: 'signup/setEntity',
  SET_BIRTHDAY: 'signup/setBirthday',
  SET_ORIGIN: 'signup/setOrigin',
  SET_SELECTED_CITY: 'signup/setSelectedCity',
  SET_SELECTED_COUNTRY: 'signup/setSelectedCountry',
  SET_SELECTED_REGION: 'signup/setSelectedRegion',
  GET_ASYNC_ORIGIN: 'signup/setAsyncOrigin',
  GET_ASYNC_ORIGIN_SUCCEED: 'signup/setAsyncOriginSucceed',
  GET_ASYNC_ORIGIN_FAILED: 'signup/setAsyncOriginFailed',
  GET_ASYNC_COUNTRY: 'signup/setAsyncCountry',
  GET_ASYNC_COUNTRY_SUCCEED: 'signup/setAsyncCountrySucceed',
  GET_ASYNC_COUNTRY_FAILED: 'signup/setAsyncCountryFailed',
  GET_CITY_BY_GEOLOCATION: 'signup/setCityByGeolocation',
  GET_CITY_BY_GEOLOCATION_SUCCEED: 'signup/setCityByGeolocationSucceed',
  GET_CITY_BY_GEOLOCATION_FAILED: 'signup/setCityByGeolocationFailed',
  GET_REGION_BY_COUNTRY: 'signup/getRegionByCountry',
  GET_REGION_BY_COUNTRY_SUCCEED: 'signup/getRegionByCountrySucceed',
  GET_REGION_BY_COUNTRY_FAILED: 'signup/getRegionByCountryFailed',
  GET_CITY_BY_REGION: 'signup/getCityByRegion',
  GET_CITY_BY_REGION_SUCCEED: 'signup/getCityByRegionSucceed',
  GET_CITY_BY_REGION_FAILED: 'signup/getCityByRegionFailed',
  GET_CITY_BY_ZIPCODE: 'signup/getCityByZipcode',
  GET_CITY_BY_ZIPCODE_SUCCEED: 'signup/getCityByZipcodeSucceed',
  GET_CITY_BY_ZIPCODE_FAILED: 'signup/getCityByZipcodeFailed',
};

const uiActionType = {
  SET_SNACKBAR: 'ui/setSnackbar',
  SET_SPIN_LOADING_GLOBAL: 'ui/setSpinLoadingGlobal',
};

const homeActionType = {
  GET_LIST_USERS: 'home/getLListUser',
  GET_LIST_USERS_SUCCEED: 'home/getLListUserSucceed',
  GET_LIST_USERS_FAILED: 'home/getLListUserFailed',
  GET_MORE_USERS: 'home/getMoreUser',
  GET_MORE_USERS_SUCCEED: 'home/getMoreUserSucceed',
  GET_MORE_USERS_FAILED: 'home/getMoreUserFailed',
  SET_IS_LOADING: 'home/setIsLoading',
};

export {authActionType, uiActionType, signupActionType, homeActionType};
