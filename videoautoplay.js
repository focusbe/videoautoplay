(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    //AMD
    define([], factory);
  } else if (typeof exports === "object") {
    //Node, CommonJS之类的
    module.exports = factory();
  } else {
    //浏览器全局变量(root 即 window)
    root.videoAutoPlay = factory();
  }
})(this, function () {
  //方法
  function videoAutoPlay(video, options = {}) {
    var defaultOptions = {
      allowMuted: true,
      playOnClick: true,
    };
    options = Object.assign(defaultOptions, options);
    video = typeof video == "string" ? document.querySelector(video) : video;
    var ua = navigator.userAgent.toLowerCase();
    var startEvent = "ontouchstart" in document.documentElement ? "touchstart" : "click";
    var isWeixin = ua.match(/MicroMessenger/i) == "micromessenger";
    var startEl = document;
    var isIos = !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
    var runed = false;
    var play = function () {
      if (runed) {
        startEl.removeEventListener(startEl, play);
        return;
      }
      video.muted = false;
      video
        .play()
        .then(() => {
          runed = true;
        })
        .catch((err) => {
          // runed = false;
        });
    };
    if (isWeixin) {
      //在微信下
      if (isIos) {
        if (typeof WeixinJSBridgeReady === "undefined" && document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            function () {
              video.play();
            },
            false
          );
        }
      } else {
        //
        // if (options.playOnClick) {
        //   startEl.addEventListener(startEvent, play, {
        //     once: false,
        //     capture: false,
        //   });
        // }
      }
    } else {
      if (options.allowMuted) {
        //普通浏览器下
        video.muted = true;
        video.play();
        if (options.playOnClick) {
          startEl.addEventListener(startEvent, play, {
            once: false,
            capture: false,
          });
        }
      }
    }
  }
  //暴露公共方法
  return videoAutoPlay;
});
