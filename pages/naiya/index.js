// pages/naiya/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Lqjq: 0,
    Fsjq: 0,
    Iscq: 0,
    Jsjq: 0,
    Fcb: 0,
    Ztb: 0,
    switchChecked: false,
    resultNum: 0,
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
  //设置烈枪技巧
  onSetLqjq(e) {
    let num = e.detail.value;
    this.setData({
      Lqjq: num
    });
  },
  //设置法师技巧
  onSetFsjq(e) {
    let num = e.detail.value;
    this.setData({
      Fsjq: num
    });
  },
  //是否为传奇法师
  onSetIscq(e) {
    let num = e.detail.value;
    this.setData({
      Iscq: num == true ? 1 : 0
    });
  },
  //设置祭祀技巧
  onSetJsjq(e) {
    let num = e.detail.value;
    this.setData({
      Jsjq: num
    });
  },
  //设置复仇
  onSetFcb(e) {
    let num = e.detail.value;
    this.setData({
      Fcb: num
    });
  },
  //设置状态效果
  onSetZtb(e) {
    let num = e.detail.value;
    this.setData({
      Ztb: num
    });
  },
  //计算
  onResult() {
    if (this.data.Lqjq == 0 || /^\+?[1-9][0-9]*$/.test(this.data.Lqjq) == false) {
      wx.showToast({
        title: '请填写烈枪技巧数值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.Fsjq == 0 || /^\+?[1-9][0-9]*$/.test(this.data.Fsjq) == false) {
      wx.showToast({
        title: '请填写法师技巧数值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.Jsjq == 0 || /^\+?[1-9][0-9]*$/.test(this.data.Jsjq) == false) {
      wx.showToast({
        title: '请填写祭祀技巧数值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.Fcb == 0 || /^\+?[1-9][0-9]*$/.test(this.data.Fcb) == false) {
      wx.showToast({
        title: '请填写复仇效果数值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.Ztb == 0 || /^\+?[1-9][0-9]*$/.test(this.data.Ztb) == false) {
      wx.showToast({
        title: '请填状态效果数值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    let J2 = (Number(this.data.Fcb) + Number(this.data.Ztb) + 100) / 100;
    let K2 = Number(this.data.Lqjq) * 0.3;
    let L2 = 0.25 + Number(this.data.Iscq) * 0.05;
    let B2 = Number(this.data.Fsjq);
    let A2 = Number(this.data.Lqjq);
    let D2 = Number(this.data.Jsjq);
    let KxNum = ((((B2 + K2 * J2) * L2 + 5) * J2 + 0.3 * J2 * A2 + D2) * 0.25 + 2) * J2;
    this.setData({
      resultNum: parseInt(KxNum)
    });
  },
})