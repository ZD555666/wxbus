
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    value: '',
    textareaValue:'',
  },
  deleteFile(event){
    var notes = this.data.fileList;
    notes.splice(event.detail.index,1);
    this.setData({
      fileList:notes
    })
  },
  afterRead(event) {
    this.setData({
      fileList:event.detail.file
    })
  },
  //提交按钮
  ButtonClick(){
    if(this.data.fileList.length == 0 || this.data.value == "" || this.data.textareaValue == ""){
      wx.showModal({
        title: '提示',
        content: '请将内容填写完整',
        success (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }else{
      ///手机号码验证：
      if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(this.data.value))) {
        wx.showToast({
        title: '手机号码有误',
        duration: 2000,
        icon:'none'
        });
      }else{
        for(var i =0;i<this.data.fileList.length;i++){
          wx.uploadFile({
            url: app.globalData.zmyIp+'/wx/uploadFile', // 仅为示例，非真实的接口地址
            filePath: this.data.fileList[i].url,
            name: 'file',
            header: {
              "Content-Type": "multipart/form-data"},
            formData: {
               number:this.data.value,
               problem:this.data.textareaValue
            },
            success(res) {
              // 上传完成需要更新 fileList
              wx.reLaunch({
                url: '/pages/me/me',
              })
            },
          });
        }
      }
    }
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