const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    showEmpty: false,
    showHistory: false,
    roadList: []
  },
  onClick(event) {
    // wx.reLaunch({
    //   url: '/pages/road/road',
    // })
    let item = event.currentTarget.dataset.value//路
    let key = event.currentTarget.dataset.key//站
  },
  onSearch(event) {
    this.setData({
      showHistory: event.detail.length == 0 ? true : false
    })
    var _this = this;
    _this.data.roadList = [];
    wx.request({
      url: app.globalData.prefix + '/wx/searchRoad',
      data: {
        value: event.detail,
      },
      success: reps => {
        console.log(reps.data)
        _this.setData({
          roadList: reps.data
        })
      },
    })
  },

  putHistory() {
    wx.request({
      url: app.globalData.prefix + '/wx/putHistory',
      method: 'POST',
      data: {
        opId: wx.getStorageSync("loginUserInfo").openid,
        parm: ''
      },
      success: res => {

      }
    })
  },

  queryHistory() {
    wx.request({
      url: app.globalData.prefix + '/wx/queryHistory',
      method: 'POST',
      data: {
        opId: wx.getStorageSync("loginUserInfo").openid
      },
      success: res => {
        console.log(res)
        if (res.data.length == 0) {
          this.setData({
            showEmpty: true
          })
        } else {
          this.setData({
            showHistory: true
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