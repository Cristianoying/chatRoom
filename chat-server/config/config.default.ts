import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647261472209_1558';

  // add your egg config in here
  config.middleware = [ 'auth' ];
  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // socket.io 配置
  config.io = {
    init: {
      wsEngine: 'ws',
    },
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
  };
  // redis配置
  config.redis = {
    client: {
      port: 6382, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'Senscape',
      db: 0,
    },
  };
  config.mongoose = {
    client: {
      url: 'mongodb://cris:cris@127.0.0.1:27017/chat_room',
      options: {
        autoIndex: false,
        poolSize: 20,
        connectTimeoutMS: 6e4,
        socketTimeoutMS: 6e4,
        autoReconnect: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
  };
  // jwt配置
  config.jwt = {
    secret: 'cris',
  };


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
