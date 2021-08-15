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
    this.setData({
      active:event.detail
    })
  },
  goRoad(event){
    console.log(event.currentTarget.dataset.endturn)
    wx.navigateTo({
      url: '/pages/roadDetail/roadDetail?busno='+event.currentTarget.dataset.busno+
      '&momeystation='+event.currentTarget.dataset.momeystation+'&startstation='+event.currentTarget.dataset.startstation+
      '&startwalk='+event.currentTarget.dataset.startwalk+'&endwalk='+event.currentTarget.dataset.endwalk+
      '&endstation='+event.currentTarget.dataset.endstation+'&direction='+event.currentTarget.dataset.direction+
      '&allwalk='+event.currentTarget.dataset.allwalk+'&samestation='+event.currentTarget.dataset.samestation+
      '&startdirection='+event.currentTarget.dataset.startdirection+'&enddirection='+event.currentTarget.dataset.enddirection+
      '&startbus='+event.currentTarget.dataset.startbus+'&endbus='+event.currentTarget.dataset.endbus+
      '&middlewalk='+event.currentTarget.dataset.middlewalk+'&startturn='+event.currentTarget.dataset.startturn+
      '&endturn='+event.currentTarget.dataset.endturn+'&alldate='+event.currentTarget.dataset.alldate,
    })
  },
  onClickIcon(){t
    var _this = this;t
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
  queryTime(){
    var that = this;
    setInterval(function() {
     console.log(11111)
     wx.request({
      url: app.globalData.zmyIp+'/wx/getRoadPlan',
      data:{
        locationValue:app.globalData.locationValue,
        toWhereValue:app.globalData.toWhereValue,
        locationLatitude:app.globalData.locationLatitude,
        locationLongitude:app.globalData.locationLongitude,
        toWhereLatitude:app.globalData.toWhereLatitude,
        toWhereLongitude:app.globalData.toWhereLongitude,
      },
      success:reps=>{
        that.setData({
          roadPlan:reps.data
        })
        },
      })
   }, 50000);
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryTime();
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
    })
    wx.showLoading({
      title: '加载中',
    })
    var _this = this;
    wx.request({
      url: app.globalData.zmyIp+'/wx/getRoadPlan',
      data:{
        locationValue:app.globalData.locationValue,
        toWhereValue:app.globalData.toWhereValue,
        locationLatitude:app.globalData.locationLatitude,
        locationLongitude:app.globalData.locationLongitude,
        toWhereLatitude:app.globalData.toWhereLatitude,
        toWhereLongitude:app.globalData.toWhereLongitude,
      },
      success:reps=>{
        _this.setData({
          roadPlan:reps.data
        })
        wx.hideLoading()
        },
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