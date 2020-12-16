const dev = process.env.NODE_ENV !== 'production';
const BASEURL = 'https://boluo.commeal.cn/api';

const BASEURLS = {
  BASEURL: dev ? BASEURL : 'https://boluo-know-ledge.ministudy.com/pineapple_server_backend/api'
};

const CDN = 'http://sfs-public.shangdejigou.cn/sunlands_back_freestudy/fe/sunland-web';

module.exports = {
  BASEURL,
  BASEURLS,
  CDN
};
// 34728340
