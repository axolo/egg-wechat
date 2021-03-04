# egg-wechat

## 安装

```bash
npm i @axolo/egg-wechat --save
```

## 开启插件

```js
// config/plugin.js
exports.wechat = {
  enable: true,
  package: '@axolo/egg-wechat',
};
```


## 详细配置

```js
// {app_root}/config/config.default.js
exports.wechat = {};
```

请到 <https://github.com/axolo/node-wechat> 获取更多配置说明。
请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 例子

```js
const Controller = require('egg').Controller;

class WechatController extends Controller {
  async index() {
    const { app, ctx } = this;
    const { wechat } = app;
    const params = { openid: 'openid' };
    const result = await wechat.execute('/user/info', { params });
    ctx.body = result;
  }
}

module.exports = WechatController;
```

## 提问交流

请到 <https://github.com/axolo/egg-wechat/issues> 异步交流。

## License

[MIT](LICENSE)
