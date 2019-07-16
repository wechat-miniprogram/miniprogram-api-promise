const { promisifyAll, promisify } = require('miniprogram-api-promise')
const app = getApp()
const wxp = {}

Page({
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    promisifyAll(wx, wxp)
    promisify(wx.getSystemInfo)().then(console.log)
  },
  tap() {
    wxp.showModal({
      title: '打开 Setting'
    }).then(() => {
      wxp.openSetting()
    })

    wxp.getSystemInfo().then(res => {
      console.log('Async: getSystemInfo ', res)
    })
    console.log('Sycn getSystemInfoSync', wxp.getSystemInfoSync())
    console.log('wx.env', wxp.env)
    wxp.getSystemInfo({
      success(res) {
        console.log('Callback getSystemInfo', res)
      }
    })
  }
})
