
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    palceList:[],
    stationList:[],
    type:''
  },
  onSearch(event){
    var _this = this;
    _this.data.palceList = [];
    _this.data.stationList = [];
    wx.request({
      url: app.globalData.zmyIp+'/wx/searchStation',
      data:{
        value:event.detail,
      },
      success:reps=>{
        console.log(reps.data)
        _this.setData({
          stationList:reps.data,
        })
      }
    })
    wx.request({
      url: "https://api.map.baidu.com/place/v2/suggestion?query="+event.detail+"&region=厦门市&city_limit=true&output=json&ak=c5Z34MLBSy9rlLKezAjovlP20WT1bItG",
      success:reps=>{
        console.log(reps.data)
        _this.setData({
          palceList:reps.data.result,
        })
      }
    })
  },
  onClick(event){
    app.globalData.toWhereType = this.data.type
    if(this.data.type == 0){
      app.globalData.locationValue = event.target.dataset.value
      app.globalData.locationLatitude = event.target.dataset.latitude
      app.globalData.locationLongitude = event.target.dataset.longitude
    }else{
      app.globalData.toWhereValue = event.target.dataset.value
      app.globalData.toWhereLatitude = event.target.dataset.latitude
      app.globalData.toWhereLongitude = event.target.dataset.longitude
    }
    
    wx.reLaunch({
      url: "/pages/towhere/towhere",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    this.setData({
      type:options.type
    })
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