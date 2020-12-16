const md5 = require('md5');
export function filterContent(msg) {
  const IMGREG = /<img.*?(?:>|\/>)/gi;
  const matched = msg.match(IMGREG);
  // test.msg = msg
  // console.log(matched)
  // matched.forEach((item, index)=> {
  //   msg.replace(item, `<p>${index+1}${item}<p>`)
  // })
  // for (let index = 0; index < matched.length; index++) {
  //   const item = matched[index];
  //   msg = msg.replace(item, `<p>${index+1}${item}<p>`)
  // }
  for (let i in matched) {
    msg = msg.replace(
      matched[i],
      `<span class='_blank'><span class='__blank__placeholder'><span class='_blank_num'>${~~i + 1}</span></span><span>`
    );
  }
  // console.log(msg)
  return msg;
}

export function createSign() {
  const SECRET = '476751e9bd1b2f46239893de826e0863';
  const timestamp = new Date().getTime();
  const data = SECRET + timestamp;
  return {
    taken: md5(data),
    timestamp
  };
}
