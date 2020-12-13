// pages/gonglue/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "title": "SS级冒险者转职推荐",
      "desc": "选择SS级冒险者即可知道该SS级冒险者适合转哪类职业",
      "path": "/pages/sstuijian/index"
    }, {
      "title": "SS级冒险者测评",
      "desc": "选择SS级冒险者输入指定属性即可测评出冒险者等阶",
      "path": "/pages/ssceping/index"
    }]
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

  },
  /**
   * 点击跳转
   */
  onNavTap: function (e) {
    let path = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: path,
    })
  },
})