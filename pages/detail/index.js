//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    article:{},
    bgList:["positive","negative","silent","exciting","angry"]
  },
  onLoad: function (options) {
    var postid = options.postid
    console.log(postid)
    console.log(app.globalData.SERVER_URL+"post/post?id="+postid)
    var source = this
    qq.request({
      url:app.globalData.SERVER_URL+"post/post?id="+postid,
      method:"GET",
      success:this.handleRes,
      fail(res){
        console.log(res)
        qq.showToast({title:"网络异常",icon:"none"})
      }
    })
  },
  
  handleRes(res){
    console.log(res)
    if (!res.data || res.data.code != 0) {
      qq.showToast({title:"网络异常",icon:"none"})
      qq.navigateBack(1)
    }
    if (res.data.data == null) {
      qq.showToast({title:"网络异常",icon:"none"})
      qq.navigateBack(1)
    }
    var data = res.data.data
    var article = {}
    if (data.type == 1) {
      article.content = data.content.split("|")
    } else {
      article.content = data.content
    }
    article.type = data.type
    article.title = data.title
    article.bincat = data.bincat
    article.img = data.img
    article.bg = 0
    for (let key in this.data.bgList) {
      if (this.data.bgList[key]==article.bincat) {
        article.bg = key
      }
    }
    
    this.setData({
      article:article
    })
  },
})
