<view class="header">
  <view class="title">{{article.title}}</view>
  <view class="like">加入文集</view>
</view>

<view class="text-container {{bgList[article.type-1]}}">
  <image src="{{article.img}}" mode="aspectFill" />
  <view qq:if="{{article.type == 2}}" class="article">{{article.content}}</view>
  <view class="short" qq:if="{{article.type == 1}}" qq:key="*this">
    <view qq:for="{{article.content}}">{{item}}</view>
  </view>
</view>