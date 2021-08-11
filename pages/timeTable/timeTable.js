var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '',
    direction:'',
    title:'',
    timeList:[],
    timeQuantum:[]
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      direction:options.direction,
      title:options.title
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
    var _this = this;
    wx.request({
      url: app.globalData.zmyIp+'/wx/getTimeTable',
      data:{
        busNo:_this.data.title,
      },
      success:reps=>{
        console.log(reps.data)
        _this.setData({
          timeQuantum:reps.data,
        })
      }
    })
    wx.request({
      url: app.globalData.zmyIp+'/wx/getTimes',
      data:{
        busNo:_this.data.title,
      },
      success:reps=>{
        _this.setData({
          timeList:reps.data,
        })
      }
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