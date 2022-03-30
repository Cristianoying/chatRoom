/**
 * 扩展helper
 * */

module.exports = {
  serverOk(value: any) {
    this.response.body = {
      code: 0,
      data: value,
    };
  },
  serverWrong(desc: string) {
    this.response.body = {
      code: 1000,
      desc: desc || '服务器开小差了，请稍后重试',
    };
  },
  notFound(desc: string) {
    this.response.body = {
      code: 1003,
      desc: `${desc || '请求地址错误'}`,
    };
  },
};

