var app = getApp()
Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        active: 1
      });
    },
    show: function() {
      var _this = this;
      _this.setData({
        location:app.globalData.locationValue,
        toWhere:app.globalData.toWhereValue
      })
    //获取当前的经纬度
    // wx.getLocation({
    //   type: 'gcj02',
    //   altitude:'true',
    //   success (res) {
    //     console.log(res)
    //     app.globalData.locationLatitude = res.latitude
    //     app.globalData.locationLongitude = res.longitude
    //     app.globalData.speed = res.speed
    //   }
    // })
    },
  },
  lifetimes: {
    attached: function() {
    
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  data: {
    location:'',
    toWhere:'',
  },
  methods:{
    onClickIcon(){
      var _this = this;
      var check =_this.data.location;
      _this.setData({
        location:_this.data.toWhere ,
        toWhere:check
      })
    },
    onClickIcon1(){
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
        // _this.setData({

        // })
        }
      })
    },
    focus0(){
      wx.navigateTo({
        url: '/pages/searchStation/searchStation?type=0',
      })
    },
    focus1(){
      wx.navigateTo({
        url: '/pages/searchStation/searchStation?type=1',
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
    }
  }
})