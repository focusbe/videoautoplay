# 视频自动播放的限制与解决方案

|   |  IOS微信   | 安卓微信  |  IOS携程   | 安卓携程  | PC 端 |
|  ----  |  ----  | ----  |  ----  | ----  | ---- |
| 是否支持 | 支持(有声音)  | 不支持 | 支持(无声音)  | 支持(无声音)  | 支持(无声音)  | 
| 解决方案| 自动播放  | 默认不播放，<br/>用户点击页面<br/>任何地方后播放| 默认静音自动播放，<br/>用户点击页面后<br/>有声继续播放  | 默认静音自动播放，<br/>用户点击页面后<br/>有声继续播放  |默认静音自动播放，<br/>用户点击页面后<br/>有声继续播放  |

# 使用方法
## 直接调用
1. 下载main.js
2. 调用
```javascript
vieoAutoPlay("#videoFrame");
```

## npm
1. 
```
npm install --save-dev videoauto
yarn add videoauto
```

2. 调用
```javascript
const videoAutoPlay = require("videoauto");
vieoAutoPlay("#videoFrame");
```