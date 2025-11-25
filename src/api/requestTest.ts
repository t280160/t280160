import axios, { type AxiosResponse, type AxiosError } from "axios";
// 创建 axios 实例
const service = axios.create({
  withCredentials: true,
  baseURL: "/",
  // timeout: 5e3 * 10,
});

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 如果响应是二进制流，则直接返回，用于下载文件、Excel 导出等
    if (response.config.responseType === "blob") {
      return response;
    }

    const res = response.data;
    if (res.msg) {
      res.message = res.msg;
    }

    return res;
  },
  (error: AxiosError) => {
    /* 判断是不是主动抛出的错误取消请求等 */
    if (error.message !== "cancel") {
      return Promise.reject(error.message);
    }
  }
);
export default service;
