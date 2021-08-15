const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // busNo: '',
    // direction: '',
    longitude: '',
    latitude: '',
    markers: []
  },

  queryRoadMap(busNo, direction, xPoint, yPoint) {
    wx.request({
      url: app.globalData.prefix + '/wx/queryRoadMap',
      method: 'POST',
      data: {
        busNo: busNo,
        direction: parseInt(direction),
        xPoint: parseFloat(xPoint),
        yPoint: parseFloat(yPoint)
      },
      success: (res) => {
        console.log(res)
        this.setData({
          markers: res.data.data
        })
      }
    })
  },

  makertap(event){
    let titles = event.currentTarget.dataset.title
    console.log(event)
    for (let index in titles) {
      if(titles[index].id==event.detail.markerId){
        wx.showToast({
          title: titles[index].stationName,
          duration: 1000,
          icon: 'none'
        })
      }
     }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      longitude: options.xPoint,
      latitude: options.yPoint
    })
    this.queryRoadMap(options.busNo, options.direction, options.xPoint, options.yPoint);
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