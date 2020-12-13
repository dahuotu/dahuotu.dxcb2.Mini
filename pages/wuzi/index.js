const util = require('../../utils/util.js')

// pages/wuzi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //总数量
    maxLen: 0,
    //现有数量
    hasLen: 0,
    //所需数量
    resLen: 0,
    //产量
    creLen: 0,
    //流水线时间
    creTim: 0,
    //所需时间
    resultTime: '-',
    resultDate: '-',
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
   * 设置最大资源数量 
   */
  onSetMax: function (e) {
    let num = e.detail.value;
    this.setData({
      maxLen: num
    });
  },
  /**
   * 设置现有资源数量 
   */
  onSetHas: function (e) {
    let num = e.detail.value;
    this.setData({
      hasLen: num
    });
  },
  /**
   * 设置产量 
   */
  onSetCre: function (e) {
    let num = e.detail.value;
    this.setData({
      creLen: num
    });
  },
  /**
   * 设置流水线时间 
   */
  onSetTim: function (e) {
    let num = e.detail.value;
    this.setData({
      creTim: num
    });
  },
  /**
   * 计算资源满仓所需时间
   */
  onSumResult: function (e) {
    if (this.data.maxLen == 0) {
      wx.showToast({
        title: '请填写资源储量',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.hasLen == 0) {
      wx.showToast({
        title: '请填写现有储量',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.creLen == 0) {
      wx.showToast({
        title: '请填写产量',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.creTim == 0) {
      wx.showToast({
        title: '请填写流水线时间',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //单倍资源
    let timeLen = (this.data.maxLen - this.data.hasLen) / (this.data.creLen / this.data.creTim);
    this.setData({
      resultTime: util.formatDate(timeLen),
      resultDate: util.addSecond(timeLen)
    });
  },
})