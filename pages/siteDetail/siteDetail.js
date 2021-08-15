const app = getApp();
let bmap = require('../../utils/bmap-wx.min.js');
Page({

  data: {
    activeNames: [],
    openMapTitle: '展开地图',
    stationId: '',
    busToWhere: [],
    distanceAndSpeed: [],
    clickStation: '',
    nowLongitude: '',
    nowLatitude: '',
    markers: [],
    stationXpoint: '',
    stationYpoint: '',
    hideMap: true,
    isPositive: '正方向',
    checked: true,
    direction: '',
    timers: '',
    time: 500,
    touchStartTime: 0,
    touchEndTime: 0,
    lastTapTime: 0,
    lastTapTimeoutFunc: null
  },

  changeDirection({ detail }) {
    console.log(detail)
    this.setData({
      direction: detail == true ? 0 : 1,
      checked: detail,
      isPositive: detail == true ? '正方向' : '反方向'
    });
    this.queryDetail();
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail,
      openMapTitle: event.detail == 1 ? "关闭地图" : "展开地图",
      hideMap: event.detail == 1 ? false : true,
    });

  },

  queryDetail() {
    clearInterval(this.data.timers)
    this.queryDetailFun();
    var that = this;
    this.data.timers = setInterval(function () {
      that.queryDetailFun()
    }, app.globalData.times);
  },

  queryDetailFun() {
    wx.request({
      url: app.globalData.prefix + '/wx/queryDetail',
      method: 'POST',
      data: {
        stationId: parseInt(this.data.stationId),
        cityName: app.globalData.cityInfo.city,
        direction: parseInt(this.data.direction)
      },
      success: (res) => {
        console.log(res)
        this.setData({
          busToWhere: res.data.data
        })
        this.queryBusDetailInfo();
      }
    })
  },

  queryBusDetailInfo() {
    wx.request({
      url: app.globalData.prefix + '/wx/queryBusDetailInfo',
      method: 'POST',
      data: {
        busDetailInfo: this.data.busToWhere,
        cityName: app.globalData.cityInfo.city,
        clickStation: this.data.clickStation,
        direction: parseInt(this.data.direction)
      },
      success: (res) => {
        console.log(res)
        this.setData({
          distanceAndSpeed: res.data.data,
          clickStation: this.data.clickStation
        })
      }
    })
  },

  toRoad(event) {
    wx.navigateTo({
      url: '/pages/road/road?title=' + event.currentTarget.dataset.busno + '&direction=' + event.currentTarget.dataset.endstation,
    })
  },

  toMap() {
    wx.openLocation({
      latitude: parseFloat(this.data.markers[0].latitude),
      longitude: parseFloat(this.data.markers[0].longitude),
      // scale: 18,
      name: this.data.clickStation,
      // address: ''
    })
  },

  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },

  longpress: function (e) {
    console.log(e, this.data.direction,this.data.stationXpoint)
    wx.navigateTo({
      url: '/pages/map/map?busNo=' + e.currentTarget.dataset.busno + "&direction=" + this.data.direction + "&xPoint=" + this.data.stationXpoint + "&yPoint=" + this.data.stationYpoint,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.stationName
    })
    this.setData({
      stationId: options.stationId,
      clickStation: options.stationName,
      nowLongitude: app.globalData.longitude,
      nowLatitude: app.globalData.latitude,
      stationXpoint: options.xPoint,
      stationYpoint: options.yPoint,
      direction: options.direction,
      markers: [
        {
          iconPath: "../../images/marker_red.png",
          id: 0,
          longitude: options.xPoint,
          latitude: options.yPoint,
          width: "25px",
          height: "32px"
        }
      ],
    })
    this.queryDetail();
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
    this.queryDetail();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.timers)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timers)
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
