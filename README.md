# miniprogram-api-promise

[![](https://img.shields.io/npm/v/miniprogram-api-promise.svg?style=flat)](https://www.npmjs.com/package/miniprogram-api-promise)
[![](https://img.shields.io/github/license/wechat-miniprogram/api-promise.svg)](https://github.com/wechat-miniprogram/miniprogram-api-promise)

Extend WeChat miniprogram's api to surport promise. Please refer to the miniprogram official 🔗 [documentation](https://developers.weixin.qq.com/miniprogram/dev/api/) for more information.

# Installation

```
npm install --save miniprogram-api-promise
```

# Getting started
Call the method promisifyAll at the program entry (app.js), It only needs to be called once.

💨example:
```
import { promisifyAll, promisify } from 'wxa-promise';

const wxp = {}
// promisify all wx's api
promisifyAll(wx, wxp)
wxp.getSystemInfoSync()
wxp.getSystemInfo().then(console.log)
wxp.showModal().then(wxp.openSetting())

// compatible usage
wxp.getSystemInfo({success(res) {console.log(res)}})

// promisify single api
promisify(wx.getSystemInfo).then(console.log)
```
