'use strict';

const cacheManager = require('cache-manager');
const WechatSdk = require('@axolo/node-wechat');

/**
 * **egg-wechat default config**
 *
 * @member Config#wechat
 * @property {Object} WechatSdk - @axolo/node-wechat
 * @property {String} appId - appId of Wechat Application
 * @property {String} appSecret - appSecret of Wechat Application
 */
exports.wechat = {
  default: {
    WechatSdk,
    cache: {
      manager: cacheManager,
      store: 'memory',
      prefix: 'wechat',
    },
  },
  // client: {
  //   appId: 'APP_ID',
  //   appSecret: 'APP_SECRET',
  // },
};
