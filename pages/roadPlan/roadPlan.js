var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:'我的位置',
    toWhere:'',
    active: 1,
  },
  onChangeTar(event) {
    // wx.showLoading({
    //   title: '加载中',
    // })
    // wx.hideLoading()
  },
  goRoad(){
    wx.navigateTo({
      url: '/pages/roadDetail/roadDetail',
    })
  },
  onClickIcon(){
    var _this = this;
    var check =_this.data.location;
    _this.setData({
      location:_this.data.toWhere ,
      toWhere:check
    })
  },
  onClickIcon1(){
    
  },
  focus(){
    wx.navigateTo({
      url: '/pages/searchStation/searchStation',
    })
  },
  onChange(event){
    var _this = this;
    _this.setData({
      location:event.detail
    })
  },
  onChange1(event){
    var _this = this;
    _this.setData({
      toWhere:event.detail
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