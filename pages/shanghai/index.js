// pages/shanghai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Gw_wl: 0,
    Gw_mf: 0,
    MXZ1_hj: 0,
    MXZ1_kx: 0,
    MXZ1_sm: 0,
    resultWL1: '-',
    resultMF1: '-',
    resultMS1: '-',
    MXZ2_hj: 0,
    MXZ2_kx: 0,
    MXZ2_sm: 0,
    resultWL2: '-',
    resultMF2: '-',
    resultMS2: '-',
    MXZ3_hj: 0,
    MXZ3_kx: 0,
    MXZ3_sm: 0,
    resultWL3: '-',
    resultMF3: '-',
    resultMS3: '-',
    MXZ4_hj: 0,
    MXZ4_kx: 0,
    MXZ4_sm: 0,
    resultWL4: '-',
    resultMF4: '-',
    resultMS4: '-',
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
  //设置怪物物理攻击
  onSetGWWLGJ(e) {
    let num = e.detail.value;
    this.setData({
      Gw_wl: num
    });
  },
  //设置怪物魔法攻击
  onSetGWMFGJ(e) {
    let num = e.detail.value;
    this.setData({
      Gw_mf: num
    });
  },
  //设置冒险者1护甲
  onSetMxz1HJ(e) {
    let num = e.detail.value;
    this.setData({
      MXZ1_hj: num
    });
  },
  //设置冒险者1抗性
  onSetMxz1KX(e) {
    let num = e.detail.value;
    this.setData({
      MXZ1_kx: num
    });
  },
  //设置冒险者1生命
  onSetMxz1SM(e) {
    let num = e.detail.value;
    this.setData({
      MXZ1_sm: num
    });
  },
  //计算冒险者1
  onResultMxz1() {
    if (this.data.Gw_wl == 0 && this.data.Gw_mf == 0) {
      wx.showToast({
        title: '请填写怪物物理攻击或魔法攻击',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ1_hj == 0 && this.data.MXZ1_kx == 0) {
      wx.showToast({
        title: '请填写冒险者1护甲或抗性',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ1_sm == 0) {
      wx.showToast({
        title: '请填写冒险者1生命值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //怪物物理攻击伤害值计算
    let Wlsh = Number(this.data.Gw_wl) * (1 - (Number(this.data.MXZ1_hj) / (Number(this.data.MXZ1_hj) + 50)));
    //怪物魔法攻击伤害值计算
    let Mfsh = Number(this.data.Gw_mf) * (1 - (Number(this.data.MXZ1_kx) / (Number(this.data.MXZ1_kx) + 50)));
    this.setData({
      resultWL1: parseInt(Wlsh),
      resultMF1: parseInt(Mfsh)
    });
    if ((parseInt(Wlsh) > Number(this.data.MXZ1_sm)) || (parseInt(Mfsh) > Number(this.data.MXZ1_sm))) {
      this.setData({
        resultMS1: '重伤',
      });
    } else if ((100 - (parseInt(Wlsh) / Number(this.data.MXZ1_sm)) * 100) <= 25 || (100 - (parseInt(Mfsh) / Number(this.data.MXZ1_sm)) * 100) <= 25) {
      this.setData({
        resultMS1: '概率重伤',
      });
    } else {
      this.setData({
        resultMS1: '正常',
      });
    }
  },

  //设置冒险者2护甲
  onSetMxz2HJ(e) {
    let num = e.detail.value;
    this.setData({
      MXZ2_hj: num
    });
  },
  //设置冒险者2抗性
  onSetMxz2KX(e) {
    let num = e.detail.value;
    this.setData({
      MXZ2_kx: num
    });
  },
  //设置冒险者2生命
  onSetMxz2SM(e) {
    let num = e.detail.value;
    this.setData({
      MXZ2_sm: num
    });
  },
  //计算冒险者2
  onResultMxz2() {
    if (this.data.Gw_wl == 0 && this.data.Gw_mf == 0) {
      wx.showToast({
        title: '请填写怪物物理攻击或魔法攻击',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ2_hj == 0 && this.data.MXZ2_kx == 0) {
      wx.showToast({
        title: '请填写冒险者2护甲或抗性',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ2_sm == 0) {
      wx.showToast({
        title: '请填写冒险者2生命值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //怪物物理攻击伤害值计算
    let Wlsh = Number(this.data.Gw_wl) * (1 - (Number(this.data.MXZ2_hj) / (Number(this.data.MXZ2_hj) + 50)));
    //怪物魔法攻击伤害值计算
    let Mfsh = Number(this.data.Gw_mf) * (1 - (Number(this.data.MXZ2_kx) / (Number(this.data.MXZ2_kx) + 50)));
    this.setData({
      resultWL2: parseInt(Wlsh),
      resultMF2: parseInt(Mfsh)
    });
    if ((parseInt(Wlsh) > Number(this.data.MXZ2_sm)) || (parseInt(Mfsh) > Number(this.data.MXZ2_sm))) {
      this.setData({
        resultMS2: '重伤',
      });
    } else if ((100 - (parseInt(Wlsh) / Number(this.data.MXZ2_sm)) * 100) <= 25 || (100 - (parseInt(Mfsh) / Number(this.data.MXZ2_sm)) * 100) <= 25) {
      this.setData({
        resultMS2: '概率重伤',
      });
    } else {
      this.setData({
        resultMS2: '正常',
      });
    }
  },

  //设置冒险者3护甲
  onSetMxz3HJ(e) {
    let num = e.detail.value;
    this.setData({
      MXZ3_hj: num
    });
  },
  //设置冒险者3抗性
  onSetMxz3KX(e) {
    let num = e.detail.value;
    this.setData({
      MXZ3_kx: num
    });
  },
  //设置冒险者3生命
  onSetMxz3SM(e) {
    let num = e.detail.value;
    this.setData({
      MXZ3_sm: num
    });
  },
  //计算冒险者3
  onResultMxz3() {
    if (this.data.Gw_wl == 0 && this.data.Gw_mf == 0) {
      wx.showToast({
        title: '请填写怪物物理攻击或魔法攻击',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ3_hj == 0 && this.data.MXZ3_kx == 0) {
      wx.showToast({
        title: '请填写冒险者3护甲或抗性',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ3_sm == 0) {
      wx.showToast({
        title: '请填写冒险者3生命值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //怪物物理攻击伤害值计算
    let Wlsh = Number(this.data.Gw_wl) * (1 - (Number(this.data.MXZ3_hj) / (Number(this.data.MXZ3_hj) + 50)));
    //怪物魔法攻击伤害值计算
    let Mfsh = Number(this.data.Gw_mf) * (1 - (Number(this.data.MXZ3_kx) / (Number(this.data.MXZ3_kx) + 50)));
    this.setData({
      resultWL3: parseInt(Wlsh),
      resultMF3: parseInt(Mfsh)
    });
    if ((parseInt(Wlsh) > Number(this.data.MXZ3_sm)) || (parseInt(Mfsh) > Number(this.data.MXZ3_sm))) {
      this.setData({
        resultMS3: '重伤',
      });
    } else if ((100 - (parseInt(Wlsh) / Number(this.data.MXZ3_sm)) * 100) <= 25 || (100 - (parseInt(Mfsh) / Number(this.data.MXZ3_sm)) * 100) <= 25) {
      this.setData({
        resultMS3: '概率重伤',
      });
    } else {
      this.setData({
        resultMS3: '正常',
      });
    }
  },

  //设置冒险者4护甲
  onSetMxz4HJ(e) {
    let num = e.detail.value;
    this.setData({
      MXZ4_hj: num
    });
  },
  //设置冒险者4抗性
  onSetMxz4KX(e) {
    let num = e.detail.value;
    this.setData({
      MXZ4_kx: num
    });
  },
  //设置冒险者4生命
  onSetMxz4SM(e) {
    let num = e.detail.value;
    this.setData({
      MXZ4_sm: num
    });
  },
  //计算冒险者4
  onResultMxz4() {
    if (this.data.Gw_wl == 0 && this.data.Gw_mf == 0) {
      wx.showToast({
        title: '请填写怪物物理攻击或魔法攻击',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ4_hj == 0 && this.data.MXZ4_kx == 0) {
      wx.showToast({
        title: '请填写冒险者4护甲或抗性',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (this.data.MXZ4_sm == 0) {
      wx.showToast({
        title: '请填写冒险者4生命值',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //怪物物理攻击伤害值计算
    let Wlsh = Number(this.data.Gw_wl) * (1 - (Number(this.data.MXZ4_hj) / (Number(this.data.MXZ4_hj) + 50)));
    //怪物魔法攻击伤害值计算
    let Mfsh = Number(this.data.Gw_mf) * (1 - (Number(this.data.MXZ4_kx) / (Number(this.data.MXZ4_kx) + 50)));
    this.setData({
      resultWL4: parseInt(Wlsh),
      resultMF4: parseInt(Mfsh)
    });
    if ((parseInt(Wlsh) > Number(this.data.MXZ4_sm)) || (parseInt(Mfsh) > Number(this.data.MXZ4_sm))) {
      this.setData({
        resultMS4: '重伤',
      });
    } else if ((100 - (parseInt(Wlsh) / Number(this.data.MXZ4_sm)) * 100) <= 25 || (100 - (parseInt(Mfsh) / Number(this.data.MXZ4_sm)) * 100) <= 25) {
      this.setData({
        resultMS4: '概率重伤',
      });
    } else {
      this.setData({
        resultMS4: '正常',
      });
    }
  },
})