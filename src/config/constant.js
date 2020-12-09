const dev = process.env.NODE_ENV !== 'production';
// const MOCKURL = 'http://172.16.108.175:3000/mock/133'
const BASEURL = 'http://172.16.109.87:29933';

const BASEURLS = {
  BASEURL: dev ? 'http://172.16.109.87:29933' : BASEURL
};

const CDN = 'http://sfs-public.shangdejigou.cn/sunlands_back_freestudy/fe/sunland-web';

module.exports = {
  BASEURL,
  BASEURLS,
  CDN
};
