var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    roadList:{},
    stationData:{}
  },
  onClick(event){
    wx.reLaunch({
      url: '/pages/road/road?title='+event.currentTarget.dataset.value+
      '&direction='+event.currentTarget.dataset.key,
    })
  },
  onClick1(event){
    var _this = this;
    wx.request({
      url: app.globalData.zmyIp+'/wx/getStationData',
      data:{
        stationName:event.currentTarget.dataset.value,
      },
      success:reps=>{
        _this.setData({
          stationData:reps.data,
        })
        wx.reLaunch({
          url: '/pages/siteDetail/siteDetail?stationId='+_this.data.stationData.stationId+
          '&stationName='+_this.data.stationData.stationName+'&xPoint='+_this.data.stationData.xpoint+
          '&yPoint='+_this.data.stationData.ypoint,
        })
    }
  })
   
  },
  onSearch(event){
    var _this = this;
    _this.data.roadList = {};
    wx.request({
      url: app.globalData.zmyIp+'/wx/searchRoad',
      data:{
        value:event.detail,
      },
      success:reps=>{
        console.log(reps.data)
        _this.setData({
          roadList:reps.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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