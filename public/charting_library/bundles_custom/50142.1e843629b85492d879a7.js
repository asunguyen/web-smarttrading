(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[50142,48970],{284316:e=>{e.exports={badge:"badge-PlSmolIm",content:"content-PlSmolIm","size-xsmall":"size-xsmall-PlSmolIm","size-small":"size-small-PlSmolIm","size-medium":"size-medium-PlSmolIm","size-large":"size-large-PlSmolIm","size-xlarge":"size-xlarge-PlSmolIm"}},686267:e=>{e.exports={preview:"preview-gDIex6UB",fixedHeight:"fixedHeight-gDIex6UB",ratio16by9:"ratio16by9-gDIex6UB",ratio2by1:"ratio2by1-gDIex6UB","broken-image":"broken-image-gDIex6UB","preview-grid":"preview-grid-gDIex6UB",picture:"picture-gDIex6UB",image:"image-gDIex6UB","image-link":"image-link-gDIex6UB",middle:"middle-gDIex6UB",corner:"corner-gDIex6UB","corner-top-left":"corner-top-left-gDIex6UB","corner-top-right":"corner-top-right-gDIex6UB","corner-bottom-left":"corner-bottom-left-gDIex6UB","corner-bottom-right":"corner-bottom-right-gDIex6UB"}},708887:e=>{e.exports={header:"header-TUPxzdRV",logo:"logo-TUPxzdRV",icon:"icon-TUPxzdRV",date:"date-TUPxzdRV",doth:"doth-TUPxzdRV",provider:"provider-TUPxzdRV"}},800710:e=>{e.exports={block:"block-zMaq9C23",icon:"icon-zMaq9C23"}},352537:e=>{e.exports={stack:"stack-L2E26Swf","stack--xxxsmall":"stack--xxxsmall-L2E26Swf","stack--xsmall":"stack--xsmall-L2E26Swf"}},830493:(e,t,n)=>{"use strict";n.d(t,{Preview:()=>c,PreviewBottomLeftCorner:()=>d,PreviewBottomRightCorner:()=>_,PreviewGrid:()=>u,PreviewImage:()=>p,PreviewImageLink:()=>f,PreviewMiddle:()=>h,PreviewResizeMode:()=>o,PreviewTopLeftCorner:()=>g,PreviewTopRightCorner:()=>m});var o,r=n(50959),i=n(497754),a=n(686267),s=n.n(a);function l(e){const{corner:t,className:n,children:o,...a}=e;return r.createElement("div",{...a,className:i(s().corner,s()[`corner-${t}`])},o)}function c(e){const{resizeMode:t=o.FixedHeight,className:n,children:a,...l}=e;return r.createElement("div",{...l,className:i(s().preview,s()[t],n)},a)}function u(e){const{className:t,children:n,...o}=e;return r.createElement("div",{...o,className:i(s()["preview-grid"],t)},n)}function g(e){return r.createElement(l,{...e,corner:"top-left"})}function m(e){return r.createElement(l,{...e,corner:"top-right"})}function d(e){return r.createElement(l,{...e,corner:"bottom-left"})}function _(e){return r.createElement(l,{...e,corner:"bottom-right"})}function h(e){const{className:t,...n}=e;return r.createElement("div",{...n,className:i(s().middle,t)})}function p(e){const{className:t,sources:n,fallbackSrc:o,role:a="presentation",loading:l="lazy",alt:c,...u}=e,[g,m]=(0,r.useState)(!1);return r.createElement("picture",{className:i(s().picture,g&&s()["broken-image"])},null==n?void 0:n.map(((e,t)=>r.createElement("source",{...e,key:t}))),r.createElement("img",{...u,alt:c,src:o,onError:()=>m(!0),role:a,loading:l,className:i(s().image,t)}))}function f(e){const{className:t,tabIndex:n=-1,"aria-hidden":o=!0,...a}=e;return r.createElement("a",{...a,tabIndex:n,"aria-hidden":o,className:i(s()["image-link"],t)})}!function(e){e.FixedHeight="fixedHeight",e.Ratio16by9="ratio16by9",e.Ratio2by1="ratio2by1"}(o||(o={}))},555243:(e,t,n)=>{"use strict"
;function o(e,t){return new Intl.DateTimeFormat(t,{year:"numeric",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",calendar:"gregory",timeZoneName:"short"}).format(e)}function r(e){return e?`${e}-u-hc-h23`:void 0}function i(e,t,n="long"){const o=Math.floor(e/1e3),r=Math.sign(o),[i,a]=function(e){if(e<90)return[1,"minute"];if(e<2700)return[Math.max(Math.floor(e/60),2),"minute"];if(e<5400)return[1,"hour"];if(e<79200)return[Math.max(Math.floor(e/60/60),2),"hour"];if(e<129600)return[1,"day"];if(e<216e4)return[Math.max(Math.floor(e/86400),2),"day"];if(e<3888e3)return[1,"month"];if(e<29808e3)return[Math.max(Math.floor(e/2592e3),2),"month"];return e<47088e3?[1,"year"]:[Math.max(Math.floor(e/31536e3),2),"year"]}(Math.abs(o));return new Intl.RelativeTimeFormat(t,{numeric:"auto",style:n}).format(r*i,a)}n.d(t,{formatTime:()=>i,getLabel:()=>o,getLocale:()=>r})},463682:(e,t,n)=>{"use strict";n.d(t,{AgoDateFormatter:()=>v,Time:()=>y});var o=n(50959),r=n(497754),i=n(555243);function a(){if(!window.customElements.get("relative-time")){class e extends HTMLElement{static get observedAttributes(){return["event-time","locale","format-style"]}constructor(){super(),this._currentTime=0,this._eventTime=0,this._locale=void 0,this._style="long",this._isConnected=!1,this._date=document.createElement("time");const e=this.getAttribute("ssr-time");this._currentTime=e?Date.parse(e):Date.now();this.attachShadow({mode:"closed"}).appendChild(this._date)}connectedCallback(){this._isConnected=!0,this.classList.add("apply-common-tooltip"),this._updateAttributes(),this._connectionChanged()}disconnectedCallback(){this._isConnected=!1,this._connectionChanged()}attributeChangedCallback(e,t,n){"event-time"===e&&(this._eventTime=Date.parse(n)),"locale"===e&&(this._locale=n),"format-style"===e&&(this._style=n),this._isConnected&&(this._updateAttributes(),this.update(Date.now()))}update(e){const t=this._eventTime-e,n=(0,i.formatTime)(t,this._locale,this._style);this._date.innerText=n}_updateAttributes(){const e=new Date(this._eventTime);this.setAttribute("title",(0,i.getLabel)(e,(0,i.getLocale)(this._locale))),this._date.setAttribute("datetime",e.toUTCString())}_connectionChanged(){this._isConnected?(s.add(this),this.update(this._currentTime),u()):s.delete(this)}}window.customElements.define("relative-time",e)}}const s=new Set;let l=0,c=0;function u(){0===l&&0===c&&0!==s.size&&(l=setTimeout((()=>{l=0,c=requestAnimationFrame((()=>{c=0,u(),function(){const e=Date.now();for(const t of s)t.update(e)}()}))}),3e4))}function g(e){const{ssrTime:t,eventTime:n,localeIso:r,formatStyle:i,fallbackText:s,isSSR:l}=e,c=new Date(t||Date.now()),u=new Date(n),g=(0,o.useRef)(null);return l||(0,o.useLayoutEffect)((()=>{const e=g.current;s&&e&&!e.textContent&&(e.textContent=s)})),(0,o.useEffect)((()=>{const e=g.current;Intl.RelativeTimeFormat&&(e&&e.remove(),a())}),[]),o.createElement("relative-time",{locale:r,"ssr-time":c.toUTCString(),"event-time":u.toUTCString(),"format-style":i},o.createElement(m,{startDate:c,endDate:u,localeIso:r,style:i,ref:g}))}
const m=o.forwardRef(((e,t)=>{const{startDate:n,endDate:r,localeIso:a,style:s}=e;if(Intl.RelativeTimeFormat){const e=(0,o.useMemo)((()=>{const e=r.getTime()-n.getTime();return(0,i.formatTime)(e,a,s)}),[]);return o.createElement("time",{ref:t,dateTime:r.toUTCString(),suppressHydrationWarning:!0},e)}return o.createElement("time",{ref:t,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0})}));var d=n(812352),_=n(716714),h=n(958067);function p(e){return function(e){const t=new Date(e),n=new _.TimeFormatter(_.hourMinuteFormat),o=h.dateFormatFunctions["MMM dd"](t,!0);return[n.formatLocal(t),o]}(e).join(" ").replace(" "," · ")}var f=n(684987);const w=(0,d.getLocaleIso)();function y(e){const t=new Date(e.eventTime);return o.createElement("time",{dateTime:t.toUTCString(),className:r(e.title&&"apply-common-tooltip",e.className),title:e.title,suppressHydrationWarning:!0},e.children)}function v(e){const t=new Date,n=new Date(e.eventTime),r=n.getTime(),i=t.getTime()-r,a=t.getFullYear()!==n.getFullYear();return!a&&i<6912e5?o.createElement(g,{eventTime:e.eventTime,ssrTime:e.ssrTime,localeIso:w,fallbackText:p(r),isSSR:!1}):o.createElement(y,{eventTime:e.eventTime,title:(0,f.getFormatterFullContent)(e.eventTime)},function(e,t){if(t)return(0,f.getFormatterContentWithYear)(e);return(0,f.getFormatterContent)(e)}(r,a))}},684987:(e,t,n)=>{"use strict";n.d(t,{getFormatterContent:()=>a,getFormatterContentWithYear:()=>s,getFormatterFullContent:()=>i,getFormatterTime:()=>l,getFormatterYear:()=>c});var o=n(812352);function r(){const e=(0,o.getLocaleIso)();return e&&`${e}-u-hc-h23`}const i=e=>{const t=u(e).getTime();return new Intl.DateTimeFormat(r(),{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",calendar:"gregory",timeZoneName:"short"}).format(t)},a=e=>{const t=u(e).getTime();return new Intl.DateTimeFormat(r(),{month:"short",day:"numeric",calendar:"gregory"}).format(t)},s=e=>{const t=u(e).getTime();return new Intl.DateTimeFormat(r(),{month:"short",day:"numeric",calendar:"gregory",year:"numeric"}).format(t)},l=e=>{const t=u(e).getTime();return new Intl.DateTimeFormat(r(),{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(t)},c=e=>u(e).getFullYear();function u(e){return e instanceof Date?e:new Date(e)}},597051:(e,t,n)=>{"use strict";function o(e){return[e-1,e,e+1]}n.d(t,{getNearbyNewsIndices:()=>o})},878056:(e,t,n)=>{"use strict";n.d(t,{getNewsCardVisualProps:()=>l,prepareLogoUrls:()=>c});var o=n(957052),r=n(830493),i=n(162362),a=n(124025),s=n(607546);function l(e,t,n){return{title:e.title,link:(0,i.getNewsItemLink)(e),logoUrlsOrSymbols:e.relatedSymbols?c(e.relatedSymbols.slice(0,4)):[],ssrTimeMs:n,source:e.source,published:e.published,showExternalLink:Boolean(e.isExternal),showUnauthTitle:(0,a.isProviderPermission)(e,t),isExclusive:e.isExclusive,urgency:e.urgency,previewImage:e.previewImage,previewResizeMode:r.PreviewResizeMode.Ratio2by1,isFlash:e.is_flash}}function c(e){return(0,o.default)(e,(e=>{const t=(0,s.removeUsdFromCryptoPairLogos)((0,s.resolveLogoUrls)(e));return t.length?t.map(u):{
symbol:e.symbol}}))}function u(e){return{logoUrl:e}}},664715:(e,t,n)=>{"use strict";n.d(t,{HEADLINE_HEAD_DEFAULT_THEME:()=>u,HeadlineHead:()=>g});var o=n(50959),r=n(497754),i=n(83436),a=n(816770),s=n(463682),l=n(713071),c=n(708887);const u=n.n(c)();function g(e){const{theme:t=u,source:n,ssrTimeMs:c,published:g,logoUrlsOrSymbols:m,showUnauthTitle:d,className:_}=e;return o.createElement("div",{className:r(t.header,_)},0!==m.length&&o.createElement(a.CircleLogoStack,{className:t.logo,logoUrlsOrSymbols:e.logoUrlsOrSymbols}),o.createElement("span",{className:r(t.date,n&&t.doth)},o.createElement(s.AgoDateFormatter,{eventTime:g,ssrTime:c,isSSR:!1})),o.createElement("span",{className:t.provider},n&&o.createElement("span",{className:t.source},n),d&&o.createElement(i.Icon,{className:t.icon,icon:l})))}},317772:(e,t,n)=>{"use strict";n.d(t,{HeadlineUnauthTitle:()=>g});var o=n(50959),r=n(444372),i=n(497754),a=n(83436),s=n(842076),l=n(718937),c=n(800710),u=n.n(c);function g(e){return o.createElement("div",{className:i(u().block,e.className)},o.createElement(s.WrapWithLastWord,{text:r.t(null,void 0,n(910218))},o.createElement(a.Icon,{className:u().icon,icon:l})))}},752604:(e,t,n)=>{"use strict";n.d(t,{isCountryCode:()=>r,toCountryCode:()=>i});const o=/^[A-Z]{2}$/;function r(e){return o.test(e)}function i(e){if(r(e))return e;throw new Error("Invalid country code")}},253018:(e,t,n)=>{"use strict";n.r(t),n.d(t,{onNewsCardAction:()=>g});var o=n(201089),r=n(615063),i=n(395706),a=n(597051);function s(e,t,o,r){const s=t.filter((e=>!e.isExternal)),l=s.map((e=>t=>(0,i.getTradingViewStoryItem)(e.id,t).catch((e=>e&&"object"==typeof e&&"errorStatus"in e?Promise.resolve(e):Promise.resolve(void 0)))));!async function(e,t,o,r,i){const s=(0,a.getNearbyNewsIndices)(e).map((e=>t[e])),[{openTradingViewNewsDescriptionDialogImpl:l},...c]=await Promise.all([Promise.all([n.e(22666),n.e(5993),n.e(62253),n.e(92191),n.e(32109),n.e(72639),n.e(9817),n.e(53842),n.e(92108),n.e(89842),n.e(48986),n.e(35649),n.e(5145),n.e(38669),n.e(30006),n.e(25190),n.e(67080),n.e(13821),n.e(54234),n.e(34690),n.e(27620),n.e(84372),n.e(398),n.e(163),n.e(15025),n.e(13954),n.e(66863),n.e(78059),n.e(4752),n.e(79396),n.e(98126),n.e(86201),n.e(35462),n.e(962),n.e(90051),n.e(19051),n.e(72930),n.e(19479),n.e(94664)]).then(n.bind(n,717684)),...s.map((e=>e?e():Promise.resolve(void 0)))]);l(e,c,t,o,r,i)}(s.findIndex((t=>t.id===e.id)),l,e.analyticsData,o,r)}function l(e){const{newsItem:t,newsItems:n,newsId:o=null,provider:i=null,placement:a,onOpen:l}=e;(0,r.trackNewsClick)({area:t.analyticsData.area,section:t.analyticsData.section,category:t.analyticsData.category,country:t.analyticsData.country,language:t.analyticsData.language,link:null,news_id:o||t.id,provider:i||t.source,symbol:t.analyticsData.proSymbol,page:(0,r.getPageName)(),placement:a}),t.isExternal||s(t,n,a,l)}var c=n(124025);const u=(0,o.getLogger)("News.CardClickAction");function g(e){return t=>{(0,c.isProviderPermission)(e.newsItem,window.is_authenticated)?(t.preventDefault(),window.runOrSignIn((()=>m(e,t)),{
source:"News item permission provider",mode:"signup"})):m(e,t)}}function m(e,t){const{newsItem:n,newsItems:o,placement:r,onCardAction:i,newsDialogOpen:a}=e;if(n.isExternal)if(n.link){const e=t.target.closest("a");l({newsItem:n,newsItems:o,newsId:e.pathname,provider:e.hostname,placement:r,onOpen:a})}else u.logError(`No link for external news item with id "${n.id}"`);else t.preventDefault(),l({newsItem:n,newsItems:o,placement:r,onOpen:a});null==i||i()}},395706:(e,t,n)=>{"use strict";n.d(t,{getTradingViewStoryItem:()=>l});var o=n(120780),r=n(501437),i=n(39654),a=n(650151),s=n(217101);async function l(e,t){const l=(0,i.getIsoLanguageCodeFromLanguage)((0,a.ensureDefined)(window.language)),c=(0,r.createUrlParams)({id:e,lang:l,user_country:(0,s.getNewsCountry)()}),u=`${window.NEWS_SERVICE_URL}/v2/story?`,[g,{storyItemTransform:m}]=await Promise.all([(0,o.fetch)(`${u}${c}`,{signal:t}),n.e(78447).then(n.bind(n,973259))]);if(!g.ok){const t={id:e,errorStatus:g.status};return Promise.reject(t)}return g.json().then((e=>m(e)))}},217101:(e,t,n)=>{"use strict";n.d(t,{getNewsCountry:()=>s});var o=n(201089),r=n(752604),i=n(148970);const a=(0,o.getLogger)("Lib.CountryCode");function s(e){return e||("in"===window.locale?function(e){var t,n;try{return(0,r.toCountryCode)(null===(n=null===(t=i[e])||void 0===t?void 0:t.geoip_code)||void 0===n?void 0:n.toUpperCase())}catch(t){return a.logError(`Get ISO country code from locale "${e}" failed: ${t.message}`),(0,r.toCountryCode)(i.en.geoip_code.toUpperCase())}}(window.locale):null)}},877765:(e,t,n)=>{"use strict";function o(e){return{...e,published:e.published?1e3*e.published:Date.now()}}n.d(t,{newsItemTransform:()=>o})},124025:(e,t,n)=>{"use strict";n.d(t,{isHeadlinePermission:()=>a,isPreviewPermission:()=>r,isProviderPermission:()=>i});var o=n(887357);function r(e,t){return s(e,t,o.NewsItemPermission.Preview)}function i(e,t){return s(e,t,o.NewsItemPermission.Provider)}function a(e,t){return s(e,t,o.NewsItemPermission.Headline)}function s(e,t,n){return!t&&e.permission===n}},615063:(e,t,n)=>{"use strict";n.d(t,{getPageName:()=>a,trackNewsClick:()=>i});var o=n(345848),r=n(776734);async function i(e){null!==e.provider&&(0,o.trackEvent)("News","click",e.provider);const t=await(0,r.getTracker)();t&&t.trackNewsClick({...e,user_id:window.user.id||null})}function a(){if(window.TradingView.onChartPage)return"chart";const e=window.location.pathname;if("/"===e)return"main";const t=e.split("/")[1];return"chart"===t?"idea":t}},162362:(e,t,n)=>{"use strict";n.d(t,{getNewsItemLink:()=>r,isTradingViewNewsItem:()=>i});var o=n(314802);function r(e){return e.isExternal?e.link:(0,o.urlWithMobileAppParams)(e.storyPath)}function i(e){return!!e&&"published"in e}},812352:(e,t,n)=>{"use strict";n.d(t,{getLocale:()=>s,getLocaleIso:()=>l,getLocales:()=>a});var o=n(650151),r=n(148970);const i=function(){const e=document.querySelectorAll("link[rel~=link-locale][data-locale]");if(0===e.length)return r;const t={};return e.forEach((e=>{const n=(0,o.ensureNotNull)(e.getAttribute("data-locale"));t[n]={...r[n],href:e.href}})),t
}();function a(){return i}function s(e){return e=e||window.locale,i[e]}function l(e){var t;return e=e||window.locale,null===(t=i[e])||void 0===t?void 0:t.iso}},842076:(e,t,n)=>{"use strict";n.d(t,{WrapWithLastWord:()=>r});var o=n(50959);function r(e){if(void 0===e.children)return o.createElement(o.Fragment,null,e.text);const[t,n]=function(e){const t=e.split(" "),n=t.pop();return[t.length?t.join(" ")+" ":"",n]}(e.text);return o.createElement(o.Fragment,null,t,o.createElement("span",{className:"i-no-break"},n,e.children))}},607546:(e,t,n)=>{"use strict";n.d(t,{getLogoUrlsHook:()=>a,removeUsdFromCryptoPairLogos:()=>s,resolveLogoUrls:()=>i});var o=n(849204);const r=(0,o.getLogoUrlResolver)();function i(e,t=o.LogoSize.Medium){const n=e.logoid,i=e["base-currency-logoid"],a=e["currency-logoid"],s=n&&r.getSymbolLogoUrl(n,t);if(s)return[s];const l=i&&r.getSymbolLogoUrl(i,t),c=a&&r.getSymbolLogoUrl(a,t);return l&&c?[l,c]:l?[l]:c?[c]:[]}function a(e,t){let n=!1;return(o,r,a)=>{const l=o["currency-logoid"]&&o["base-currency-logoid"];if(!n&&(o.logoid||l||a)){n=!0;const r=s(i({logoid:o.logoid,"base-currency-logoid":o["base-currency-logoid"],"currency-logoid":o["currency-logoid"]},t));e(r)}}}function s(e){return 2!==e.length?e:function(e){return e.some((e=>l(e)))}(e)&&!function(e){return e.some((e=>e.includes("country")&&!l(e)))}(e)?e.filter((e=>!l(e))):e}function l(e){return e.includes("country/US")}},816770:(e,t,n)=>{"use strict";n.d(t,{CircleLogoStack:()=>c});var o=n(50959),r=n(497754),i=n(230285);function a(e){return"logoUrl"in e}var s=n(495217),l=n(352537);function c(e){const{size:t="xxxsmall"}=e,n=function(e){const t=[],n=new Set,o=e.slice();for(;0!==o.length;){const e=o.shift();if(!e)break;const r=a(e),s=r?e.logoUrl:e.symbol;if(!n.has(s)&&(n.add(s),r?t.push(e):t.push({placeholderLetter:(0,i.splitSymbolName)(e.symbol)[1][0]}),4===t.length))break}return t}(e.logoUrlsOrSymbols);return o.createElement("ul",{className:r(l.stack,l[`stack--${t}`],e.className)},n.map(((e,n)=>o.createElement("li",{key:n},o.createElement(s.CircleLogo,{...e,size:t,loading:"lazy"})))))}},230285:(e,t,n)=>{"use strict";function o(e){return e.includes(":")?e.split(":"):["",e]}n.d(t,{splitSymbolName:()=>o})},713071:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9.5 3A2.5 2.5 0 0 0 7 5.5V7h5V5.5A2.5 2.5 0 0 0 9.5 3ZM6 5.5V7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2V5.5a3.5 3.5 0 1 0-7 0ZM9.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>'},718937:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11.78 8.38a1 1 0 0 1 0 1.24l-4 5a1 1 0 1 1-1.56-1.24L9.72 9l-3.5-4.38a1 1 0 1 1 1.56-1.24l4 5Z"/></svg>'},148970:e=>{"use strict"
;e.exports=JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"sa","geoip_code":"sa","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"global_name":"Portuguese"},"ca_ES":{"language":"ca_ES","language_name":"Català","flag":"es","geoip_code":"es","priority":745,"iso":"ca","iso_639_3":"cat","disabled":true,"show_on_widgets":true,"global_name":"Catalan"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"deu","show_on_widgets":true,"global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":false,"global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"ron","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
}}]);