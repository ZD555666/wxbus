var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    busno:'',
    momeystation:'',
    startstation:'',
    startwalk:'',
    endstation:'',
    endwalk:'',
    direction:'',
    allwalk:'',
    location:'',
    toWhere:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.busno)
    console.log(options.momeystation)
    console.log(options.startstation)
    console.log(options.startwalk)
    console.log(options.endstation)
    console.log(options.endwalk)
    console.log(options.direction)
    var _this = this;
    _this.setData({
      busno:options.busno,
      momeystation:options.momeystation,
      startstation:options.startstation,
      startwalk:options.startwalk,
      endstation:options.endstation,
      endwalk:options.endwalk,
      direction:options.direction,
      allwalk:options.allwalk,
      location:app.globalData.locationValue,
      toWhere:app.globalData.toWhereValue,
      
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