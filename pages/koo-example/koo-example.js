// pages/koo-example/koo-example.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    template: {},
    img: '',
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // const template = new DCard().palette();
    const template = {
      path: '/palette/dancing-card.js',
      data: {},
    };
    this.setData({
      template: template,
    });
  },

  onImgOK(e) {
    console.log(e.detail.path);
    this.setData({
      img: e.detail.path,
    });
  },

  pageMethod() {
    console.log('page method');
  },

});

