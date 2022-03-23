import axios, {get} from './axios';

const axiosClient = axios.create({
  baseURL: 'http://api.ltservices2.ovh/v4',
  responseType: 'json',
  timeout: 776000,
});

axiosClient.interceptors.request.use(request => {
  console.log('🚀 ~ request', request);
  return request;
});

//api map
const getCountries = (payload: {}) => {
  return get(axiosClient, '/atlas/countries', payload);
};

const getOrigins = (payload: {}) => {
  return get(axiosClient, '/geonames/origins', payload);
};

const getCityByGeolocation = (payload: any) => {
  return get(
    axiosClient,
    `atlas/location?latitude=${payload.params.latitude}&longitude=${payload.params.longitude}`,
    payload,
  );
};

const getCityByRegion = (payload: any) => {
  return get(
    axiosClient,
    `atlas/${payload.country.id}/${payload.region.id}/cities`,
    payload,
  );
};

const getCityByZipcode = (payload: any) => {
  return get(
    axiosClient,
    `atlas/${payload.country}/${payload.zipcode}}/zipcode/cities`,
    payload,
  );
};

const getRegionByCountry = (payload: any) => {
  return get(axiosClient, `atlas/${payload.idCountry}/regions`, payload);
};

const getListUser = (payload: {}) => {
  return get(axiosClient, '/users/pool', payload);
};

export {
  getCountries,
  getOrigins,
  getCityByGeolocation,
  getRegionByCountry,
  getListUser,
  getCityByRegion,
  getCityByZipcode,
};

export default axiosClient;
