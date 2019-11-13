<view class="container" qq:if="{{isSearching}}">
  <view class="header">
    <view class="search-box">
      <text class="iconfont icon-search"></text>
      <input placeholder="搜索文章" focus="{{isSearching}}" />
      <text class="iconfont icon-close-circle" bindtap="tapToCloseSearch"></text>
    </view>
  </view>
  <view class="search-tags">
    <view class="title">热门搜索</view>
    <view class="tag-list">
      <view class="tag-item">村上春树</view>
      <view class="tag-item">Python</view>
      <view class="tag-item">什么是幸福</view>
      <view class="tag-item">百年孤独</view>
      <view class="tag-item">我好喜欢你</view>
      <view class="tag-item">韩寒</view>
    </view>
    <view class="title">最近搜索</view>
    <view class="tag-list">
      <view class="tag-item">以梦为马</view>
      <view class="tag-item">百年孤独</view>
    </view>
  </view>
</view>

<view class="container" qq:if="{{!isSearching}}">
  <view class="header">
   <view class="search-box" bindtap="tapToSearch">
    <text class="iconfont icon-search"></text>
    <text>搜索文集</text>
   </view>
  </view>


  <view class="main">
    <view class="title">{{ catTitle }}</view>
    <view  class="list" bindscrolltolower="lower">
       <view qq:for="{{ posts }}" class="list-item" bindtap="tapToRead" data-postid="{{ item['id'] }}">
            <!-- <image class="left-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618992379,3984719115&fm=26&gp=0.jpg" mode="aspectFill"></image> -->
            <view class="left-img" style="background-image:url({{ item['cover'] == null ? defaultCoverUrl : item['cover']}})">
                <view>{{ item['title'] }}</view>
            </view>
            <view class="right-text">
              <view class="title">{{ item['author'] }} {{ item['id'] }}</view>
              <view class="desc">{{ item['cretime'] }}</view>
              <view class="desc">{{ item['content'] }}</view>
            </view>
       </view>
    </view>
  </view>
</view>
