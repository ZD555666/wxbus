var app = getApp()
Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        active: 1
      });
      var _this = this;
      _this.setData({
        location:app.globalData.locationValue,
        toWhere:app.globalData.toWhereValue
      })
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
    roadPlan:[]
  },
  methods:{
    onClickIcon(){
      var _this = this;
      var check =_this.data.location;
      _this.setData({
        location:_this.data.toWhere ,
        toWhere:check
      })
      var check0 =  app.globalData.locationValue;
      var check1 =  app.globalData.locationLatitude;
      var check2 =  app.globalData.locationLongitude;
      app.globalData.locationValue = app.globalData.toWhereValue;
      app.globalData.toWhereValue = check0;
      app.globalData.locationLatitude = app.globalData.toWhereLatitude;
      app.globalData.toWhereLatitude = check1;
      app.globalData.locationLongitude = app.globalData.toWhereLongitude,
      app.globalData.toWhereLongitude = check2;
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
        app.globalData.roadPlan = reps.data;
        _this.setData({
          roadPlan:reps.data
        })
        app.globalData.roadPlan = this.data.roadPlan;
        wx.navigateTo({
          url: '/pages/roadPlan/roadPlan',
        })
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