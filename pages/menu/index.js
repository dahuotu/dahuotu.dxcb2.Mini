// pages/menu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "title": "怪物伤害计算",
      "desc": "出征打BOSS时提前通过怪物伤害计算模拟BOSS实际输出",
      "path": "/pages/shanghai/index"
    }, {
      "title": "旧神奈亚抗性计算",
      "desc": "用于计算遗迹9打旧神·奈亚时模拟计算抗性——来自玩家：安兹'乌尔'恭",
      "path": "/pages/naiya/index"
    }, {
      "title": "资源满仓计算",
      "desc": "在咸鱼时计算庇护所资源满仓时间好提前设置好闹钟以免爆仓",
      "path": "/pages/wuzi/index"
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