import request from "./requestTest";

/*获取免费文字  */
export const getDashBoardStr = () => {
  return request<
    any,
    {
      data: {
        content: string;
      };
    }
  >({
    url: "https://v2.jinrishici.com/one.json",
    method: "get",
  });
};
