(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[68241],{274099:t=>{t.exports={toast:"toast-ggQH9Zyp","intent-success":"intent-success-ggQH9Zyp","intent-warning":"intent-warning-ggQH9Zyp","intent-danger":"intent-danger-ggQH9Zyp",image:"image-ggQH9Zyp","main-content":"main-content-ggQH9Zyp","toast-close-button":"toast-close-button-ggQH9Zyp",title:"title-ggQH9Zyp","header-text":"header-text-ggQH9Zyp","header-text_margin-top":"header-text_margin-top-ggQH9Zyp","main-text":"main-text-ggQH9Zyp",actions:"actions-ggQH9Zyp","with-close-button":"with-close-button-ggQH9Zyp"}},901767:(t,e,i)=>{"use strict";i.d(e,{ToastActions:()=>h,ToastContainer:()=>l,ToastHeaderText:()=>u,ToastImage:()=>d,ToastMainText:()=>g,ToastTitle:()=>c});var o=i(50959),n=i(497754),s=i(410864),a=i(274099),r=i.n(a);function l(t){const{children:e,role:i,className:a,intent:l=s.ToastIntent.Default,...d}=t,c=n(r().toast,l!==s.ToastIntent.Default&&r()[`intent-${l}`],a);return o.createElement("article",{className:c,role:i,...d},e)}function d(t){const{children:e,className:i}=t;return o.createElement("div",{className:n(r().image,i),"aria-hidden":!0},e)}function c(t){const{children:e,className:i,...s}=t;return o.createElement("h2",{...s,className:n(r().title,i)},e)}function u(t){const{children:e,className:i,...s}=t;return o.createElement("h3",{...s,className:n(r()["header-text"],i)},e)}function g(t){const{children:e,className:i,...s}=t;return o.createElement("p",{...s,className:n(r()["main-text"],i)},e)}function h(t){const{children:e,className:i}=t;return o.createElement("div",{className:n(r().actions,i)},e)}},548592:(t,e,i)=>{"use strict";i.d(e,{isScreenRecordingOn:()=>s,toggleScreenRecordingState:()=>a});var o=i(49437);const n="scereen-recording-on";function s(){return null!==o.TVLocalStorage.getItem(n)}function a(t=!0){var e,i,s,a;t?(o.TVLocalStorage.setItem(n,"true"),null===(i=null===(e=window.TVD)||void 0===e?void 0:e.startedScreenCapture)||void 0===i||i.call(e)):(o.TVLocalStorage.removeItem(n),null===(a=null===(s=window.TVD)||void 0===s?void 0:s.stoppedScreenCapture)||void 0===a||a.call(s))}},239401:(t,e,i)=>{"use strict";var o,n,s;i.d(e,{CloseTrigger:()=>o,ToastAnimationStage:()=>n,ToastPriority:()=>s}),function(t){t.Swipe="swipe",t.Click="click"}(o||(o={})),function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove",t[t.None=2]="None"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(s||(s={}))},327020:t=>{t.exports={toastHidden:"toastHidden-hY6A1CdK",toast:"toast-hY6A1CdK","ads-toast-close-button":"ads-toast-close-button-hY6A1CdK"}},685917:(t,e,i)=>{"use strict";i.d(e,{AdPlacement:()=>d,AdPlacementIntersect:()=>c});var o=i(541558),n=i(516755),s=i(268222),a=i(740254),r=i(833813),l=i(314802);class d{constructor(t,e,i,s){this._adsTargeting=new Map,this._contentId=`div-gpt-ad-${(0,o.guid)()}`,this._loginStateChangeFunction=null,this._onImpressionViewable=()=>{},this._isDisabled=()=>!(0,n.isEnabled)(),this._placementId=t,this._size=e,this._adUnit=i,this._placement=s}addTargeting(t,e){
return this._adsTargeting.set(t,e),this}subscribeOnLoginStateChange(t,e=!0){this.unsubscribeOnLoginStateChange(),this._loginStateChangeFunction=()=>t(!this._canShowAd()),window.loginStateChange.subscribe(null,this._loginStateChangeFunction,e)}unsubscribeOnLoginStateChange(){this._loginStateChangeFunction&&window.loginStateChange.unsubscribe(null,this._loginStateChangeFunction)}setPlacement(t){return this._placement=t,this}_canShowAd(){return!window.is_authenticated||!(0,a.enabled)(r.ProductFeatures.NO_SPONSORED_ADS)}_setContentId(t){this._contentId=t}_getContentId(){return this._contentId}_trackDisplay(t,e){this._placement&&(0,n.trackAdDialogEvent)(this._adUnit,this._placement,t,e)}async _displaySlot(t){const e={placementId:this._placementId,adUnitPath:await(0,n.getAdUnitPath)(t),size:this._size,optDiv:this._contentId};this._addPlatformTargeting(),await(0,n.displaySlot)(e,this._onDisplay,void 0,this._onImpressionViewable,this._adsTargeting)}_addPlatformTargeting(){const t="platform";if(this._adsTargeting.has(t))return;const e=(0,l.isOnMobileAppPage)("any")?"mobile_app":"web";this.addTargeting(t,e)}}class c extends d{constructor(t,e,i,o){super(t,e,i,o),this._onDisplay=t=>{this._resolvePromise(t),this._trackDisplay("show",!t)},this._ready=(0,s.createDeferredPromise)(),this._placement=o,this._adUnit=i}ready(){return this._ready.promise}async _display(t,e,i=!1,o){if(this._isDisabled())return void this._resolvePromise(!0);const n=()=>{t.setAttribute("id",this._getContentId()),this._displaySlot(e)};if(i){const e=new IntersectionObserver((i=>{for(const o of i)o.isIntersecting&&(n(),e.unobserve(t))}),o);e.observe(t)}else n()}_resolvePromise(t){this._ready.resolve(t),this._ready=(0,s.createDeferredPromise)()}}},516755:(t,e,i)=>{"use strict";i.d(e,{displaySlot:()=>T,getAdUnitPath:()=>p,isEnabled:()=>v,trackAdDialogEvent:()=>b});var o=i(251954),n=i(691805),s=i(261030),a=i(638456),r=i(31341),l=i(66974),d=i(314802),c=i(822122),u=i(175203),g=i(776734),h=i(924335);let m=!1;const _={};async function p(t){const e=(0,r.isRtl)();if(!e&&void 0===t.darkLtr)return t.lightLtr;if(e&&void 0===t.darkRtl)return t.lightRtl;const[{StdTheme:o},{getCurrentTheme:n}]=await Promise.all([i.e(19346).then(i.bind(i,919346)),Promise.all([i.e(42292),i.e(99545)]).then(i.bind(i,308721))]),s=n().name;return e?s===o.Dark&&t.darkRtl?t.darkRtl:t.lightRtl:s===o.Dark&&void 0!==t.darkLtr?t.darkLtr:t.lightLtr}async function w(t,e,i){return m||((0,n.appendScript)("https://securepubads.g.doubleclick.net/tag/js/gpt.js"),window.googletag=window.googletag||{cmd:[]},m=!0,o.subscribe(s.cookieSettingsChangeEvent,((t,e)=>{t===s.CookieSettings.Advertising&&window.googletag.cmd.push((()=>{window.googletag.pubads().setPrivacySettings({nonPersonalizedAds:!e}),window.googletag.pubads().refresh()}))}),null)),new Promise((o=>{window.googletag.cmd.push((()=>{if(_[t.optDiv]){const e=_[t.optDiv].onDestroy;void 0!==e&&e(),window.googletag.destroySlots([_[t.optDiv].slot])}const n=window.googletag.defineSlot(t.adUnitPath,t.size,t.optDiv);_[t.optDiv]={slot:n},
void 0!==i&&(_[t.optDiv].onDestroy=i),n.addService(window.googletag.pubads()),window.googletag.pubads().setPrivacySettings({nonPersonalizedAds:!(0,s.getCookieSetting)(s.CookieSettings.Advertising)}),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().setTargeting("locale",window.locale),window.googletag.pubads().setTargeting("env",(0,l.isProd)()?"battle":"staging"),window.googletag.pubads().setTargeting("app",window.TVD?"tvd":(0,d.isOnMobileAppPage)("old")?"ios":(0,d.isOnMobileAppPage)("new")?"android":a.CheckMobile.any()?"mobile_web":"web"),window.googletag.pubads().setTargeting("trial",!window.is_authenticated||h.OFFERS.trial in window.user.available_offers?"1":"0"),e.forEach(((t,e)=>{window.googletag.pubads().setTargeting(e,t)})),window.googletag.enableServices(),o(n)}))}))}async function T(t,e,i,o,n=new Map){const s=setTimeout((()=>{e(!0)}),3e3),a=await w(t,n,i);window.googletag.cmd.push((()=>{const i=o=>{o.slot===a&&(clearTimeout(s),e(o.isEmpty),o.isEmpty||u.telemetry.sendReport("site",`${t.placementId}_ad_slot_shown`)),window.googletag.pubads().removeEventListener("slotRenderEnded",i)};if(window.googletag.pubads().addEventListener("slotRenderEnded",i),void 0!==o){const t=e=>{e.slot===a&&o(),window.googletag.pubads().removeEventListener("impressionViewable",t)};window.googletag.pubads().addEventListener("impressionViewable",t)}window.googletag.display(t.optDiv)})),u.telemetry.sendReport("site",`${t.placementId}_ad_slot_display`)}function v(){var t;return(null===(t=window.user.active_broker)||void 0===t?void 0:t.plan)!==c.BrokerPlansIds.Platinum}async function b(t,e,i,o){const n=await(0,g.getTracker)();n&&n.trackAdDialog(t,e,i,o,window.is_authenticated?"free":"visitor")}},968241:(t,e,i)=>{"use strict";i.r(e),i.d(e,{PlatformPlacement:()=>I,platformPlacement:()=>N});var o=i(890972),n=i(685917)
;const s=JSON.parse('{"de_DE":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":2,"openRotateTimeout":3},"es":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"in":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":0,"openRotateTimeout":0},"it":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"fr":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"zh_CN":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":2,"openRotateTimeout":3},"au":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"za":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":0},"us":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":3},"gb":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"nz":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":3},"ae":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"sg":{"initialTimeout":0,"maxRotations":0,"rotateTimeout":3,"openRotateTimeout":3},"he_IL":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3},"nl":{"initialTimeout":0,"maxRotations":40,"rotateTimeout":3,"openRotateTimeout":3}}');var a=i.t(s,2);const r={};var l=i.t(r,2),d=i(251954),c=i(50959),u=i(497754),g=i(444372),h=i(239401),m=i(901767),_=i(4908),p=i(327020);let w=null;function T(){return w}const v=c.memo((t=>{const{id:e,bodyWidth:o,onRemove:n}=t,s=(0,c.useRef)(null),a=function(t){const e=t-32;return Math.max(Math.min(e,480),288)}(o);(0,c.useEffect)((()=>{w=s.current}),[s.current]);const r=(0,c.useCallback)((()=>{n(h.CloseTrigger.Click)}),[]);return c.createElement("div",{ref:s,className:u(p.toast,p.toastHidden)},c.createElement(m.ToastContainer,null,c.createElement(_.CloseButton,{className:p["ads-toast-close-button"],preservePaddings:!0,onClick:r,size:"xsmall","aria-label":g.t(null,{context:"action"},i(768508))}),c.createElement("div",{id:e,style:{width:`${a}px`}})))}));function b(t){const e=document.body.offsetWidth;return({onRemove:i})=>c.createElement(v,{id:t,bodyWidth:e,onRemove:i})}var y=i(960337),f=i(345848),R=i(548592),C=i(740254),S=i(833813),P=i(314802),D=i(220563),E=i(179242),x=i(268222);let k=0;const V={lightLtr:"/21803441042/native_ad_unit",lightRtl:"/21803441042/native_ad_unit/native_ad_unit_rtl",darkLtr:"/21803441042/native_ad_unit/native_ad_unit_dark",darkRtl:"/21803441042/native_ad_unit/native_ad_unit_rtl_dark"},L=[];function A(t){(0,f.trackEvent)("Advertisement Platform Goog",t)}class I extends n.AdPlacement{constructor(t,e,i){var n;super("platform","fluid",o.AdUnit.Platform,i),this._closeCount=0,this._rotationsCount=0,this._shortTimeout=!1,this._showTimeout=6e4,this._showTimeoutShortTimeout=5e3,this._rotateTimeout=0,this._openRotateTimeout=0,this._maxRotations=0,this._rotationEnabled=!E.conversionDialogsVisible.value(),this._conditions=new Map,this._onImpressionViewable=()=>{var t;null===(t=this._toasts)||void 0===t||t.forceRender()},this._onDisplay=t=>{
if(t)this._removeToast();else{const t=T();null!==t&&(t.classList.remove(p.toastHidden),A("Shown"),this._openRotateTimeout&&this._rotate(this._openRotateTimeout))}this._trackDisplay("show",!t)},this._toggleRotationEnabled=t=>{this._rotationEnabled=!t,this._rotationEnabled?this._rotate():clearTimeout(this._updateTimer)},this._removeToast=()=>new Promise((t=>{void 0!==this._removeLastToast?this._removeLastToast().then((()=>{delete this._removeLastToast,t()})):t()})),this._onCloseToast=()=>{this._closeCount++,3===this._closeCount&&this._placement!==o.Placement.Symbols&&(0,y.createGoProDialog)({feature:"adFree"}).then((()=>{A("Closed")})),delete this._removeLastToast,this._rotate(),this._trackDisplay("close",!1)},this._onAdditionalConditionsPassed=()=>Array.from(this._conditions.values()).map((t=>t.promise)),this._onWebViewVisibilityChange=t=>{var e;t?(null===(e=this._conditions.get("webViewVisible"))||void 0===e||e.resolve(),this._conditions.delete("webViewVisible")):this._conditions.set("webViewVisible",(0,x.createDeferredPromise)())},this._onLoginStateChange=t=>{t?(clearTimeout(this._updateTimer),this._removeToast()):this._rotate()},this._toasts=t,this._shortTimeout=null!=e&&e,n=this,-1===L.indexOf(n)&&L.push(n),this.subscribeOnLoginStateChange(this._onLoginStateChange,!1),E.conversionDialogsVisible.subscribe(this._toggleRotationEnabled),d.subscribe("webViewVisible",this._onWebViewVisibilityChange,null)}destroy(){var t;this._removeToast(),this.unsubscribeOnLoginStateChange(),d.unsubscribe("webViewVisible",this._onWebViewVisibilityChange,null),function(t,e=!1){const i=L.indexOf(t);-1!==i&&L.splice(i,1),L.length>0&&L[L.length-1].display(e)}(this),void 0!==this._updateTimer&&clearTimeout(this._updateTimer),E.conversionDialogsVisible.unsubscribe(this._toggleRotationEnabled),null===(t=this._toasts)||void 0===t||t.destroy(),delete this._toasts}async display(t=!1){await this._setUpTimeouts(),t?this._display():this._setUpdateTrigger(this._shortTimeout?this._showTimeoutShortTimeout:this._showTimeout)}setToasts(t){return this._toasts=t,this}static getInstance(){return null===this._instance&&(this._instance=new I),this._instance}_showToast(){var t;this._removeLastToast=null===(t=this._toasts)||void 0===t?void 0:t.showCustomToast({render:b(this._getContentId()),priority:h.ToastPriority.High,onLayerChange:this._removeToast,onRemoveEnd:t=>{t&&this._onCloseToast()}})}async _display(){this._isDisabled()||(0,R.isScreenRecordingOn)()||(0,C.enabled)(S.ProductFeatures.NO_SPONSORED_ADS)||!this._rotationEnabled||(this._setContentId(function(){const t="div-gpt-ad-1576758501107-"+String(k);return k+=1,t}()),await this._removeToast(),this._showToast(),await this._displaySlot(V))}async _setUpTimeouts(){const t=await(0,D.userGeoInfo)(),e="en"===window.locale?t.country_code:window.locale,i=this._getLocaleConfig(e);this._maxRotations=i.maxRotations||20,this._openRotateTimeout=60*(i.openRotateTimeout||0)*1e3,this._rotateTimeout=60*(i.rotateTimeout||5)*1e3,this._showTimeout=1e3*(i.initialTimeout||60)}_getLocaleConfig(t){var e
;const i=l[t],o=null!==(e=a[t])&&void 0!==e?e:{};return i&&(0,P.isOnMobileAppPage)("any")?{...o,...i}:o}_rotate(t=this._rotateTimeout){this._rotationsCount<this._maxRotations&&this._rotationEnabled&&(clearTimeout(this._updateTimer),this._setUpdateTrigger(t))}_setUpdateTrigger(t=this._rotateTimeout){this._updateTimer=setTimeout((async()=>{await Promise.all([this._whenPageVisible(),...this._onAdditionalConditionsPassed()]),this._display(),this._rotationsCount++}),t)}_whenPageVisible(){return new Promise((t=>{if("visible"===document.visibilityState)t();else{const e=()=>{window.removeEventListener("visibilitychange",e),t()};window.addEventListener("visibilitychange",e)}}))}}I._instance=null;const N=I.getInstance()},179242:(t,e,i)=>{"use strict";i.d(e,{conversionDialogsVisible:()=>n,toggleConversionDialogVisible:()=>s});const o=new(i(129025).WatchedValue)(!1),n=o.readonly();function s(t){o.setValue(t)}}}]);