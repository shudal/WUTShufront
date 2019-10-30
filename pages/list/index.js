const app = getApp();

Page({
    data: {
        isSearching:false,
        userInfo: {},
        hasUserInfo: false,
        canIUse: qq.canIUse('button.open-type.getUserInfo')
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
    onLoad(e) {
        let catcode= e.catcode;
        console.log(catcode);



    }
})