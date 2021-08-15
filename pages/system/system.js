const app = getApp()
Page({

  data: {
    columns: ['70秒', '80秒', '90秒'],
    showBar: false,
    value: app.globalData.times/1000+"秒"
  },

  onConfirm(event) {
    const { picker, value, index } = event.detail;
    app.globalData.times = value == '70秒' ? 70000 : (value == '80秒' ? 80000 : 90000);
    this.setData({value:value,showBar:false})

  },

  onCancel() {
    this.setData({showBar:false})
  },

  toUpd(){
    this.setData({showBar:true})
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