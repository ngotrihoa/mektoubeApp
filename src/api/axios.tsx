import axios, {AxiosInstance} from 'axios';
import {setDataStorage} from '../common/AsyncStorage';

const setAuthorization = (responseData: any) => {
  axios.defaults.headers['x-asgard-token'] = responseData.token;
  axios.defaults.headers['x-asgard-puk'] = responseData.puk;

  setDataStorage('token', responseData.token);
  setDataStorage('puk', responseData.puk);
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
