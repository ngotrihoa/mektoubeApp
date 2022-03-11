import axios, {get} from './axios';

const axiosClient = axios.create({
  baseURL: 'http://api.ltservices2.ovh/v4',
  responseType: 'json',
  timeout: 776000,
});

axiosClient.interceptors.request.use(request => {
  console.log(request);
  return request;
});

//api map
const getCountries = (payload: {}) => {
  return get(axiosClient, '/atlas/countries', payload);
};

export {getCountries};

export default axiosClient;
