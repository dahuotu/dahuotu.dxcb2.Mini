// pages/guanyu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      title: "玩地下城堡2的经历",
      content: "我玩地下城堡2已经有3个年头了，先开始是2017年久游版的，开荒到图14直接被劝退了。后来在2019年9月因为常刷抖音控制不住作息，就又重新开了个官方版号重新玩，也就是地下城堡2重制版的，一直玩到现在，期间也是被BOSS虐的死去活来，多次想退坑，不过最后都坚持住了，目前过了图18一直在咸鱼，每天就挂挂冒险，收收资源，打打裂隙，这样也挺好，有机会可以一起玩。",
      dataid: "",
      opt: "",
    }, {
      title: "为什么叫脸堡助手而不叫地下城堡助手",
      content: "因为微信小程序不允许所以只能取名叫脸堡助手，毕竟这个看脸的时代，地下城堡2也紧跟时代处处看脸，多数地下城堡2玩家一致认为这是一款刷脸游戏，所以戏称脸堡。也是因为以上原因，这个助手取名叫脸堡助手，脸堡助手主要是帮助玩家少走弯路，达到快速毕业的实用小工具。",
      dataid: "",
      opt: "",
    }, {
      title: "教会推荐位",
      content: "此处教会推荐位可以提供给有需要的小伙伴，如需占位留坑微信联系我",
      dataid: "5395",
      opt: "add",
    }, {
      title: "对脸堡助手有疑问或有建议想法如何加我？",
      content: "点下方的联系按钮，在微信里加我即可",
      dataid: "www_366love_com",
      opt: "link",
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
  onNavTap: function (e) {
    let opt = e.currentTarget.dataset.opt;
    let copyid = e.currentTarget.dataset.id;
    wx.setClipboardData({
      data: copyid,
      success(res) {
        setTimeout(() => {
          if (opt == 'add') {
            wx.showToast({
              title: '复制教会ID成功，请在游戏内搜索后申请加入',
              icon: 'none',
              duration: 2000
            });
          } else {
            wx.showToast({
              title: '复制微信ID成功，请在微信内添加好友',
              icon: 'none',
              duration: 2000
            });
          }
        },2500);
      }
    });
  },
})