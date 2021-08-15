var app = getApp()
Component({
  data: {
    dataList:[],
    page:1,
  },
  pageLifetimes: {
    show: function() {
      this.getTabBar().setData({
        active: 2
      });
      if(this.data.page == 1){
        wx.showLoading({
          title: '加载中',
        })
      }
      var _this = this;
      // 页面被展示
      if(new Date().toTimeString().substring(0,2)!=13){
        _this.onRequest();

      }
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  //触底响应函数
  
  methods:{
    onReachBottom: function() {
      this.onBottom()
     },

     onBottom(){
      var that = this;
      (this.data.page)++;
      that.onRequest();
    },
    onRequest(){
      var _this = this;
      wx.request({
        url: app.globalData.zmyIp+'/wx/getNews',
        data:{
          param:_this.data.page
        },
        success:reps=>{
         if(_this.data.page == 1){
          wx.hideLoading()
          _this.setData({
        		dataList: reps.data,
         	})
         }else{
            //获取原始列表
            let dataList = _this.data.dataList;
            //获取新列表
            let arr = reps.data;
            //新列表数据与原列表数据合并
            let newArr = dataList.concat(arr);
            _this.setData({
              dataList: newArr,
            })
         } 
        }
      })
    },
 
  }
})