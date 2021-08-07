var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:'',
    toWhere:'',
    active: 0,
    roadPlan:[],
  },
  onChangeTar(event) {
    // wx.showLoading({
    //   title: '加载中',
    // })
    // wx.hideLoading()
  },
  goRoad(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/roadDetail/roadDetail?busno='+event.currentTarget.dataset.busno+
      '&momeystation='+event.currentTarget.dataset.momeystation+'&startstation='+event.currentTarget.dataset.startstation+
      '&startwalk='+event.currentTarget.dataset.startwalk+'&endwalk='+event.currentTarget.dataset.endwalk+
      '&endstation='+event.currentTarget.dataset.endstation+'&direction='+event.currentTarget.dataset.direction+
      '&allwalk='+event.currentTarget.dataset.allwalk,
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
    var _this = this;
    _this.setData({
      location:app.globalData.locationValue,
      toWhere:app.globalData.toWhereValue,
      roadPlan:app.globalData.roadPlan
    })
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