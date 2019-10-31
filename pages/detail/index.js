//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    article:{},
    bgList:["positive","negative","silent","active","angry"]
  },
  onLoad: function (options) {
    var postid = options.postid
    var source = this
    qq.request({
      url:"post/post?id="+postid,
      method:"GET",
      success:this.res,
    })
  },
  handleRes(res){
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
  },
})
