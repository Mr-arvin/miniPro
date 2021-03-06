// pages/index/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/banner_01.jpg',
      '/images/banner_02.jpg',
      '/images/banner_03.jpg'
    ],
    proList: null,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      test:'01',
    })
    this.getProList();
  },
  getProList: function(){
    var self = this;
    var data = [
      { title: '饮水知识', desc: '我们都需要喝水', img: '/images/pro_01.jpg', btn_details: '/images/btn_detail.png', btn_ask: '/images/btn_ask.png' },
      { title: '饮水知识', desc: '我们都需要喝水', img: '/images/pro_02.jpg', btn_details: '/images/btn_detail.png', btn_ask: '/images/btn_ask.png' },
      { title: '饮水知识', desc: '我们都需要喝水', img: '/images/pro_03.jpg', btn_details: '/images/btn_detail.png', btn_ask: '/images/btn_ask.png' },
      { title: '饮水知识', desc: '我们都需要喝水', img: '/images/pro_01.jpg', btn_details: '/images/btn_detail.png', btn_ask: '/images/btn_ask.png' },
    ];
    wx.request({
      url: 'http://pel8cn2dx.bkt.clouddn.com/demoJson02.json',
      method: 'GET',
      success: function(res){
        console.log(res.data)
        self.setData({
          proList: data
        })
      }
    })
  },

  toDetail: function(e){
    console.log(e.currentTarget.dataset.index)
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