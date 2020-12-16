import axios from 'axios';
import { BASEURL, BASEURLS } from '@/config/constant';
import { createSign } from '@/utils';
/**
 *
 * @param {*}
 * 请求方法基类
 */
const request = async ({ url, data, params, method, headers, host }) => {
  const requestConf = {
    url,
    method,
    BASEURL,
    data,
    params
  };

  if (!url) throw Error('url must provide');

  // 根据hostName 切换不同的baseURL
  // console.log(BASEURLS, host)
  requestConf.url = BASEURLS[host] + url;

  if (method.toUpperCase() === 'POST') {
    requestConf.headers = {
      'Content-Type': 'application/json;',
      ...headers
    };
  } else {
    requestConf.headers = {
      ...headers
    };
  }
  Object.assign(requestConf.headers, createSign());
  return await axios.request(requestConf).then(res => {
    if (handleRes(res)) {
      return res.data;
    }
  });
};
/**
 *
 * @param {*} res 请求返回
 * 判断接口是否正常，如果异常则抛出
 */
function handleRes(res) {
  const {
    status,
    data: { code },
    config
  } = res;
  if ((status !== 200 && code !== 20000) || (code !== 200 && status !== 200)) {
    throw Error(
      JSON.stringify({
        url: config.url,
        method: config.method,
        data: config.data,
        status: status,
        response: res && res.data
      })
    );
  }
  return true;
}
/**
 *
 * @param {*} url  请求uri
 * @param {*} data 传入data
 * @param {*} host 根据传入hostname, 来切换不同baseURL
 */
const post = async (url, data, host = 'BASEURL') => {
  return request({
    url,
    data,
    method: 'POST',
    host
  });
};
/**
 *
 * @param {*} url  请求uri
 * @param {*} params 传入params
 * @param {['asdf', 'ddd']} host  根据传入hostname, 来切换不同baseURL
 */
const get = async (url, params, host = 'BASEURL') => {
  return request({
    url,
    params,
    method: 'GET',
    host
  });
};
export default class Base {
  static get = get;
  static post = post;
}
