import axios, {AxiosInstance} from 'axios';
import {setDataStorage} from '../common/AsyncStorage';

const setAuthorization = (responseData: any) => {
  axios.defaults.headers.common.Authorization = 'Bearer' + responseData.token;

  setDataStorage('token', responseData.token);
};

const combineConfigHeader = (config = {}) => {
  if (config) {
    return {...axios.defaults.headers, ...config};
  }
  return axios.defaults.headers;
};

const get = async (api: AxiosInstance, url: string, config = {}) => {
  const headers = combineConfigHeader(config);
  return api.get(url, {headers});
};
const post = async (
  api: AxiosInstance,
  url: string,
  data = {},
  config = {},
) => {
  const headers = combineConfigHeader(config);
  return api.post(url, data, {headers});
};
const put = async (api: AxiosInstance, url: string, data = {}, config = {}) => {
  const headers = combineConfigHeader(config);
  return api.put(url, data, {headers});
};
const deleteMethod = async (api: AxiosInstance, url: string, config = {}) => {
  const headers = combineConfigHeader(config);
  return api.get(url, {headers});
};

export {setAuthorization, combineConfigHeader, get, post, put, deleteMethod};

export default axios;
