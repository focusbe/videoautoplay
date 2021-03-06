# 视频自动播放的限制与解决方案

|   |  IOS微信   | 安卓微信  |  IOS携程   | 安卓携程  | PC 端 |
|  ----  |  ----  | ----  |  ----  | ----  | ---- |
| 是否支持 | 支持(有声音)  | 不支持 | 支持(无声音)  | 支持(无声音)  | 支持(无声音)  | 
| 解决方案| 自动播放  | 默认不播放，<br/>用户点击页面<br/>任何地方后播放| 默认静音自动播放，<br/>用户点击页面后<br/>有声继续播放  | 默认静音自动播放，<br/>用户点击页面后<br/>有声继续播放  |默认静音自动播放，<br/>用户点击页面后<br/>有声继续播放  |

# 使用方法
## 方法1:直接调用
1. videoautoplay.js
2. 引入并调用
```html
<!--./js/main.js替换为-->
<video id="videoFrame" src="https://video.c-ctrip.com/videos/AS0u1q000001hy4e47F27.mp4" controls playsinline></video>
<script src="./js/videoautoplay.js"></script> 
<script>
vieoAutoPlay("#videoFrame");
</script>

```

## 方法2:npm
1. 
```shell
npm install --save-dev videoautoplay
#或者使用yarn
#yarn add videoauto 
```

2. 调用
```javascript
const videoAutoPlay = require("videoautoplay");
vieoAutoPlay("#videoFrame");
```