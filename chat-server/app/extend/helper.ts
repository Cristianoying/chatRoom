/**
 * 扩展helper
 * */
// const crypto = require('crypto');
import * as crypto from 'crypto';
interface ErrObj {
  message: string,
  [key: string]: any
}
module.exports = {
  serverOk(data: ErrObj):void {
    const response = this.response || this.ctx.response;
    response.body = {
      code: 0,
      ...data,
      message: data.message || '請求成功',
    };
  },
  serverWrong(data: ErrObj):void {
    const response = this.response || this.ctx.response;
    response.body = {
      code: 1000,
      ...data,
      message: data.message || '服务器开小差了，请稍后重试',
    };
  },
  notFound(data: ErrObj):void {
    const response = this.response || this.ctx.response;
    response.body = {
      code: 1003,
      ...data,
      message: data.message || '请求地址错误',
    };
  },

  /**
   * md5加密
   * @param {String} target - 待加密字符串
   */
  md5(target:string): string {
    const md5Hash = crypto.createHash('md5');
    md5Hash.update(target);
    return md5Hash.digest('hex');
  },

  /**
   * aes加密
   * @param {String} content - 待加密字符串
   * @param {String} algorithm 加密算法
   * @param {String} password 加密密码
   */
  aesEncrypt(content:string, algorithm:string, password:string): Buffer {
    const encrypto = crypto.createCipheriv(algorithm, password, '');
    encrypto.setAutoPadding(true);
    const buff1 = encrypto.update(content, 'utf8');
    const buff2 = encrypto.final();
    return Buffer.concat([ buff1, buff2 ]);
  },

  /**
   * aes解密
   * @param {Buffer} param - 待解密buffer
   * @param {String} algorithm 解密算法
   * @param {String} password 解密密码
   */
  aesDecrypt(param:Buffer, algorithm:string, password:string):string {
    const aesDecrypto = crypto.createDecipheriv(algorithm, password, '');
    aesDecrypto.setAutoPadding(true);
    const dbuff1 = aesDecrypto.update(param);
    const dbuff2 = aesDecrypto.final();
    const paramDe = Buffer.concat([ dbuff1, dbuff2 ]);
    // 正则匹配不规则加密增加的字符串
    // eslint-disable-next-line no-control-regex
    return paramDe.toString('utf8').replace(/[\x00-\x1f]*$/, '');
  },
};

