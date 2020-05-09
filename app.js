'use strict';

const createWechat = config => {
  const { WechatSdk } = config;
  const wechat = new WechatSdk(config);
  return wechat;
};

module.exports = app => {
  app.addSingleton('wechat', createWechat);
};
