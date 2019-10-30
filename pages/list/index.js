const app = getApp();

Page({
    data: {
        isSearching:false,
        userInfo: {},
        hasUserInfo: false,
        canIUse: qq.canIUse('button.open-type.getUserInfo'),
        catTitle: '',
        page: 0,
        catcode: 1,
        pagesize: 10,
        posts: []
    },
    tapToSearch: function(event) {
        this.setData({
            isSearching:true
        })
    },
    tapToCloseSearch: function(event){
        this.setData({
            isSearching:false
        })
    },
    onLoad: function (e) {
        let catcode= e.catcode;
        this.setData({
            catcode: catcode
        });
        console.log(catcode);
        let catTitle = "小编精选";
        switch(catcode) {
            case "2":
                catTitle = "热门好文"; break;
            case "3":
                catTitle = "最新文章"; break;
        }
        this.setData({
            catTitle: catTitle
        });
        this.getLatestPosts();
    },
    resolvePost(post) {
        let timestamp = post['cretime'];
        timestamp = Number(timestamp);
        var  date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        console.log("date:" + date);
        var Y = date.getFullYear();

        var M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);

        var D = date.getDate();
        let cretime = Y + "年" + M + "月"  + D + "日";
        post['cretime'] = cretime;
        return post;
    },
    resolvePosts(posts) {
      for (let i=0; i<posts.length; i++) {
          posts[i] = this.resolvePost(posts[i]);
      }
      return posts;
    },
    getLatestPosts: function () {
        var source = this;
        let that = this;

        that.data.page += 1;
        that.setData({
            page: that.data.page
        });
        qq.showLoading({title:"加载中"});
        qq.request({
            url: app.globalData.SERVER_URL + "post/cat?page=" + that.data.page +"&size=" + that.data.pagesize +"&cat=" + that.data.catcode,
            method:"GET",
            dataType:"json",
            fail:function(res) {
                qq.showToast({
                    title:"网络异常",
                    icon:"none"
                })
            },
            success(res){
                console.log(res);
                if (res.data.code == 0) {
                    res.data.data = that.resolvePosts(res.data.data);
                    that.data.posts = that.data.posts.concat(res.data.data);
                    that.setData({
                        posts: that.data.posts
                    })
                }
                //
            },
            complete:function(res) {qq.hideLoading()},
        })
    },
    tapToRead: function (e) {
        let postid = e.currentTarget.dataset.postid;
        console.log(postid);
    },
    onReachBottom() {
        console.log("ha");
        this.getLatestPosts();
    }
});