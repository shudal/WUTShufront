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
            <view class="left-img" style="background-image:url('{{ item['cover'] == null ? "data:image/png;base64,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": item['cover']}}')">
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
