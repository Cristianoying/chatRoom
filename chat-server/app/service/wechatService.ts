import { Service } from 'egg';
const request = require('request');
export default class WechatService extends Service {
  // 获取微信access_token
  async _updateAccessToken() {
    const { app: { redis: client }, config: { wechatConfig } } = this;
    const AccessTokenUrl = wechatConfig.weChatUrl + 'token?grant_type=client_credential&appid=' + wechatConfig.appId + '&secret=' + wechatConfig.appSecret;
    return new Promise(function (resolve, reject) {
      client.get('WeChatAccessToken', function (err, v) {
        if (v) {
          console.log(err);
          //如果存在token则直接返回
          resolve(v)
        } else {
          //如果不存在token则向微信获取在返回
          request(AccessTokenUrl, function (error, response, body) {
            if (error) {
              console.log(response);
              
              reject(error);
            }
            const p = JSON.parse(body);
            client.set('WeChatAccessToken', p.access_token);//获取成功写入redis
            client.expire('WeChatAccessToken', 6000);//给token一个有效期，到了这个时间会自动删除
            resolve(p.access_token);
          })
        }
      })
    })
  }

  // 创建微信临时二维码
  async getWeChatQrcode() {
    const { config: { wechatConfig } } = this;
    const token = await this._updateAccessToken();
    
    const qrcodeUrl = wechatConfig.weChatUrl + 'qrcode/create?access_token=' + token;
    return new Promise(function (resolve, reject) {
      request({
        url: qrcodeUrl,
        method: "POST",
        json: true,
        body: {
          "expire_seconds": 120,
          "action_name": "QR_SCENE",
          "action_info": {
            "scene": {
              "scene_id": 12314
            }
          }
        }
      }, function (error, response, body) {
        console.log(body, 'qrcode==-=-=-=');
        
        if (error) {
          console.log(response);
          
          reject(error);
        }
        resolve(body);
        // https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=
      })
    })
  }

  // 写入微信验证码到redis
  async setVerifyCode(number, openid) {
    const { app: { redis: client } } = this;
    client.set(number, openid);
    client.expire(number, 300);//5分钟有效
  }

  // 获取微信验证码
  async getVerifyCode(verify) {
    const { app: { redis: client } } = this;
    return new Promise<void>(function (resolve) {
      client.get(verify, function (err, v:any) {
        if (v) {
          resolve(v)
        } else {
          console.log(err);
          resolve()
        }
      })
    })
  }

  // 删除微信验证码
  async delVerifyCode(verify) {
    const { app: { redis: client } } = this;
    client.del(verify)
  }

}