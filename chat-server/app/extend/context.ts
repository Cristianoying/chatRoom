/**
 * 扩展response
 * */
import { to } from '../utils';
import { v4 as uuid } from 'uuid';

module.exports = {
  get serverOk() {
    return this.helper.serverOk;
  },
  get serverWrong() {
    return this.helper.serverWrong;
  },
  to,
  uuid,
  // 删除空数据, 防止保存空字符串
  deleteEmpty(data: object) {
    Object.keys(data).forEach(key => {
      (data[key] === '' || data[key] === undefined || data[key] === null)
        && delete data[key];
    });
  },
};

