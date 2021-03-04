# egg-wechat

node-wechat plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-wechat --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wechat = {
  enable: true,
  package: '@axolo/egg-wechat',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.wechat = {};
```

see <https://github.com/axolo/node-wechat> for more help.
see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
const Controller = require('egg').Controller;

class WechatMpController extends Controller {
  async index() {
    const { app, ctx } = this;
    const { wechat } = app;
    const params = { openid: 'openid' };
    const result = await wechat.execute('/user/info', { params });
    ctx.body = result;
  }
}

module.exports = WechatMpController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-wechat/issues).

## License

[MIT](LICENSE)
