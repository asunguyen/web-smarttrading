(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[70183,77892,51349],{150335:(e,r)=>{"use strict";function t(e){return Math.round(1e10*e)/1e10}Object.defineProperty(r,"__esModule",{value:!0}),r.alignTo=r.fixComputationError=r.isNaN=r.isInteger=r.isNumber=void 0,r.isNumber=function(e){return"number"==typeof e&&isFinite(e)},r.isInteger=function(e){return"number"==typeof e&&e%1==0},r.isNaN=function(e){return!(e<=0||e>0)},r.fixComputationError=t,r.alignTo=function(e,r){var n=e/r,i=Math.floor(n),o=n-i;return o>2e-10?t(o>.5?(i+1)*r:i*r):e}},724377:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(150335);function i(e,r,t){return n.isNaN(r)||r<e?e:r>t?t:Math.round(r)}function o(e,r,t){return n.isNaN(r)||r<e?e:r>t?t:Math.round(1e4*r)/1e4}function a(e){return i(0,e,255)}function s(e){return i(0,e,255)}function u(e){return i(0,e,255)}function f(e){return o(0,e,1)}function c(e){return o(0,e,1)}function l(e){return o(0,e,1)}function d(e){return o(0,e,1)}function p(e){return o(0,e,1)}function v(e){return o(0,e,1)}function m(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255,i=Math.min(r,t,n),o=Math.max(r,t,n),a=0,s=0,u=(i+o)/2;if(i===o)a=0,s=0;else{var f=o-i;switch(s=u>.5?f/(2-o-i):f/(o+i),o){case r:a=((t-n)/f+(t<n?6:0))/6;break;case t:a=((n-r)/f+2)/6;break;case n:a=((r-t)/f+4)/6}}return[a,s,u]}function h(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function b(e){var r,t,n,i=e[0],o=e[1],f=e[2];if(0===o)r=t=n=f;else{var c=f<.5?f*(1+o):f+o-f*o,l=2*f-c;r=h(l,c,i+1/3),t=h(l,c,i),n=h(l,c,i-1/3)}return[a(255*r),s(255*t),u(255*n)]}r.normalizeRedComponent=a,r.normalizeGreenComponent=s,r.normalizeBlueComponent=u,r.normalizeAlphaComponent=f,r.rgb=function(e,r,t){return[a(e),s(r),u(t)]},r.areEqualRgb=function(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]},r.rgba=function(e,r,t,n){if(Array.isArray(e)){var i=e;return n=r,[i[0],i[1],i[2],f(n)]}var o=r;return t=t||0,n=n||0,[a(e),s(o),u(t),f(n)]},r.areEqualRgba=function(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]&&e[3]===r[3]},r.normalizeHue=c,r.normalizeHslSaturation=l,r.normalizeHsvSaturation=d,r.normalizeLightness=p,r.normalizeValue=v,r.hsl=function(e,r,t){return[c(e),l(r),p(t)]},r.areEqualHsl=function(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]},r.hsv=function(e,r,t){return[c(e),d(r),v(t)]},r.areEqualHsv=function(e,r){return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]},r.rgbToHsl=m,r.hslToRgb=b,r.rgbToHsv=function(e){var r=e[0],t=e[1],n=e[2],i=r/255,o=t/255,a=n/255,s=Math.min(i,o,a),u=Math.max(i,o,a),f=u-s,c=0,l=0===u?0:f/u,d=u;if(u===s)c=0;else switch(u){case r:c=((o-a)/f+(o<a?6:0))/6;break;case t:c=((a-i)/f+2)/6;break;case n:c=((i-o)/f+4)/6}return[c,l,d]},r.hsvToRgb=function(e){var r=e[0],t=e[1],n=e[2],i=Math.floor(6*r),o=6*r-i,f=n*(1-t),c=n*(1-o*t),l=n*(1-(1-o)*t),d=0,p=0,v=0;switch(i%6){case 0:d=n,p=l,v=f;break;case 1:d=c,p=n,v=f;break;case 2:d=f,p=n,v=l;break;case 3:d=f,p=c,v=n;break;case 4:d=l,p=f,v=n;break;case 5:d=n,p=f,v=c}return[a(255*d),s(255*p),u(255*v)]};var g=[.199,.687,.114]
;function y(e){return g[0]*e[0]+g[1]*e[1]+g[2]*e[2]}function w(e,r,t){void 0===t&&(t=.05);var n=m(e),i=n[0]+r*t;return n[0]=c(i-Math.floor(i)),b(n)}function k(e,r,t){void 0===t&&(t=.05);var n=e[0],i=e[1],o=e[2],a=e[3],s=w([n,i,o],r,t);return[s[0],s[1],s[2],a]}r.rgbToGrayscale=y,r.distanceRgb=function(e,r){var t=e[0],n=e[1],i=e[2],o=r[0]-t,a=r[1]-n,s=r[2]-i;return Math.sqrt(o*o+a*a+s*s)},r.invertRgb=function(e){return[255-e[0],255-e[1],255-e[2]]},r.darkenRgb=function(e,r){var t=m(e);return b([t[0],t[1],p(t[2]-r/100)])},r.blendRgba=function(e,r){var t=e[0],n=e[1],i=e[2],o=e[3],c=r[0],l=r[1],d=r[2],p=r[3],v=f(1-(1-p)*(1-o));return[a(c*p/v+t*o*(1-p)/v),s(l*p/v+n*o*(1-p)/v),u(d*p/v+i*o*(1-p)/v),v]},r.shiftRgb=w,r.shiftRgba=k,r.shiftColor=function(e,r,t){return void 0===t&&(t=.05),L(k($(e),r,t))};var S,x,_,E,O={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",feldspar:"#d19275",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslateblue:"#8470ff",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",
peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",violetred:"#d02090",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function R(e,r){return r in e}function j(e){var r=S.re.exec(e);return null!==r?S.parse(r):null}function T(e){var r=x.re.exec(e);return null!==r?x.parse(r):null}function C(e){var r=_.re.exec(e);return null!==r?_.parse(r):null}function P(e){var r=E.re.exec(e);return null!==r?E.parse(r):null}function L(e){return"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function A(e){if(e=e.toLowerCase(),R(O,e)){var r=T(O[e]);if(null!==r)return r;throw new Error("Invalid named color definition")}var t=j(e);if(null!==t)return t;var n=T(e);if(null!==n)return n;var i=C(e);if(null!==i)return i;var o=P(e);return null!==o?[o[0],o[1],o[2]]:null}function N(e){if(e=e.toLowerCase(),R(O,e)){var r=T(O[e]);if(null!==r)return[r[0],r[1],r[2],1];throw new Error("Invalid named color definition")}var t=j(e);if(null!==t)return[t[0],t[1],t[2],1];var n=T(e);if(null!==n)return[n[0],n[1],n[2],1];var i=C(e);if(null!==i)return[i[0],i[1],i[2],1];var o=P(e);return null!==o?o:null}function $(e){var r=N(e);if(null!==r)return r;throw new Error("Passed color string does not match any of the known color representations")}!function(e){e.re=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,e.parse=function(e){return[a(parseInt(e[1],10)),s(parseInt(e[2],10)),u(parseInt(e[3],10))]}}(S||(S={})),r.rgbToString=function(e){return"rgb("+e[0]+", "+e[1]+", "+e[2]+")"},function(e){e.re=/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,e.parse=function(e){return[a(parseInt(e[1],16)),s(parseInt(e[2],16)),u(parseInt(e[3],16))]}}(x||(x={})),r.rgbToHexString=function(e){var r=e[0],t=e[1],n=e[2],i=r.toString(16),o=t.toString(16),a=n.toString(16);return"#"+(1===i.length?"0":"")+i+(1===o.length?"0":"")+o+(1===a.length?"0":"")+a},function(e){e.re=/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,e.parse=function(e){return[a(parseInt(e[1]+e[1],16)),s(parseInt(e[2]+e[2],16)),u(parseInt(e[3]+e[3],16))]}}(_||(_={})),function(e){e.re=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/,e.parse=function(e){return[a(parseInt(e[1],10)),s(parseInt(e[2],10)),u(parseInt(e[3],10)),f(parseFloat(e[4]))]}}(E||(E={})),r.rgbaToString=L,r.rgbToBlackWhiteString=function(e,r){if(r<0||r>255)throw new Error("invalid threshold value, valid values are [0, 255]");return y(e)>=r?"white":"black"},r.tryParseRgb=A,r.parseRgb=function(e){var r=A(e);if(null!==r)return r;throw new Error("Passed color string does not match any of the known color representations")},
r.tryParseRgba=N,r.parseRgba=$},77034:function(e,r,t){var n;n=function(){var e=!0;function r(r){function t(e){var t=r.match(e);return t&&t.length>1&&t[1]||""}function n(e){var t=r.match(e);return t&&t.length>1&&t[2]||""}var i,a=t(/(ipod|iphone|ipad)/i).toLowerCase(),s=!/like android/i.test(r)&&/android/i.test(r),u=/nexus\s*[0-6]\s*/i.test(r),f=!u&&/nexus\s*[0-9]+/i.test(r),c=/CrOS/.test(r),l=/silk/i.test(r),d=/sailfish/i.test(r),p=/tizen/i.test(r),v=/(web|hpw)(o|0)s/i.test(r),m=/windows phone/i.test(r),h=(/SamsungBrowser/i.test(r),!m&&/windows/i.test(r)),b=!a&&!l&&/macintosh/i.test(r),g=!s&&!d&&!p&&!v&&/linux/i.test(r),y=n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),w=t(/version\/(\d+(\.\d+)?)/i),k=/tablet/i.test(r)&&!/tablet pc/i.test(r),S=!k&&/[^-]mobi/i.test(r),x=/xbox/i.test(r);/opera/i.test(r)?i={name:"Opera",opera:e,version:w||t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(r)?i={name:"Opera",opera:e,version:t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(r)?i={name:"Samsung Internet for Android",samsungBrowser:e,version:w||t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/Whale/i.test(r)?i={name:"NAVER Whale browser",whale:e,version:t(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)}:/MZBrowser/i.test(r)?i={name:"MZ Browser",mzbrowser:e,version:t(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/coast/i.test(r)?i={name:"Opera Coast",coast:e,version:w||t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/focus/i.test(r)?i={name:"Focus",focus:e,version:t(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)}:/yabrowser/i.test(r)?i={name:"Yandex Browser",yandexbrowser:e,version:w||t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(r)?i={name:"UC Browser",ucbrowser:e,version:t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(r)?i={name:"Maxthon",maxthon:e,version:t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(r)?i={name:"Epiphany",epiphany:e,version:t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(r)?i={name:"Puffin",puffin:e,version:t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(r)?i={name:"Sleipnir",sleipnir:e,version:t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(r)?i={name:"K-Meleon",kMeleon:e,version:t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:m?(i={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},y?(i.msedge=e,i.version=y):(i.msie=e,i.version=t(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(r)?i={name:"Internet Explorer",msie:e,version:t(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:c?i={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(r)?i={name:"Microsoft Edge",msedge:e,version:y}:/vivaldi/i.test(r)?i={name:"Vivaldi",vivaldi:e,version:t(/vivaldi\/(\d+(\.\d+)?)/i)||w}:d?i={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(r)?i={name:"SeaMonkey",seamonkey:e,version:t(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(r)?(i={name:"Firefox",firefox:e,version:t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},
/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(r)&&(i.firefoxos=e,i.osname="Firefox OS")):l?i={name:"Amazon Silk",silk:e,version:t(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(r)?i={name:"PhantomJS",phantom:e,version:t(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(r)?i={name:"SlimerJS",slimer:e,version:t(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(r)||/rim\stablet/i.test(r)?i={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:w||t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:v?(i={name:"WebOS",osname:"WebOS",webos:e,version:w||t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(r)&&(i.touchpad=e)):/bada/i.test(r)?i={name:"Bada",osname:"Bada",bada:e,version:t(/dolfin\/(\d+(\.\d+)?)/i)}:p?i={name:"Tizen",osname:"Tizen",tizen:e,version:t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(r)?i={name:"QupZilla",qupzilla:e,version:t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(r)?i={name:"Chromium",chromium:e,version:t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(r)?i={name:"Chrome",chrome:e,version:t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:s?i={name:"Android",version:w}:/safari|applewebkit/i.test(r)?(i={name:"Safari",safari:e},w&&(i.version=w)):a?(i={name:"iphone"==a?"iPhone":"ipad"==a?"iPad":"iPod"},w&&(i.version=w)):i=/googlebot/i.test(r)?{name:"Googlebot",googlebot:e,version:t(/googlebot\/(\d+(\.\d+))/i)||w}:{name:t(/^(.*)\/(.*) /),version:n(/^(.*)\/(.*) /)},!i.msedge&&/(apple)?webkit/i.test(r)?(/(apple)?webkit\/537\.36/i.test(r)?(i.name=i.name||"Blink",i.blink=e):(i.name=i.name||"Webkit",i.webkit=e),!i.version&&w&&(i.version=w)):!i.opera&&/gecko\//i.test(r)&&(i.name=i.name||"Gecko",i.gecko=e,i.version=i.version||t(/gecko\/(\d+(\.\d+)?)/i)),i.windowsphone||!s&&!i.silk?!i.windowsphone&&a?(i[a]=e,i.ios=e,i.osname="iOS"):b?(i.mac=e,i.osname="macOS"):x?(i.xbox=e,i.osname="Xbox"):h?(i.windows=e,i.osname="Windows"):g&&(i.linux=e,i.osname="Linux"):(i.android=e,i.osname="Android");var _="";i.windows?_=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(t(/Windows ((NT|XP)( \d\d?.\d)?)/i)):i.windowsphone?_=t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i.mac?_=(_=t(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):a?_=(_=t(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):s?_=t(/android[ \/-](\d+(\.\d+)*)/i):i.webos?_=t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):i.blackberry?_=t(/rim\stablet\sos\s(\d+(\.\d+)*)/i):i.bada?_=t(/bada\/(\d+(\.\d+)*)/i):i.tizen&&(_=t(/tizen[\/\s](\d+(\.\d+)*)/i)),_&&(i.osversion=_);var E=!i.windows&&_.split(".")[0];return k||f||"ipad"==a||s&&(3==E||E>=4&&!S)||i.silk?i.tablet=e:(S||"iphone"==a||"ipod"==a||s||u||i.blackberry||i.webos||i.bada)&&(i.mobile=e),
i.msedge||i.msie&&i.version>=10||i.yandexbrowser&&i.version>=15||i.vivaldi&&i.version>=1||i.chrome&&i.version>=20||i.samsungBrowser&&i.version>=4||i.whale&&1===o([i.version,"1.0"])||i.mzbrowser&&1===o([i.version,"6.0"])||i.focus&&1===o([i.version,"1.0"])||i.firefox&&i.version>=20||i.safari&&i.version>=6||i.opera&&i.version>=10||i.ios&&i.osversion&&i.osversion.split(".")[0]>=6||i.blackberry&&i.version>=10.1||i.chromium&&i.version>=20?i.a=e:i.msie&&i.version<10||i.chrome&&i.version<20||i.firefox&&i.version<20||i.safari&&i.version<6||i.opera&&i.version<10||i.ios&&i.osversion&&i.osversion.split(".")[0]<6||i.chromium&&i.version<20?i.c=e:i.x=e,i}var t=r("undefined"!=typeof navigator&&navigator.userAgent||"");function n(e){return e.split(".").length}function i(e,r){var t,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,r);for(t=0;t<e.length;t++)n.push(r(e[t]));return n}function o(e){for(var r=Math.max(n(e[0]),n(e[1])),t=i(e,(function(e){var t=r-n(e);return i((e+=new Array(t+1).join(".0")).split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));--r>=0;){if(t[0][r]>t[1][r])return 1;if(t[0][r]!==t[1][r])return-1;if(0===r)return 0}}function a(e,n,i){var a=t;"string"==typeof n&&(i=n,n=void 0),void 0===n&&(n=!1),i&&(a=r(i));var s=""+a.version;for(var u in e)if(e.hasOwnProperty(u)&&a[u]){if("string"!=typeof e[u])throw new Error("Browser version in the minVersion map should be a string: "+u+": "+String(e));return o([s,e[u]])<0}return n}return t.test=function(e){for(var r=0;r<e.length;++r){var n=e[r];if("string"==typeof n&&n in t)return!0}return!1},t.isUnsupportedBrowser=a,t.compareVersions=o,t.check=function(e,r,t){return!a(e,r,t)},t._detect=r,t.detect=r,t},e.exports?e.exports=n():t.amdD("bowser",n)},497754:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)&&t.length){var a=i.apply(null,t);a&&e.push(a)}else if("object"===o)for(var s in t)n.call(t,s)&&t[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(e.exports=t)}()},503060:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});const n=t(178160).default.Symbol},128177:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var n=t(503060),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=n.default?n.default.toStringTag:void 0;const u=function(e){var r=o.call(e,s),t=e[s];try{e[s]=void 0;var n=!0}catch(e){}var i=a.call(e);return n&&(r?e[s]=t:delete e[s]),i};var f=Object.prototype.toString;const c=function(e){return f.call(e)};var l=n.default?n.default.toStringTag:void 0;const d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?u(e):c(e)}},489956:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});const n="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g},178160:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var n=t(489956),i="object"==typeof self&&self&&self.Object===Object&&self
;const o=n.default||i||Function("return this")()},12481:(e,r,t)=>{"use strict";t.d(r,{default:()=>f});var n=t(598279),i=t(178160);const o=function(){return i.default.Date.now()};var a=t(968877),s=Math.max,u=Math.min;const f=function(e,r,t){var i,f,c,l,d,p,v=0,m=!1,h=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(r){var t=i,n=f;return i=f=void 0,v=r,l=e.apply(n,t)}function y(e){return v=e,d=setTimeout(k,r),m?g(e):l}function w(e){var t=e-p;return void 0===p||t>=r||t<0||h&&e-v>=c}function k(){var e=o();if(w(e))return S(e);d=setTimeout(k,function(e){var t=r-(e-p);return h?u(t,c-(e-v)):t}(e))}function S(e){return d=void 0,b&&i?g(e):(i=f=void 0,l)}function x(){var e=o(),t=w(e);if(i=arguments,f=this,p=e,t){if(void 0===d)return y(p);if(h)return clearTimeout(d),d=setTimeout(k,r),g(p)}return void 0===d&&(d=setTimeout(k,r)),l}return r=(0,a.default)(r)||0,(0,n.default)(t)&&(m=!!t.leading,c=(h="maxWait"in t)?s((0,a.default)(t.maxWait)||0,r):c,b="trailing"in t?!!t.trailing:b),x.cancel=function(){void 0!==d&&clearTimeout(d),v=0,i=p=f=d=void 0},x.flush=function(){return void 0===d?l:S(o())},x}},598279:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});const n=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},383527:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});const n=function(e){return null!=e&&"object"==typeof e}},708875:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var n=t(128177),i=t(383527);const o=function(e){return"symbol"==typeof e||(0,i.default)(e)&&"[object Symbol]"==(0,n.default)(e)}},343370:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var n=t(12481),i=t(598279);const o=function(e,r,t){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,i.default)(t)&&(o="leading"in t?!!t.leading:o,a="trailing"in t?!!t.trailing:a),(0,n.default)(e,r,{leading:o,maxWait:r,trailing:a})}},968877:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var n=t(598279),i=t(708875),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt;const c=function(e){if("number"==typeof e)return e;if((0,i.default)(e))return NaN;if((0,n.default)(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=(0,n.default)(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var t=s.test(e);return t||u.test(e)?f(e.slice(2),t?2:8):a.test(e)?NaN:+e}},695257:(e,r)=>{"use strict";var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}function g(){}function y(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}
b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var w=y.prototype=new g;w.constructor=y,m(w,b.prototype),w.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,x={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var i,o={},a=null,s=null;if(null!=r)for(i in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)S.call(r,i)&&!_.hasOwnProperty(i)&&(o[i]=r[i]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var f=Array(u),c=0;c<u;c++)f[c]=arguments[c+2];o.children=f}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===o[i]&&(o[i]=u[i]);return{$$typeof:t,type:e,key:a,ref:s,props:o,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function j(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function T(e,r,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return a=a(u=e),e=""===o?"."+j(u,0):o,k(a)?(i="",null!=e&&(i=e.replace(R,"$&/")+"/"),T(a,r,i,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),r.push(a)),1;if(u=0,o=""===o?".":o+":",k(e))for(var f=0;f<e.length;f++){var c=o+j(s=e[f],f);u+=T(s,r,i,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),f=0;!(s=e.next()).done;)u+=T(s=s.value,r,i,c=o+j(s,f++),a);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,r,t){if(null==e)return e;var n=[],i=0;return T(e,n,"","",(function(e){return r.call(t,e,i++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},A={transition:null},N={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:A,ReactCurrentOwner:x};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0
;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=i,r.Profiler=a,r.PureComponent=y,r.StrictMode=o,r.Suspense=c,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=x.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in r)S.call(r,f)&&!_.hasOwnProperty(f)&&(i[f]=void 0===r[f]&&void 0!==u?u[f]:r[f])}var f=arguments.length-2;if(1===f)i.children=n;else if(1<f){u=Array(f);for(var c=0;c<f;c++)u[c]=arguments[c+2];i.children=u}return{$$typeof:t,type:e.type,key:o,ref:a,props:i,_owner:s}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=A.transition;A.transition={};try{e()}finally{A.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return L.current.useCallback(e,r)},r.useContext=function(e){return L.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return L.current.useDeferredValue(e)},r.useEffect=function(e,r){return L.current.useEffect(e,r)},r.useId=function(){return L.current.useId()},r.useImperativeHandle=function(e,r,t){return L.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return L.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return L.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return L.current.useMemo(e,r)},r.useReducer=function(e,r,t){return L.current.useReducer(e,r,t)},r.useRef=function(e){return L.current.useRef(e)},r.useState=function(e){return L.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return L.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return L.current.useTransition()},r.version="18.2.0"},50959:(e,r,t)=>{"use strict";e.exports=t(695257)},685459:function(e,r,t){var n;!function(r){"use strict";function i(){}var o=i.prototype,a=r.EventEmitter;function s(e,r){for(var t=e.length;t--;)if(e[t].listener===r)return t;return-1}function u(e){return function(){return this[e].apply(this,arguments)}}function f(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&f(e.listener)}
o.getListeners=function(e){var r,t,n=this._getEvents();if(e instanceof RegExp)for(t in r={},n)n.hasOwnProperty(t)&&e.test(t)&&(r[t]=n[t]);else r=n[e]||(n[e]=[]);return r},o.flattenListeners=function(e){var r,t=[];for(r=0;r<e.length;r+=1)t.push(e[r].listener);return t},o.getListenersAsObject=function(e){var r,t=this.getListeners(e);return t instanceof Array&&((r={})[e]=t),r||t},o.addListener=function(e,r){if(!f(r))throw new TypeError("listener must be a function");var t,n=this.getListenersAsObject(e),i="object"==typeof r;for(t in n)n.hasOwnProperty(t)&&-1===s(n[t],r)&&n[t].push(i?r:{listener:r,once:!1});return this},o.on=u("addListener"),o.addOnceListener=function(e,r){return this.addListener(e,{listener:r,once:!0})},o.once=u("addOnceListener"),o.defineEvent=function(e){return this.getListeners(e),this},o.defineEvents=function(e){for(var r=0;r<e.length;r+=1)this.defineEvent(e[r]);return this},o.removeListener=function(e,r){var t,n,i=this.getListenersAsObject(e);for(n in i)i.hasOwnProperty(n)&&-1!==(t=s(i[n],r))&&i[n].splice(t,1);return this},o.off=u("removeListener"),o.addListeners=function(e,r){return this.manipulateListeners(!1,e,r)},o.removeListeners=function(e,r){return this.manipulateListeners(!0,e,r)},o.manipulateListeners=function(e,r,t){var n,i,o=e?this.removeListener:this.addListener,a=e?this.removeListeners:this.addListeners;if("object"!=typeof r||r instanceof RegExp)for(n=t.length;n--;)o.call(this,r,t[n]);else for(n in r)r.hasOwnProperty(n)&&(i=r[n])&&("function"==typeof i?o.call(this,n,i):a.call(this,n,i));return this},o.removeEvent=function(e){var r,t=typeof e,n=this._getEvents();if("string"===t)delete n[e];else if(e instanceof RegExp)for(r in n)n.hasOwnProperty(r)&&e.test(r)&&delete n[r];else delete this._events;return this},o.removeAllListeners=u("removeEvent"),o.emitEvent=function(e,r){var t,n,i,o,a=this.getListenersAsObject(e);for(o in a)if(a.hasOwnProperty(o))for(t=a[o].slice(0),i=0;i<t.length;i++)!0===(n=t[i]).once&&this.removeListener(e,n.listener),n.listener.apply(this,r||[])===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},o.trigger=u("emitEvent"),o.emit=function(e){var r=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,r)},o.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},o._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},o._getEvents=function(){return this._events||(this._events={})},i.noConflict=function(){return r.EventEmitter=a,i},void 0===(n=function(){return i}.call(r,t,r,e))||(e.exports=n)}(this||{})}}]);