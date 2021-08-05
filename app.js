// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    markers: '',
    latitude: '',
    longitude: '',
    address: '',
    cityInfo: '',
    userInfo: null,
    nowCity: '',
    prefix: 'http://localhost:8080',
    // prefix: 'http://192.168.31.49:8080'
    // prefix: 'http://192.168.236.211:8080',
    toWhereType:'2',
    locationValue:'我的位置',
    toWhereValue:'',
    locationLatitude:'',
    locationLongitude:'',
    toWhereLatitude:'',
    toWhereLongitude:'',
    speed:'',
    // zmyIp:'http://192.168.43.236:8080',
    zmyIp:'http://localhost:8080'
  },


})
