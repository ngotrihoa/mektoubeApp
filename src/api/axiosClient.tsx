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
  return get(axiosClient, 'atlas/location', payload);
};

const getRegionByCountry = (payload: any) => {
  return get(axiosClient, `atlas/${payload.idCountry}/regions`, payload);
};

export {getCountries, getOrigins, getCityByGeolocation, getRegionByCountry};

export default axiosClient;
