(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[86253,96258,20651,91622,98572,67783,59255],{159255:(d,u,e)=>{"use strict";e.r(u),e.d(u,{default:()=>x});var t=function(){if("undefined"!=typeof Map)return Map;function d(d,u){var e=-1;return d.some((function(d,t){return d[0]===u&&(e=t,!0)})),e}return function(){function u(){this.__entries__=[]}return Object.defineProperty(u.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),u.prototype.get=function(u){var e=d(this.__entries__,u),t=this.__entries__[e];return t&&t[1]},u.prototype.set=function(u,e){var t=d(this.__entries__,u);~t?this.__entries__[t][1]=e:this.__entries__.push([u,e])},u.prototype.delete=function(u){var e=this.__entries__,t=d(e,u);~t&&e.splice(t,1)},u.prototype.has=function(u){return!!~d(this.__entries__,u)},u.prototype.clear=function(){this.__entries__.splice(0)},u.prototype.forEach=function(d,u){void 0===u&&(u=null);for(var e=0,t=this.__entries__;e<t.length;e++){var n=t[e];d.call(u,n[1],n[0])}},u}()}(),n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,r=void 0!==e.g&&e.g.Math===Math?e.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(d){return setTimeout((function(){return d(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],f="undefined"!=typeof MutationObserver,i=function(){function d(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(d,u){var e=!1,t=!1,n=0;function r(){e&&(e=!1,d()),t&&f()}function c(){o(r)}function f(){var d=Date.now();if(e){if(d-n<2)return;t=!0}else e=!0,t=!1,setTimeout(c,u);n=d}return f}(this.refresh.bind(this),20)}return d.prototype.addObserver=function(d){~this.observers_.indexOf(d)||this.observers_.push(d),this.connected_||this.connect_()},d.prototype.removeObserver=function(d){var u=this.observers_,e=u.indexOf(d);~e&&u.splice(e,1),!u.length&&this.connected_&&this.disconnect_()},d.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},d.prototype.updateObservers_=function(){var d=this.observers_.filter((function(d){return d.gatherActive(),d.hasActive()}));return d.forEach((function(d){return d.broadcastActive()})),d.length>0},d.prototype.connect_=function(){n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),f?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},d.prototype.disconnect_=function(){n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),
window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},d.prototype.onTransitionEnd_=function(d){var u=d.propertyName,e=void 0===u?"":u;c.some((function(d){return!!~e.indexOf(d)}))&&this.refresh()},d.getInstance=function(){return this.instance_||(this.instance_=new d),this.instance_},d.instance_=null,d}(),a=function(d,u){for(var e=0,t=Object.keys(u);e<t.length;e++){var n=t[e];Object.defineProperty(d,n,{value:u[n],enumerable:!1,writable:!1,configurable:!0})}return d},s=function(d){return d&&d.ownerDocument&&d.ownerDocument.defaultView||r},l=y(0,0,0,0);function h(d){return parseFloat(d)||0}function p(d){for(var u=[],e=1;e<arguments.length;e++)u[e-1]=arguments[e];return u.reduce((function(u,e){return u+h(d["border-"+e+"-width"])}),0)}function b(d){var u=d.clientWidth,e=d.clientHeight;if(!u&&!e)return l;var t=s(d).getComputedStyle(d),n=function(d){for(var u={},e=0,t=["top","right","bottom","left"];e<t.length;e++){var n=t[e],r=d["padding-"+n];u[n]=h(r)}return u}(t),r=n.left+n.right,o=n.top+n.bottom,c=h(t.width),f=h(t.height);if("border-box"===t.boxSizing&&(Math.round(c+r)!==u&&(c-=p(t,"left","right")+r),Math.round(f+o)!==e&&(f-=p(t,"top","bottom")+o)),!function(d){return d===s(d).document.documentElement}(d)){var i=Math.round(c+r)-u,a=Math.round(f+o)-e;1!==Math.abs(i)&&(c-=i),1!==Math.abs(a)&&(f-=a)}return y(n.left,n.top,c,f)}var v="undefined"!=typeof SVGGraphicsElement?function(d){return d instanceof s(d).SVGGraphicsElement}:function(d){return d instanceof s(d).SVGElement&&"function"==typeof d.getBBox};function g(d){return n?v(d)?function(d){var u=d.getBBox();return y(0,0,u.width,u.height)}(d):b(d):l}function y(d,u,e,t){return{x:d,y:u,width:e,height:t}}var w=function(){function d(d){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=d}return d.prototype.isActive=function(){var d=g(this.target);return this.contentRect_=d,d.width!==this.broadcastWidth||d.height!==this.broadcastHeight},d.prototype.broadcastRect=function(){var d=this.contentRect_;return this.broadcastWidth=d.width,this.broadcastHeight=d.height,d},d}(),m=function(d,u){var e,t,n,r,o,c,f,i=(t=(e=u).x,n=e.y,r=e.width,o=e.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,f=Object.create(c.prototype),a(f,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),f);a(this,{target:d,contentRect:i})},E=function(){function d(d,u,e){if(this.activeObservations_=[],this.observations_=new t,"function"!=typeof d)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=d,this.controller_=u,this.callbackCtx_=e}return d.prototype.observe=function(d){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){
if(!(d instanceof s(d).Element))throw new TypeError('parameter 1 is not of type "Element".');var u=this.observations_;u.has(d)||(u.set(d,new w(d)),this.controller_.addObserver(this),this.controller_.refresh())}},d.prototype.unobserve=function(d){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(d instanceof s(d).Element))throw new TypeError('parameter 1 is not of type "Element".');var u=this.observations_;u.has(d)&&(u.delete(d),u.size||this.controller_.removeObserver(this))}},d.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},d.prototype.gatherActive=function(){var d=this;this.clearActive(),this.observations_.forEach((function(u){u.isActive()&&d.activeObservations_.push(u)}))},d.prototype.broadcastActive=function(){if(this.hasActive()){var d=this.callbackCtx_,u=this.activeObservations_.map((function(d){return new m(d.target,d.broadcastRect())}));this.callback_.call(d,u,d),this.clearActive()}},d.prototype.clearActive=function(){this.activeObservations_.splice(0)},d.prototype.hasActive=function(){return this.activeObservations_.length>0},d}(),_="undefined"!=typeof WeakMap?new WeakMap:new t,O=function d(u){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=i.getInstance(),t=new E(u,e,this);_.set(this,t)};["observe","unobserve","disconnect"].forEach((function(d){O.prototype[d]=function(){var u;return(u=_.get(this))[d].apply(u,arguments)}}));const x=void 0!==r.ResizeObserver?r.ResizeObserver:O},633202:(d,u,e)=>{"use strict";e.d(u,{default:()=>a});var t,n,r="function"==typeof Map?new Map:(t=[],n=[],{has:function(d){return t.indexOf(d)>-1},get:function(d){return n[t.indexOf(d)]},set:function(d,u){-1===t.indexOf(d)&&(t.push(d),n.push(u))},delete:function(d){var u=t.indexOf(d);u>-1&&(t.splice(u,1),n.splice(u,1))}}),o=function(d){return new Event(d,{bubbles:!0})};try{new Event("test")}catch(t){o=function(d){var u=document.createEvent("Event");return u.initEvent(d,!0,!1),u}}function c(d){var u=r.get(d);u&&u.destroy()}function f(d){var u=r.get(d);u&&u.update()}var i=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((i=function(d){return d}).destroy=function(d){return d},i.update=function(d){return d}):((i=function(d,u){return d&&Array.prototype.forEach.call(d.length?d:[d],(function(d){return function(d){if(d&&d.nodeName&&"TEXTAREA"===d.nodeName&&!r.has(d)){var u,e=null,t=null,n=null,c=function(){d.clientWidth!==t&&s()},f=function(u){window.removeEventListener("resize",c,!1),d.removeEventListener("input",s,!1),d.removeEventListener("keyup",s,!1),d.removeEventListener("autosize:destroy",f,!1),d.removeEventListener("autosize:update",s,!1),Object.keys(u).forEach((function(e){d.style[e]=u[e]})),r.delete(d)}.bind(d,{height:d.style.height,resize:d.style.resize,overflowY:d.style.overflowY,overflowX:d.style.overflowX,
wordWrap:d.style.wordWrap});d.addEventListener("autosize:destroy",f,!1),"onpropertychange"in d&&"oninput"in d&&d.addEventListener("keyup",s,!1),window.addEventListener("resize",c,!1),d.addEventListener("input",s,!1),d.addEventListener("autosize:update",s,!1),d.style.overflowX="hidden",d.style.wordWrap="break-word",r.set(d,{destroy:f,update:s}),"vertical"===(u=window.getComputedStyle(d,null)).resize?d.style.resize="none":"both"===u.resize&&(d.style.resize="horizontal"),e="content-box"===u.boxSizing?-(parseFloat(u.paddingTop)+parseFloat(u.paddingBottom)):parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth),isNaN(e)&&(e=0),s()}function i(u){var e=d.style.width;d.style.width="0px",d.style.width=e,d.style.overflowY=u}function a(){if(0!==d.scrollHeight){var u=function(d){for(var u=[];d&&d.parentNode&&d.parentNode instanceof Element;)d.parentNode.scrollTop&&u.push({node:d.parentNode,scrollTop:d.parentNode.scrollTop}),d=d.parentNode;return u}(d),n=document.documentElement&&document.documentElement.scrollTop;d.style.height="",d.style.height=d.scrollHeight+e+"px",t=d.clientWidth,u.forEach((function(d){d.node.scrollTop=d.scrollTop})),n&&(document.documentElement.scrollTop=n)}}function s(){a();var u=Math.round(parseFloat(d.style.height)),e=window.getComputedStyle(d,null),t="content-box"===e.boxSizing?Math.round(parseFloat(e.height)):d.offsetHeight;if(t<u?"hidden"===e.overflowY&&(i("scroll"),a(),t="content-box"===e.boxSizing?Math.round(parseFloat(window.getComputedStyle(d,null).height)):d.offsetHeight):"hidden"!==e.overflowY&&(i("hidden"),a(),t="content-box"===e.boxSizing?Math.round(parseFloat(window.getComputedStyle(d,null).height)):d.offsetHeight),n!==t){n=t;var r=o("autosize:resized");try{d.dispatchEvent(r)}catch(d){}}}}(d)})),d}).destroy=function(d){return d&&Array.prototype.forEach.call(d.length?d:[d],c),d},i.update=function(d){return d&&Array.prototype.forEach.call(d.length?d:[d],f),d});const a=i},895171:(d,u,e)=>{"use strict";e.d(u,{default:()=>r});var t=e(745582);const n=function(d,u){var e;if("function"!=typeof u)throw new TypeError("Expected a function");return d=(0,t.default)(d),function(){return--d>0&&(e=u.apply(this,arguments)),d<=1&&(u=void 0),e}};const r=function(d){return n(2,d)}},745582:(d,u,e)=>{"use strict";e.d(u,{default:()=>o});var t=e(968877),n=1/0;const r=function(d){return d?(d=(0,t.default)(d))===n||d===-1/0?17976931348623157e292*(d<0?-1:1):d==d?d:0:0===d?d:0};const o=function(d){var u=r(d),e=u%1;return u==u?e?u-e:u:0}},213398:function(d,u){var e,t,n,r;r=function(d){var u=Object.prototype.toString,e=Array.isArray||function(d){return"[object Array]"===u.call(d)};function t(d){return"function"==typeof d}function n(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(d,u){return null!=d&&"object"==typeof d&&u in d}var o=RegExp.prototype.test,c=/\S/;function f(d){return!function(d,u){return o.call(d,u)}(c,d)}var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},a=/\s*/,s=/\s+/,l=/\s*=/,h=/\s*\}/,p=/#|\^|\/|>|\{|&|=|!/;function b(d){
this.string=d,this.tail=d,this.pos=0}function v(d,u){this.view=d,this.cache={".":this.view},this.parent=u}function g(){this.cache={}}b.prototype.eos=function(){return""===this.tail},b.prototype.scan=function(d){var u=this.tail.match(d);if(!u||0!==u.index)return"";var e=u[0];return this.tail=this.tail.substring(e.length),this.pos+=e.length,e},b.prototype.scanUntil=function(d){var u,e=this.tail.search(d);switch(e){case-1:u=this.tail,this.tail="";break;case 0:u="";break;default:u=this.tail.substring(0,e),this.tail=this.tail.substring(e)}return this.pos+=u.length,u},v.prototype.push=function(d){return new v(d,this)},v.prototype.lookup=function(d){var u,e=this.cache;if(e.hasOwnProperty(d))u=e[d];else{for(var n,o,c=this,f=!1;c;){if(d.indexOf(".")>0)for(u=c.view,n=d.split("."),o=0;null!=u&&o<n.length;)o===n.length-1&&(f=r(u,n[o])),u=u[n[o++]];else u=c.view[d],f=r(c.view,d);if(f)break;c=c.parent}e[d]=u}return t(u)&&(u=u.call(this.view)),u},g.prototype.clearCache=function(){this.cache={}},g.prototype.parse=function(u,t){var r=this.cache,o=r[u];return null==o&&(o=r[u]=function(u,t){if(!u)return[];var r,o,c,i=[],v=[],g=[],y=!1,w=!1;function m(){if(y&&!w)for(;g.length;)delete v[g.pop()];else g=[];y=!1,w=!1}function E(d){if("string"==typeof d&&(d=d.split(s,2)),!e(d)||2!==d.length)throw new Error("Invalid tags: "+d);r=new RegExp(n(d[0])+"\\s*"),o=new RegExp("\\s*"+n(d[1])),c=new RegExp("\\s*"+n("}"+d[1]))}E(t||d.tags);for(var _,O,x,k,C,A,T=new b(u);!T.eos();){if(_=T.pos,x=T.scanUntil(r))for(var j=0,N=x.length;j<N;++j)f(k=x.charAt(j))?g.push(v.length):w=!0,v.push(["text",k,_,_+1]),_+=1,"\n"===k&&m();if(!T.scan(r))break;if(y=!0,O=T.scan(p)||"name",T.scan(a),"="===O?(x=T.scanUntil(l),T.scan(l),T.scanUntil(o)):"{"===O?(x=T.scanUntil(c),T.scan(h),T.scanUntil(o),O="&"):x=T.scanUntil(o),!T.scan(o))throw new Error("Unclosed tag at "+T.pos);if(C=[O,x,_,T.pos],v.push(C),"#"===O||"^"===O)i.push(C);else if("/"===O){if(!(A=i.pop()))throw new Error('Unopened section "'+x+'" at '+_);if(A[1]!==x)throw new Error('Unclosed section "'+A[1]+'" at '+_)}else"name"===O||"{"===O||"&"===O?w=!0:"="===O&&E(x)}if(A=i.pop())throw new Error('Unclosed section "'+A[1]+'" at '+T.pos);return function(d){for(var u,e=[],t=e,n=[],r=0,o=d.length;r<o;++r)switch((u=d[r])[0]){case"#":case"^":t.push(u),n.push(u),t=u[4]=[];break;case"/":n.pop()[5]=u[2],t=n.length>0?n[n.length-1][4]:e;break;default:t.push(u)}return e}(function(d){for(var u,e,t=[],n=0,r=d.length;n<r;++n)(u=d[n])&&("text"===u[0]&&e&&"text"===e[0]?(e[1]+=u[1],e[3]=u[3]):(t.push(u),e=u));return t}(v))}(u,t)),o},g.prototype.render=function(d,u,e){var t=this.parse(d),n=u instanceof v?u:new v(u);return this.renderTokens(t,n,e,d)},g.prototype.renderTokens=function(d,u,e,t){for(var n,r,o,c="",f=0,i=d.length;f<i;++f)o=void 0,"#"===(r=(n=d[f])[0])?o=this.renderSection(n,u,e,t):"^"===r?o=this.renderInverted(n,u,e,t):">"===r?o=this.renderPartial(n,u,e,t):"&"===r?o=this.unescapedValue(n,u):"name"===r?o=this.escapedValue(n,u):"text"===r&&(o=this.rawValue(n)),void 0!==o&&(c+=o);return c},
g.prototype.renderSection=function(d,u,n,r){var o=this,c="",f=u.lookup(d[1]);if(f){if(e(f))for(var i=0,a=f.length;i<a;++i)c+=this.renderTokens(d[4],u.push(f[i]),n,r);else if("object"==typeof f||"string"==typeof f||"number"==typeof f)c+=this.renderTokens(d[4],u.push(f),n,r);else if(t(f)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(f=f.call(u.view,r.slice(d[3],d[5]),(function(d){return o.render(d,u,n)})))&&(c+=f)}else c+=this.renderTokens(d[4],u,n,r);return c}},g.prototype.renderInverted=function(d,u,t,n){var r=u.lookup(d[1]);if(!r||e(r)&&0===r.length)return this.renderTokens(d[4],u,t,n)},g.prototype.renderPartial=function(d,u,e){if(e){var n=t(e)?e(d[1]):e[d[1]];return null!=n?this.renderTokens(this.parse(n),u,e,n):void 0}},g.prototype.unescapedValue=function(d,u){var e=u.lookup(d[1]);if(null!=e)return e},g.prototype.escapedValue=function(u,e){var t=e.lookup(u[1]);if(null!=t)return d.escape(t)},g.prototype.rawValue=function(d){return d[1]},d.name="mustache.js",d.version="2.2.1",d.tags=["{{","}}"];var y=new g;d.clearCache=function(){return y.clearCache()},d.parse=function(d,u){return y.parse(d,u)},d.render=function(d,u,t){if("string"!=typeof d)throw new TypeError('Invalid template! Template should be a "string" but "'+(e(n=d)?"array":typeof n)+'" was given as the first argument for mustache#render(template, view, partials)');var n;return y.render(d,u,t)},d.to_html=function(u,e,n,r){var o=d.render(u,e,n);if(!t(r))return o;r(o)},d.escape=function(d){return String(d).replace(/[&<>"'`=\/]/g,(function(d){return i[d]}))},d.Scanner=b,d.Context=v,d.Writer=g},u&&"string"!=typeof u.nodeName?r(u):(t=[u],void 0===(n="function"==typeof(e=r)?e.apply(u,t):e)||(d.exports=n))},386021:d=>{"use strict";const u=2147483647,e=36,t=/^xn--/,n=/[^\0-\x7E]/,r=/[\x2E\u3002\uFF0E\uFF61]/g,o={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},c=Math.floor,f=String.fromCharCode;function i(d){throw new RangeError(o[d])}function a(d,u){const e=d.split("@");let t="";e.length>1&&(t=e[0]+"@",d=e[1]);const n=function(d,u){const e=[];let t=d.length;for(;t--;)e[t]=u(d[t]);return e}((d=d.replace(r,".")).split("."),u).join(".");return t+n}function s(d){const u=[];let e=0;const t=d.length;for(;e<t;){const n=d.charCodeAt(e++);if(n>=55296&&n<=56319&&e<t){const t=d.charCodeAt(e++);56320==(64512&t)?u.push(((1023&n)<<10)+(1023&t)+65536):(u.push(n),e--)}else u.push(n)}return u}const l=function(d,u){return d+22+75*(d<26)-((0!=u)<<5)},h=function(d,u,t){let n=0;for(d=t?c(d/700):d>>1,d+=c(d/u);d>455;n+=e)d=c(d/35);return c(n+36*d/(d+38))},p=function(d){const t=[],n=d.length;let r=0,o=128,f=72,a=d.lastIndexOf("-");a<0&&(a=0);for(let u=0;u<a;++u)d.charCodeAt(u)>=128&&i("not-basic"),t.push(d.charCodeAt(u));for(let l=a>0?a+1:0;l<n;){let a=r;for(let t=1,o=e;;o+=e){l>=n&&i("invalid-input");const a=(s=d.charCodeAt(l++))-48<10?s-22:s-65<26?s-65:s-97<26?s-97:e;(a>=e||a>c((u-r)/t))&&i("overflow"),r+=a*t
;const h=o<=f?1:o>=f+26?26:o-f;if(a<h)break;const p=e-h;t>c(u/p)&&i("overflow"),t*=p}const p=t.length+1;f=h(r-a,p,0==a),c(r/p)>u-o&&i("overflow"),o+=c(r/p),r%=p,t.splice(r++,0,o)}var s;return String.fromCodePoint(...t)},b=function(d){const t=[];let n=(d=s(d)).length,r=128,o=0,a=72;for(const u of d)u<128&&t.push(f(u));let p=t.length,b=p;for(p&&t.push("-");b<n;){let n=u;for(const u of d)u>=r&&u<n&&(n=u);const s=b+1;n-r>c((u-o)/s)&&i("overflow"),o+=(n-r)*s,r=n;for(const n of d)if(n<r&&++o>u&&i("overflow"),n==r){let d=o;for(let u=e;;u+=e){const n=u<=a?1:u>=a+26?26:u-a;if(d<n)break;const r=d-n,o=e-n;t.push(f(l(n+r%o,0))),d=c(r/o)}t.push(f(l(d,0))),a=h(o,s,b==p),o=0,++b}++o,++r}return t.join("")},v={version:"2.1.0",ucs2:{decode:s,encode:d=>String.fromCodePoint(...d)},decode:p,encode:b,toASCII:function(d){return a(d,(function(d){return n.test(d)?"xn--"+b(d):d}))},toUnicode:function(d){return a(d,(function(d){return t.test(d)?p(d.slice(4).toLowerCase()):d}))}};d.exports=v},691622:(d,u,e)=>{"use strict";function t(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}function n(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);u&&(t=t.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,t)}return e}function r(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?n(Object(e),!0).forEach((function(u){t(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}function o(d){return"Minified Redux error #"+d+"; visit https://redux.js.org/Errors?code="+d+" for the full message or use the non-minified dev environment for full errors. "}e.d(u,{applyMiddleware:()=>v,bindActionCreators:()=>p,combineReducers:()=>l,compose:()=>b,createStore:()=>s});var c="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function a(d){if("object"!=typeof d||null===d)return!1;for(var u=d;null!==Object.getPrototypeOf(u);)u=Object.getPrototypeOf(u);return Object.getPrototypeOf(d)===u}function s(d,u,e){var t;if("function"==typeof u&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(o(0));if("function"==typeof u&&void 0===e&&(e=u,u=void 0),void 0!==e){if("function"!=typeof e)throw new Error(o(1));return e(s)(d,u)}if("function"!=typeof d)throw new Error(o(2));var n=d,r=u,f=[],l=f,h=!1;function p(){l===f&&(l=f.slice())}function b(){if(h)throw new Error(o(3));return r}function v(d){if("function"!=typeof d)throw new Error(o(4));if(h)throw new Error(o(5));var u=!0;return p(),l.push(d),function(){if(u){if(h)throw new Error(o(6));u=!1,p();var e=l.indexOf(d);l.splice(e,1),f=null}
}}function g(d){if(!a(d))throw new Error(o(7));if(void 0===d.type)throw new Error(o(8));if(h)throw new Error(o(9));try{h=!0,r=n(r,d)}finally{h=!1}for(var u=f=l,e=0;e<u.length;e++){(0,u[e])()}return d}function y(d){if("function"!=typeof d)throw new Error(o(10));n=d,g({type:i.REPLACE})}function w(){var d,u=v;return(d={subscribe:function(d){if("object"!=typeof d||null===d)throw new Error(o(11));function e(){d.next&&d.next(b())}return e(),{unsubscribe:u(e)}}})[c]=function(){return this},d}return g({type:i.INIT}),(t={dispatch:g,subscribe:v,getState:b,replaceReducer:y})[c]=w,t}function l(d){for(var u=Object.keys(d),e={},t=0;t<u.length;t++){var n=u[t];0,"function"==typeof d[n]&&(e[n]=d[n])}var r,c=Object.keys(e);try{!function(d){Object.keys(d).forEach((function(u){var e=d[u];if(void 0===e(void 0,{type:i.INIT}))throw new Error(o(12));if(void 0===e(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error(o(13))}))}(e)}catch(d){r=d}return function(d,u){if(void 0===d&&(d={}),r)throw r;for(var t=!1,n={},f=0;f<c.length;f++){var i=c[f],a=e[i],s=d[i],l=a(s,u);if(void 0===l){u&&u.type;throw new Error(o(14))}n[i]=l,t=t||l!==s}return(t=t||c.length!==Object.keys(d).length)?n:d}}function h(d,u){return function(){return u(d.apply(this,arguments))}}function p(d,u){if("function"==typeof d)return h(d,u);if("object"!=typeof d||null===d)throw new Error(o(16));var e={};for(var t in d){var n=d[t];"function"==typeof n&&(e[t]=h(n,u))}return e}function b(){for(var d=arguments.length,u=new Array(d),e=0;e<d;e++)u[e]=arguments[e];return 0===u.length?function(d){return d}:1===u.length?u[0]:u.reduce((function(d,u){return function(){return d(u.apply(void 0,arguments))}}))}function v(){for(var d=arguments.length,u=new Array(d),e=0;e<d;e++)u[e]=arguments[e];return function(d){return function(){var e=d.apply(void 0,arguments),t=function(){throw new Error(o(15))},n={getState:e.getState,dispatch:function(){return t.apply(void 0,arguments)}},c=u.map((function(d){return d(n)}));return t=b.apply(void 0,c)(e.dispatch),r(r({},e),{},{dispatch:t})}}}},376111:(d,u,e)=>{"use strict";var t=e(823127),n=e(778785).mobiletouch;!function(d,u,e){function t(t,n){n=n||t+e;var r=d(),o=t+"."+n+"-special-event";function c(u){d(r).each((function(){var e=d(this);this===u.target||e.has(u.target).length||e.triggerHandler(n,[u.target])}))}d.event.special[n]={setup:function(){delete(r=r.add(this)).prevObject,1===r.length&&d(u).bind(o,c)},teardown:function(){delete(r=r.not(this)).prevObject,0===r.length&&d(u).unbind(o)},add:function(d){var u=d.handler;d.handler=function(d,e){d.target=e,u.apply(this,arguments)}}}}d.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "),(function(d){t(d)})),t("focusin","focusoutside"),t("focusout","bluroutside"),n&&(t("touchstart","mousedownoutside"),t("touchmove","mousemoveoutside"),t("touchend","mouseupoutside")),d.addOutsideEvent=t}(t,document,"outside")},161530:(d,u,e)=>{"use strict";var t=e(823127);e(567849),function(d){
var u=!1,e=document.body||document.documentElement,t="animation",n="Webkit Moz O ms Khtml".split(" "),r="";if(void 0!==e.style.animationName&&(u=!0),!1===u)for(var o=0;o<n.length;o++)if(void 0!==e.style[n[o]+"AnimationName"]){r=n[o],t=r+"Animation","-"+r.toLowerCase()+"-",u=!0;break}var c=["webkit","moz","MS","o",""];var f="flicker-enable",i="flicker-options";function a(d){d.stop(!0),d.css("background-color",""),d.removeData(f),d.removeData(i)}function s(u){var e=u.data(f);e&&(!0!==e?--e?(l(u),u.data(f,e)):function(u){var e=u.data(i).complete;a(u),e&&d.isFunction(e)&&e()}(u):l(u))}function l(d){var u=d.css("background-color"),e=d.data(i),t=e.highlightColor||"#fbf8e9",n=e.duration||400,r=e.easing||"swing";d.animate({"background-color":t},n,r).animate({"background-color":u},n,r,s.bind(d,d))}d.fn.highlight=function(e,n){return!1===e?this.each((function(){u?this.style[t]="":a(d(this))})):(e=void 0===e||e,this.each((function(){if(u){e=!0===e?"infinite":e,function(d,u,e){for(var t=0;t<c.length;t++)c[t]||(u=u.toLowerCase()),d.addEventListener(c[t]+u,e,!1)}(this,"AnimationEnd",(function(){this.style[t]=""})),document.getElementsByTagName("html")[0].classList.contains("theme-dark")?this.style[t]="highlight-animation-theme-dark 0.4s ease-in-out "+e+" alternate":this.style[t]="highlight-animation 0.4s ease-in-out "+e+" alternate"}else{var r=d(this);r.data(f,e),r.data(i,d.extend({},n||{})),r.is(":animated")||l(r)}})))}}(t)},332848:(d,u,e)=>{"use strict";var t,n,r,o=e(823127);t=o,void 0!==document.hidden?(n="hidden",r="visibilitychange"):void 0!==document.mozHidden?(n="mozHidden",r="mozvisibilitychange"):void 0!==document.msHidden?(n="msHidden",r="msvisibilitychange"):void 0!==document.webkitHidden&&(n="webkitHidden",r="webkitvisibilitychange"),t.tabvisible=!0,r&&(t(document).on(r,(function(d){t.tabvisible=!document[n],t(window).trigger("visibilitychange",!document[n])})),t(document).trigger(r)),t.whenTabVisible=function(d){!r||t.tabvisible?d():t(window).one("visibilitychange",d)}},818438:(d,u,e)=>{"use strict";e.d(u,{default:()=>t});const t=function(){var d={base:"https://twemoji.maxcdn.com/v/13.0.1/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;if(u<65536)return c(u);return c(55296+((u-=65536)>>10),56320+(1023&u))},toCodePoint:g},onerror:function(){this.parentNode&&this.parentNode.replaceChild(f(this.alt,!1),this)},parse:function(u,e){e&&"function"!=typeof e||(e={callback:e});return("string"==typeof u?h:l)(u,{callback:e.callback||i,attributes:"function"==typeof e.attributes?e.attributes:b,base:"string"==typeof e.base?e.base:d.base,ext:e.ext||d.ext,size:e.folder||(t=e.size||d.size,"number"==typeof t?t+"x"+t:t),className:e.className||d.className,onerror:e.onerror||d.onerror});var t},replace:v,test:function(d){e.lastIndex=0;var u=e.test(d);return e.lastIndex=0,u}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"
},e=/(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,t=/\uFE0F/g,n=String.fromCharCode(8205),r=/[&<>'"]/g,o=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,c=String.fromCharCode
;return d;function f(d,u){return document.createTextNode(u?d.replace(t,""):d)}function i(d,u){return"".concat(u.base,u.size,"/",d,u.ext)}function a(d,u){for(var e,t,n=d.childNodes,r=n.length;r--;)3===(t=(e=n[r]).nodeType)?u.push(e):1!==t||"ownerSVGElement"in e||o.test(e.nodeName.toLowerCase())||a(e,u);return u}function s(d){return g(d.indexOf(n)<0?d.replace(t,""):d)}function l(d,u){for(var t,n,r,o,c,i,l,h,p,b,v,g,y,w=a(d,[]),m=w.length;m--;){for(r=!1,o=document.createDocumentFragment(),i=(c=w[m]).nodeValue,h=0;l=e.exec(i);){if((p=l.index)!==h&&o.appendChild(f(i.slice(h,p),!0)),g=s(v=l[0]),h=p+v.length,y=u.callback(g,u),g&&y){for(n in(b=new Image).onerror=u.onerror,b.setAttribute("draggable","false"),t=u.attributes(v,g))t.hasOwnProperty(n)&&0!==n.indexOf("on")&&!b.hasAttribute(n)&&b.setAttribute(n,t[n]);b.className=u.className,b.alt=v,b.src=y,r=!0,o.appendChild(b)}b||o.appendChild(f(v,!1)),b=null}r&&(h<i.length&&o.appendChild(f(i.slice(h),!0)),c.parentNode.replaceChild(o,c))}return d}function h(d,u){return v(d,(function(d){var e,t,n=d,o=s(d),c=u.callback(o,u);if(o&&c){for(t in n="<img ".concat('class="',u.className,'" ','draggable="false" ','alt="',d,'"',' src="',c,'"'),e=u.attributes(d,o))e.hasOwnProperty(t)&&0!==t.indexOf("on")&&-1===n.indexOf(" "+t+"=")&&(n=n.concat(" ",t,'="',e[t].replace(r,p),'"'));n=n.concat("/>")}return n}))}function p(d){return u[d]}function b(){return null}function v(d,u){return String(d).replace(e,u)}function g(d,u){for(var e=[],t=0,n=0,r=0;r<d.length;)t=d.charCodeAt(r++),n?(e.push((65536+(n-55296<<10)+(t-56320)).toString(16)),n=0):55296<=t&&t<=56319?n=t:e.push(t.toString(16));return e.join(u||"-")}}()}}]);