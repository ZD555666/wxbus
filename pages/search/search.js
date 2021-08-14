var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    roadList: {},
    stationData: {},
    wxHistories: []
  },

  toRoad(event) {
    console.log(event)
    wx.navigateTo({
      url: '/pages/road/road?title=' + event.currentTarget.dataset.busno +
        '&direction=' + event.currentTarget.dataset.endstation,
    })
  },

  toSiteDetail(event) {
    wx.navigateTo({
      url: '/pages/siteDetail/siteDetail?stationId=' + event.currentTarget.dataset.stationid +
        '&stationName=' + event.currentTarget.dataset.stationname + '&xPoint=' + event.currentTarget.dataset.xpoint +
        '&yPoint=' + event.currentTarget.dataset.ypoint,
    })
  },

  delHistory() {
    wx.request({
      url: app.globalData.prefix + '/wx/delHistory',
      method: "POST",
      data: {
        opId: wx.getStorageSync("loginUserInfo").openid,
        cityName: app.globalData.cityInfo.city
      },
      success: res => {
        console.log(res.data)
        this.setData({
          wxHistories:[]
        })
      }
    })
  },

  onClick(event) {
    this.putHistory(event.currentTarget.dataset.key, event.currentTarget.dataset.value);
    wx.reLaunch({
      url: '/pages/road/road?title=' + event.currentTarget.dataset.value +
        '&direction=' + event.currentTarget.dataset.key,
    })

  },
  onClick1(event) {
    console.log(123456)
    var _this = this;
    wx.request({
      url: app.globalData.zmyIp + '/wx/getStationData',
      data: {
        stationName: event.currentTarget.dataset.value,
      },
      success: reps => {
        console.log(reps.data)
        _this.setData({
          stationData: reps.data,
        })
        wx.reLaunch({
          url: '/pages/siteDetail/siteDetail?stationId=' + _this.data.stationData.stationId +
            '&stationName=' + _this.data.stationData.stationName + '&xPoint=' + _this.data.stationData.xpoint +
            '&yPoint=' + _this.data.stationData.ypoint,
        })
        this.putHistory1();
      }
    })

  },
  onSearch(event) {
    console.log("===>>>"+event.detail)
    var _this = this;
    _this.data.roadList = {};
    wx.request({
      url: app.globalData.zmyIp + '/wx/searchRoad',
      data: {
        value: event.detail,
      },
      success: reps => {
        console.log(reps.data)
        _this.setData({
          showEmpty: false,
          roadList: reps.data,
          showHistory: event.detail == '' ? true : false
        })
      },
    })
  },

  putHistory(stationName, busNo) {
    wx.request({
      url: app.globalData.prefix + '/wx/putHistory',
      method: 'POST',
      data: {
        opId: wx.getStorageSync("loginUserInfo").openid,
        endStation: stationName,
        busNo: busNo,
        cityName: app.globalData.cityInfo.city
      },
      success: res => {
        console.log(res)
      }
    })
  },

  putHistory1() {
    wx.request({
      url: app.globalData.prefix + '/wx/putHistory1',
      method: 'POST',
      data: {
        opId: wx.getStorageSync("loginUserInfo").openid,
        stationId: this.data.stationData.stationId,
        stationName: this.data.stationData.stationName,
        xPoint: this.data.stationData.xpoint,
        yPoint: this.data.stationData.ypoint,
        cityName: app.globalData.cityInfo.city
      },
      success: res => {
        console.log(res)
      }
    })
  },

  queryHistory() {
    wx.request({
      url: app.globalData.prefix + '/wx/queryHistory',
      method: 'POST',
      data: {
        opId: wx.getStorageSync("loginUserInfo").openid,
        cityName: app.globalData.cityInfo.city
      },
      success: res => {
        console.log(res.data)
        if (res.data.data.length == 0) {
          this.setData({
            showEmpty: true
          })
        } else {
          this.setData({
            showEmpty: false,
            showHistory: true,
            wxHistories: res.data.data
          })

        }
      }
    })
  },

  onLoad: function (options) {
    this.queryHistory()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})