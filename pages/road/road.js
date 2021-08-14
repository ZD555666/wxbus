
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:"",
    endLeft:"",
    endLeft1:"",
    numberLeft:'margin-left:46.7px;',
    station:"",
    direction:"",
    title:'',
    stationList:[],
    times:[],
    startTime:'',
    endTime:'',
    realData:{},
    goStartTime:'',
    color:'',
    busPlace:'left: 15px;',
    nearStation:''
  },
  goTime(){
    wx.navigateTo({
      url: '/pages/timeTable/timeTable?direction='+this.data.direction+
      '&title='+this.data.title+'&goStartTime='+this.data.goStartTime,
    })
  },

  getRealData(){
    var _this = this;
    wx.request({
      url: app.globalData.zmyIp+'/wx/getRealData',
      data:{
        busNo:_this.data.title,
        latitude:app.globalData.latitude,
        longitude:app.globalData.longitude,
        direction:_this.data.direction
      },
      success:reps=>{
        _this.setData({
          realData:reps.data,
          goStartTime:reps.data.startTime,
          nearStation:reps.data.nearStation
        })
        if(reps.data.nowStation != 0){
          _this.setData({
            busPlace:'left: '+(15+65.5*(reps.data.nowStation - 1))+'px;'
          })
        }
      }
    })
  },
  queryTime(){
    var that = this;
    setInterval(function() {
      that.getRealData();
   }, 50000);
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.setNavigationBarTitle({
      title:options.title,
    })
    this.setData({
      direction:options.direction,
      title:options.title
    })
    wx.request({
      url: app.globalData.zmyIp+'/wx/getStation',
      data:{
        road:options.title,
        station:options.direction
      },
      success:reps=>{
        console.log(reps.data)
        console.log(reps.data.length)
        _this.setData({
          stationList:reps.data,
          width:"width:"+((reps.data.length-1)*50+15*(reps.data.length-1))+"px;",
          endLeft:"left:"+((reps.data.length-1)*50+15*(reps.data.length-1)+28)+"px;",
          endLeft1:"left:"+((reps.data.length-1)*50+15*(reps.data.length-1)+50)+"px;",
        })
      }
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
    this.getRealData();
    var _this = this;
    wx.request({
      url: app.globalData.zmyIp+'/wx/getStaEndTime',
      data:{
        busNo:_this.data.title
      },
      success:reps=>{
        console.log(reps.data)
        console.log(reps.data.length)
        _this.setData({
          times:reps.data,
          startTime:_this.data.times[0],
          endTime:_this.data.times[1],
          startTime:reps.data[0],
          endTime:reps.data[1],
        })
      }
    })
    _this.setData({
      startTime:_this.data.times[0],
      endTime:_this.data.times[1],
    })

    this.queryTime();
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