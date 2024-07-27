// 1. 手动切换
// export const BASE_URL = "http://codercba.com:9002";
// export const BASE_URL = 'http://codercba.com:9001'
export const TIME_OUT = 10000;

let BASE_URL = "http://codercba.com:9002";
// 2. 根据环境变量切换
if (process.env.NODE_ENV == "production") {
  BASE_URL = "http://codercba.com:9002";
}
export { BASE_URL };
