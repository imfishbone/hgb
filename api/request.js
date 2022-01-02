// 所有 api 请求接口都可以在这里进行设置，当然也可以分文件来组织
export const prefixPath = '/hgb/hapi/hg/'
export const queryHgWorkListUrl = `${prefixPath}queryHgWorkList`
export const queryHgWorkDetailUrl = `${prefixPath}queryHgWorkDetail`
export const queryHgByCityListUrl = `${prefixPath}queryHgByCityList`
export const queryHgZhDetailUrl = `${prefixPath}queryHgZhDetail`

export const queryHgWorkList = (axios, {
  current = 1,
  size = 1,
  cityname = '',
  worknames = '',
  searchkey = '',
  partjob = ''
}) => {
  return axios.get(`${queryHgWorkListUrl}?current=${current}&size=${size}&cityname=${cityname}&worknames=${worknames}&searchkey=${searchkey}&partjob=${partjob}`);
}

export const queryHgWorkDetail = (axios, {sysid = ''}) => {
  return axios.post(`${queryHgWorkDetailUrl}`, {sysid})
}

export const queryHgByCityList = (axios, {
  current = 1,
  size = 1,
  cityname = '',
  worknames = '',
  searchkey = '',
  partjob = ''
}) => {
  return axios.get(`${queryHgByCityListUrl}?current=${current}&size=${size}&cityname=${cityname}&worknames=${worknames}&searchkey=${searchkey}&partjob=${partjob}`);
}

export const queryHgZhDetail = (axios, {sysid = ''}) => {
  return axios.post(`${queryHgZhDetailUrl}`, {sysid})
}

export default {
  queryHgWorkListUrl,
  queryHgWorkDetailUrl,
  queryHgByCityListUrl,
  queryHgZhDetailUrl,
}
