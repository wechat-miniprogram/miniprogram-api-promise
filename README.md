# miniprogram-api-promise

[![](https://img.shields.io/npm/v/miniprogram-api-promise.svg?style=flat)](https://www.npmjs.com/package/miniprogram-api-promise)
[![](https://img.shields.io/github/license/wechat-miniprogram/api-typings.svg)](https://github.com/wechat-miniprogram/miniprogram-api-promise)

Extend WeChat miniprogram's api to surport promise.

# Installation

```
npm install --save miniprogram-api-promise
```

# Getting started
Call the method promisifyAll at the program entry (app.js), It only needs to be called once.

💨example:
```
import { promisifyAll, promisify } from 'miniprogram-api-promise';

const wxp = {}
// promisify all wx's api
promisifyAll(wx, wxp)
console.log(wxp.getSystemInfoSync())
wxp.getSystemInfo().then(console.log)
wxp.showModal().then(wxp.openSetting())

// compatible usage
wxp.getSystemInfo({success(res) {console.log(res)}})

// promisify single api
promisify(wx.getSystemInfo)().then(console.log)
```
