!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ULink=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n=t(function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){self,e.exports=function(){var e={67:function(e,t,n){n.r(t),n.d(t,{beforeSend:function(){return _},enter:function(){return k},getGateway:function(){return x},getMetaInfo:function(){return v},getNextTrackCode:function(){return f},install:function(){return S},setGateway:function(){return O},setLinkInstances:function(){return b},setMetaInfo:function(){return g},trackEvent:function(){return w},trackLinkConfig:function(){return T},trackLinkWakeup:function(){return D},trackShare:function(){return h}});var o={};function r(e){(e=e||{}).method=(e.method||"POST").toUpperCase(),e.url=e.url||"",e.data=e.data||null,e.success=e.success||function(){},e.error=e.error||function(){};var t=new XMLHttpRequest,n=[];for(var o in e.data)n.push(o+"="+encodeURIComponent(e.data[o]));var r=n.join("&"),i=JSON.stringify(e.data||{});"POST"===e.method?(t.open(e.method,e.url,!0),t.setRequestHeader("Content-Type","text/plain")):"GET"===e.method&&t.open(e.method,e.url+"?"+r,!0),t.withCredentials=!0,t.timeout=3e3,t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var n={};try{n=JSON.parse(t.responseText)}catch(e){}e.success(n)}else 4==t.readyState&&e.error(t.staus)},"POST"===e.method?t.send(i):t.send()}function i(e){return"function"==typeof e}function a(e){return Array.isArray(e)}n.r(o),n.d(o,{beforeSend:function(){return _},enter:function(){return k},getGateway:function(){return x},getMetaInfo:function(){return v},getNextTrackCode:function(){return f},setGateway:function(){return O},setLinkInstances:function(){return b},setMetaInfo:function(){return g},trackEvent:function(){return w},trackShare:function(){return h}});const u=[];let c="https://c.umsns.com";var d={jsver:"1.2.6",trackkey:"um_tc",root_track_key:"um_rtc",appkey:"",oid:"",trackcode:"",root_track_code:"",trackurl:""},l=function(e){},s=function(){return[]};function f(e){r({url:c+"/ulink/getTC",method:"POST",data:{appkey:d.appkey,openId:d.oid,unionId:d.uid,from:d.from,trackCode:d.trackcode,rootTrackCode:d.root_track_code,url:d.trackurl?d.trackurl:location.href},success:t=>{i(e)&&t&&t.data&&t.data.trackCode?e(t.data.trackCode):e("")},error:()=>{i(e)&&e("")}})}let p=null,m=[];function w(e,t,n,o){var r=t||{};r._um_id=e,r._um_tp=n||0,r._um_ts=Date.now(),u.push(r),m.push(o);var i=1e3;return r._um_send_defer?("number"==typeof r._um_send_defer&&r._um_send_defer>=0&&(i=r._um_send_defer),clearTimeout(p),void(p=setTimeout(()=>{clearTimeout(p),p=null,y()},i))):1===r._um_tp||4===r._um_tp||5===r._um_tp?(i=0,clearTimeout(p),void(p=setTimeout(()=>{clearTimeout(p),p=null,y()},i))):void(null===p&&(p=setTimeout(()=>{clearTimeout(p),p=null,y()},i)))}function y(){for(var e=[];u.length>0;)e.unshift(u.shift());var t,n;n=function(e){for(;m.length>0;){let t=m.shift();i(t)&&t(e)}},a((t={e:e,h:d}).e)&&t.e.length>0&&(function(){var e=s(),t=[];if(a(e))for(var n=0;n<e.length;n++)e[n]&&e[n].opts&&t.push(e[n].opts.id);a(e)&&e.length>0&&g({lids:t.join(",")}),g({trackurl:d.trackurl||location.href})}(),l(t),r({url:c+"/slink_logs",method:"POST",data:t,success:e=>{n(!0)},error:()=>{n(!1)}}))}function h(e,t){w("_um_share",e||{},3,t)}function k(e,t){var n=e||{};n.page=n.page?n.page:location.href,n.page_name=n.page_name?n.page_name:document.title,w("_um_pv",n,1,t)}function g(e){return function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");let n=Object(e);for(var o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(let e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}(d,e||{}),d}function v(){return d}function _(e){i(e)&&(l=e)}function b(e){i(e)&&(s=e)}function O(e){return e&&(c=e),c}function x(){return c}function T(e,t){w("_um_config",e||{},4,t)}function D(e,t){w("_um_wakeup",e||{},5,t)}function S(e,t){e.tracker=o,b(e.getInstances)}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(67)}()}))),o=navigator.userAgent||"";function r(e){e=e.toLowerCase();if(t("android"))return"android";if(t("ipad")||t("iphone")||t("ipod"))return"ios";if(t("windows phone"))return"windows phone";if(t("win32")||t("win64")||t("wow32")||t("wow64"))return"windows";if(t("mac"))return"os x";if(t("linux"))return"linux";function t(t){return e.indexOf(t)>-1}return"unknown"}function i(){return console.log(r(o)),"android"===r(o)}function a(){return"ios"===r(o)||"os x"===r(o)}var u=o,c=/micromessenger\/([\d.]+)/i.test(o),d=/qq\/([\d.]+)/i.test(o),l=/(qqbrowser)\/([\d.]+)/i.test(o),s=/qzone\/.*_qz_([\d.]+)/i.test(o),f=/DINGTALK\/([\d.]+)/i.test(o);function p(e,t){t=t||!1;for(var n={},o=(e=e||window.location.search.slice(1)).split("&"),r=0;r<o.length;r++){var i=o[r].split("="),a=i[0];if(a){var u="";i.length>1&&(u=t?decodeURIComponent(i[1]):i[1]),n[a]=u}}return n}function m(e){return Array.isArray(e)}function w(e){return"function"==typeof e}var y=Object.freeze({__proto__:null,isArray:m,isFunction:w,isAndroid:i,isIOS:a,userAgent:u,isWechat:c,isQQ:d,isQQBrowser:l,isQzone:s,isDingTalk:f,getUriParams:p,getUriDecodeParams:function(e){return p(e,!0)}});var h=window.screen||{},k=(window.devicePixelRatio||"")+"";function g(){var e=p(),t=n.getMetaInfo(),o=t.root_track_key,r=t.trackkey;if(o&&r){var i={};e[o]&&!t.root_track_code&&(i.root_track_code=e[o]),e[r]&&!t.trackcode&&(i.trackcode=e[r]),n.setMetaInfo(i)}}function v(t,o,r){if(t=t||{},g(),o=o||function(){},r=r||function(){},t.id){var u=p(),c=t.data||{},d=n.getMetaInfo();u.um_from_appkey&&(c.um_from_appkey=u.um_from_appkey),u.um_chnnl&&(c.um_chnnl=u.um_chnnl),d.root_track_code&&(c.um_rtc=d.root_track_code),d.trackcode&&(c.um_tc=d.trackcode);var l="";a()?l="ios":i()&&(l="android");var s={linkid:t.id,platform:l,um_from_appkey:u.um_from_appkey,um_chnnl:u.um_chnnl};!function(e){(e=e||{}).method=(e.method||"POST").toUpperCase(),e.url=e.url||"",e.data=e.data||null,e.success=e.success||function(){},e.error=e.error||function(){};var t=new XMLHttpRequest,n=[];for(var o in e.data)n.push(o+"="+encodeURIComponent(e.data[o]));var r=n.join("&"),i=JSON.stringify(e.data||{});"POST"===e.method?(t.open(e.method,e.url,!0),t.setRequestHeader("Content-Type","text/plain")):"GET"===e.method&&t.open(e.method,e.url+"?"+r,!0),t.withCredentials=!0,t.timeout=3e3,t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var n={};try{n=JSON.parse(t.responseText)}catch(e){}e.success(n)}else 4==t.readyState&&e.error(t.staus)},"POST"===e.method?t.send(i):t.send()}({url:n.getGateway()+"/deeplink/init",data:{linkId:t.id,platform:l,oid:d.oid,uid:d.uid,sw:h.width,sh:h.height,dpr:k,href:window.location.href,data:c},success:function(t){200===t.code?("object"===e(t.data)&&(s.appkey=t.data.appkey,s.type=t.data.type,s.wakeupUrl=t.data.wakeupUrl,s.downloadUrl=t.data.downloadUrl,s.code=t.code),o(t.data||{}),n.trackLinkConfig(s)):(r(t),s.code=t.code,n.trackLinkConfig(s))},error:function(){r({code:999999,msg:"服务出错了"}),s.code=999999,n.trackLinkConfig(s)}})}else r({})}function _(e,t,o,r){var u;o=o||{},r=r||{},t=t||{};var c="";a()?c="ios":i()&&(c="android"),u=setTimeout((function(){w(e)&&e(null,"timeout")}),1500),n.trackLinkWakeup({biztype:"dl-wakeup",linkid:t.id||"",wakeupUrl:o.wakeupUrl||"",downloadUrl:o.downloadUrl||"",appkey:o.appkey,action:t.action||"",elementId:r.elementId||"",className:r.className||"",platform:c},(function(t){clearTimeout(u),w(e)&&e(t)}))}function b(e){window.top&&window.top.location?window.top.location.href=e:window.location.href=e}function O(e,t){if(console.log("evokeByLocation"),e)if(void 0!==(t=t||{}).delay){var n=t.delay||0;setTimeout((function(){b(e)}),n)}else b(e)}g();var x,T,D=null;function S(e,t){var n=setTimeout((function(){void 0!==x&&document[x]||e()}),t||0);void 0!==T?document.addEventListener(T,(function(){clearTimeout(n)})):window.addEventListener("pagehide",(function(){clearTimeout(n)}))}function C(e,t){"string"==typeof t&&document.addEventListener("click",(function(n){for(var o=n.target;o&&!o.matches(t);)o=o.parentNode,document===o&&(o=null);o&&e(o)}))}function I(){var e=[],t=!1;function n(n){if(!t&&("onreadystatechange"!==n.type||"complete"===document.readyState&&"interactive"===document.readyState)){for(var o=0;o<e.length;o++)e[o].call(document);t=!0}}return document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("readystatechange",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",n),window.attachEvent("onload",n)),function(n){t||"complete"===document.readyState||"interactive"===document.readyState?n.call(document):e.push(n)}}void 0!==document.hidden?(x="hidden",T="visibilitychange"):void 0!==document.msHidden?(x="msHidden",T="msvisibilitychange"):void 0!==document.webkitHidden&&(x="webkitHidden",T="webkitvisibilitychange"),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});var E=[],L=function t(n,o){function r(n){if("object"===e(n)){var o=t.start(n,!0);n.lazy?(n.auto&&o.ready((function(e){I()((function(){e.wakeup({action:"load",timeout:n.timeout,proxyOpenDownload:n.proxyOpenDownload,beforeOpenDownload:n.beforeOpenDownload,afterOpenDownload:n.afterOpenDownload})}))})),C((function(e){o.ready((function(){o.wakeup({action:"click",timeout:n.timeout,className:e.className,elementId:e.id,proxyOpenDownload:n.proxyOpenDownload,beforeOpenDownload:n.beforeOpenDownload,afterOpenDownload:n.afterOpenDownload})}))}),n.selector)):(o.ready((function(e){n.auto&&I()((function(){console.log("dom ready"),e.wakeup({action:"load",timeout:n.timeout,proxyOpenDownload:n.proxyOpenDownload,beforeOpenDownload:n.beforeOpenDownload,afterOpenDownload:n.afterOpenDownload})}))})),C((function(e){o.wakeup({action:"click",timeout:n.timeout,className:e.className,elementId:e.id,proxyOpenDownload:n.proxyOpenDownload,beforeOpenDownload:n.beforeOpenDownload,afterOpenDownload:n.afterOpenDownload})}),n.selector))}}if(o)this.opts=n,E.push(this);else if(m(n))for(var i=0;i<n.length;i++)r(n[i]);else r(n)};for(var U in L.version="1.0.3",L.prototype={ready:function(e){var t=this,n=this.opts||{},o=function(){};w(e)&&(w(n.onready)&&(o=n.onready),v(n,(function(n){console.log("U-Link loadSolution success: ",n),t.solution=n,o.call(t,t),e(t)}),(function(n){console.log("U-Link loadSolution error: ",n),o.call(t,t,n),e(t,n)})))},wakeup:function(e){var t,n,o,r=e||{},u=this,p=200;"string"==typeof r.action&&["click","load","exp"].indexOf(e.action)>-1&&(u.opts.action=r.action),w(r.proxyOpenDownload)&&(t=r.proxyOpenDownload),w(r.beforeOpenDownload)&&(n=r.beforeOpenDownload),w(r.afterOpenDownload)&&(o=r.afterOpenDownload),"number"==typeof r.timeout&&(p=r.timeout),c&&i()&&(p=0);var m=u.opts||{},y=u.solution||{};if("scheme"===y.type?(_(null,m,y,{className:r.className,elementId:r.elementId}),y.wakeupUrl&&(d||a()&&(l||s)?function(e){console.log("evokeByTagA");var t=document.createElement("a");t.setAttribute("href",e),t.style.display="none",document.body.appendChild(t),t.click()}(y.wakeupUrl):f?function(){console.log("evokeByDownload");var e=document.createElement("a");e.setAttribute("download","u.gif"),e.setAttribute("href",window.location.href),e.style.display="none",document.body.appendChild(e),e.click()}():O(y.wakeupUrl))):_((function(){y.wakeupUrl&&O(y.wakeupUrl)}),m,y,{className:r.className,elementId:r.elementId}),y.downloadUrl){var h=function(e){n&&n.call(u),"scheme"===y.type&&(c||d)&&void 0!==m.useOpenInBrowerTips?function(e,t){D||((D=document.createElement("div")).id="umeng_mask","default"===e?(D.style="position:fixed;left:0;top:0;background:rgba(0,0,0,0.8);width:100%;height:100%;z-index:19910324;",D.innerHTML='<div style="text-align:right; margin-top:2%; margin-right:5%;"><img style="width:90%; margin:0 auto;" src="//gw.alicdn.com/imgextra/i4/O1CN01UErd1C1xDN2zSmD5r_!!6000000006409-2-tps-1216-226.png"></div>'):"function"==typeof e&&(D.innerHTML=e.call(t,t)),D.onclick=function(){document.body.removeChild(D),D=null},document.body.appendChild(D))}(m.useOpenInBrowerTips,u):function(e){if(window.ulinkOpenDownload=function(){window.location.href=e},!D){(D=document.createElement("div")).style="position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.2);font-size:14px;z-index:99999999999;";D.innerHTML='<div style="box-sizing:border-box;text-align:left;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:80%;max-width:500px;height:130px;padding:20px;background:#fff;color:#666;">    <div onclick="window.ulinkCloseDownloadTip()" style="position:absolute;top:5px;right:5px;font-size:20px;width:20px;text-align:center;color:#999;">×</div>    如未正常唤起，请点击下面按钮下载APP，或在浏览器中打开重试。    <div onclick="window.ulinkOpenDownload()" style="width:30%;height:30px;line-height:30px;margin:20px auto 0;text-align:center;color:#fff;background:#3b82fe;">点击下载</div>  </div>',document.body.appendChild(D),window.ulinkCloseDownloadTip=function(){document.body.removeChild(D),D=null;try{delete window.ulinkOpenDownload,delete window.ulinkCloseDownloadTip}catch(e){}}}}(y.downloadUrl),o&&o.call(u)};S((function(){t?t.call(u,h,u):h()}),p)}return u}},y)L[U]=y[U];return L.getInstances=function(){return E},L.use=function(e,t){return e&&w(e.install)&&e.install(L,t),w(e)&&e(L,t),this},L.start=function(e){return new L(e,!0)},L.setGateway=n.setGateway,L.use(n),L}));
