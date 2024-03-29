import {removeDataStorage} from '../common/AsyncStorage';
import axios, {setAuthorization} from './axios';

const axiosAuth = axios.create({
  baseURL: 'http://apiv2.ltservices2.ovh',
  responseType: 'json',
  timeout: 776000,
});

// axiosAuth.interceptors.request.use(request => {
//   console.log(request);
//   return request;
// });

axiosAuth.interceptors.response.use(
  response => {
    //if sign in or sign up set new header and save token to AsyncStorage
    if (response.config.url?.startsWith('/gate/')) {
      setAuthorization(response.data.CONTENT);
    }

    if (response.config.url?.startsWith('/pool/')) {
      setAuthorization(response.data.CONTENT.AUTH);
    }

    return response;
  },
  err => {
    console.log(err.message);
    removeDataStorage('token');
    removeDataStorage('puk');
    return Promise.reject(err);
  },
);

//api map
const signin = (data = {}, config = {}) => {
  return axiosAuth.post(`/gate/${data.login}.json`, data, config);
};

const signup = (data = {}, config = {}) => {
  return axiosAuth.post(`/pool/.json?new_key_signup=true`, data, config);
};

export {signin, signup};
export default axiosAuth;
