(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[99574,48970,27883],{174786:(e,t,i)=>{"use strict";i.d(t,{default:()=>a});const a=function(){}},284316:e=>{e.exports={badge:"badge-PlSmolIm",content:"content-PlSmolIm","size-xsmall":"size-xsmall-PlSmolIm","size-small":"size-small-PlSmolIm","size-medium":"size-medium-PlSmolIm","size-large":"size-large-PlSmolIm","size-xlarge":"size-xlarge-PlSmolIm"}},626574:e=>{e.exports={switcher:"switcher-fwE97QDf","thumb-wrapper":"thumb-wrapper-fwE97QDf","size-small":"size-small-fwE97QDf","size-medium":"size-medium-fwE97QDf","size-large":"size-large-fwE97QDf",input:"input-fwE97QDf","intent-default":"intent-default-fwE97QDf","disable-active-state-styles":"disable-active-state-styles-fwE97QDf","intent-select":"intent-select-fwE97QDf","intent-all-blue":"intent-all-blue-fwE97QDf",track:"track-fwE97QDf",thumb:"thumb-fwE97QDf"}},946417:e=>{e.exports={"badge-user":"badge-user-FkYBcFwu","pro-premium":"pro-premium-FkYBcFwu","pro-premium-expert":"pro-premium-expert-FkYBcFwu","pro-realtime":"pro-realtime-FkYBcFwu","pro-realtime-expert":"pro-realtime-expert-FkYBcFwu",pro:"pro-FkYBcFwu","pro-expert":"pro-expert-FkYBcFwu",moderator:"moderator-FkYBcFwu",trial:"trial-FkYBcFwu","pine-wizard":"pine-wizard-FkYBcFwu","tv-wizard":"tv-wizard-FkYBcFwu",employee:"employee-FkYBcFwu","employee-logo-icon":"employee-logo-icon-FkYBcFwu","size-xsmall":"size-xsmall-FkYBcFwu","size-small":"size-small-FkYBcFwu","size-medium":"size-medium-FkYBcFwu","size-large":"size-large-FkYBcFwu","size-xlarge":"size-xlarge-FkYBcFwu","account-badge":"account-badge-FkYBcFwu",content:"content-FkYBcFwu","slash-badge":"slash-badge-FkYBcFwu","slash-badge-content":"slash-badge-content-FkYBcFwu","content-single-slash":"content-single-slash-FkYBcFwu","content-double-slash":"content-double-slash-FkYBcFwu","slash-size-xlarge":"slash-size-xlarge-FkYBcFwu","content-single-slash-xlarge":"content-single-slash-xlarge-FkYBcFwu","content-double-slash-xlarge":"content-double-slash-xlarge-FkYBcFwu","slash-size-large":"slash-size-large-FkYBcFwu","content-single-slash-large":"content-single-slash-large-FkYBcFwu","content-double-slash-large":"content-double-slash-large-FkYBcFwu","slash-size-medium":"slash-size-medium-FkYBcFwu","content-single-slash-medium":"content-single-slash-medium-FkYBcFwu","content-double-slash-medium":"content-double-slash-medium-FkYBcFwu","slash-size-small":"slash-size-small-FkYBcFwu","content-single-slash-small":"content-single-slash-small-FkYBcFwu","content-double-slash-small":"content-double-slash-small-FkYBcFwu","slash-size-xsmall":"slash-size-xsmall-FkYBcFwu","content-single-slash-xsmall":"content-single-slash-xsmall-FkYBcFwu","content-double-slash-xsmall":"content-double-slash-xsmall-FkYBcFwu","plan-trial":"plan-trial-FkYBcFwu"}},92910:e=>{e.exports={separator:"separator-QjUlCDId",small:"small-QjUlCDId",normal:"normal-QjUlCDId",large:"large-QjUlCDId"}},774465:(e,t,i)=>{"use strict";i.d(t,{AnchorBadge:()=>p,Badge:()=>m,BadgeSize:()=>n.BadgeSize,ButtonBadge:()=>g})
;var a=i(50959),n=i(105573),o=i(497754),s=i.n(o),r=i(284316),l=i.n(r);function c(e){const{size:t=n.BadgeSize.Medium,className:i,isPaidBadge:a}=e;return s()(!a&&l().badge,t&&l()[`size-${t}`],i)}function u(e){return s()(c(e),l().anchor)}function d(e){const{children:t,contentClassName:i}=e;return a.createElement("span",{className:s()(l().content,i)},t)}function m(e){const{size:t=n.BadgeSize.Medium,children:i,className:o,contentClassName:s,...r}=e;return a.createElement("span",{...r,className:c({size:t,className:o})},a.createElement(d,{contentClassName:s},i))}function g(e){const{size:t,children:i,type:n="button",className:o,contentClassName:s,...r}=e;return a.createElement("button",{...r,type:n,className:u({size:t,className:o})},a.createElement(d,{contentClassName:s},i))}function p(e){const{size:t=n.BadgeSize.Medium,children:i,className:o,contentClassName:s,...r}=e;return a.createElement("a",{...r,className:u({size:t,className:o})},a.createElement(d,{contentClassName:s},i))}},105573:(e,t,i)=>{"use strict";var a;i.d(t,{BadgeSize:()=>a}),function(e){e.XSmall="xsmall",e.Small="small",e.Medium="medium",e.Large="large",e.XLarge="xlarge"}(a||(a={}))},818612:(e,t,i)=>{"use strict";i.d(t,{Spinner:()=>s});var a=i(50959),n=i(497754),o=i(685023);i(683135);function s(e){const t=n(e.className,"tv-spinner","tv-spinner--shown",`tv-spinner--size_${o.spinnerSizeMap[e.size||o.DEFAULT_SIZE]}`);return a.createElement("div",{className:t,style:e.style,role:"progressbar"})}},694553:(e,t,i)=>{"use strict";i.d(t,{Switch:()=>c});var a=i(50959),n=i(497754),o=i(728804),s=i(626574),r=i.n(s);function l(e){const t=(0,a.useContext)(o.CustomBehaviourContext),{className:i,intent:s="default",size:l="small",enableActiveStateStyles:c=t.enableActiveStateStyles}=e;return n(i,r().switcher,r()[`size-${l}`],r()[`intent-${s}`],!c&&r()["disable-active-state-styles"])}function c(e){var t;const{reference:i,size:n,intent:o,role:s,"aria-checked":c,checked:u,defaultChecked:d,onKeyDown:m,...g}=e,p=(0,a.useCallback)((e=>{13===e.keyCode&&e.target.click(),m&&m(e)}),[m]);return a.createElement("span",{className:l(e)},a.createElement("input",{...g,type:"checkbox",className:r().input,ref:i,role:null!=s?s:"switch","aria-checked":null!==(t=null!=c?c:u)&&void 0!==t?t:d,checked:u,defaultChecked:d,onKeyDown:p}),a.createElement("span",{className:r()["thumb-wrapper"]},a.createElement("span",{className:r().track}),a.createElement("span",{className:r().thumb})))}},735218:(e,t,i)=>{"use strict";i.d(t,{LanguageSelector:()=>s});var a=i(50959),n=i(812352),o=i(634993);function s(e){const t=Object.entries((0,n.getLocales)()).filter((([e])=>"sv_SE"!==e)),{itemReference:i,setAriaChecked:s,...r}=e;return a.createElement(a.Fragment,null,t.map((([t,{language_name:n}])=>a.createElement(o.PopupMenuItem,{...r,key:t,label:n,isActive:window.locale===t,onClick:function(){e.onClick&&e.onClick(t);window.TVD?window.TVD.setLocale(t):function(e){const t=document.createElement("form");t.action="/change_language/",t.method="POST";const i=document.createElement("input");i.name="language",i.value=e,
t.appendChild(i),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}(t)},reference:i?i(t):void 0,"aria-checked":s?window.locale===t:void 0}))))}},433610:(e,t,i)=>{"use strict";i.d(t,{NotificationsHint:()=>r});var a=i(50959),n=i(284849),o=i(24154),s=i(68514);function r(e){const[t,r]=(0,a.useState)(s.notificationsOnboardingStart.value());return(0,a.useEffect)((()=>(s.notificationsOnboardingStart.subscribe(r),()=>{s.notificationsOnboardingStart.unsubscribe(r),s.notificationsOnboardingStart.setValue(!1)})),[]),t?a.createElement(o.HintReferenceable,{placement:e.placement,text:n.t(null,void 0,i(348141)),buttonText:n.t(null,void 0,i(766238)),onClick:e.onClick,settingsHintKey:"hint.notificationsWidget",placeHolderClassName:e.placeHolderClassName}):null}},188016:(e,t,i)=>{"use strict";i.r(t),i.d(t,{notifications:()=>b});var a=i(650151),n=i(62802),o=i(421448),s=i(226722),r=i(155040),l=i(125226),c=i(262078),u=i(129025),d=i(707957),m=i(120780),g=i(64834),p=i(447699);class _{constructor(e,t){this._readNotificationsIds=[],this._listeners=new Map,this.addNotification=e=>{const t=[];this._buckets.forEach((i=>{const a=i.getGroup();((0,p.getSubtypesByGroup)(a).includes(e.type)||a===g.NotificationsGroup.All)&&(t.push(a),this.setState((t=>{const a=null!==i.get().next,n={...t};return n.received.push(e.id),a&&(n.notifications=[e,...t.notifications]),n}),a))})),t.forEach((e=>this.emit(e)))},this.setState=(e,t)=>{const i=this._getBucket(t);i.set(e(i.get()))},this.getState=e=>this._getBucket(e).get(),this.subscribe=(e,t)=>{this._listeners.has(t)||this._listeners.set(t,[]);const i=(0,a.ensureDefined)(this._listeners.get(t));return i.push(e),()=>{this._listeners.set(t,i.filter((t=>t!==e)))}},this.emit=e=>{var t;this._listeners.has(e)&&(null===(t=this._listeners.get(e))||void 0===t||t.forEach((e=>e())))},this._buckets=this._createBuckets(e),this._options=t}read(e){if(!this.isAlreadyRead(e)){this._readNotificationsIds.push(e.id);const t=[];this._buckets.forEach((i=>{const a=i.getGroup();i.get().received.includes(e.id)&&(t.push(a),this.setState((t=>({...t,received:t.received.filter((t=>t!==e.id))})),a))})),t.forEach((e=>this.emit(e))),this._options.afterRead(e)}}isAlreadyRead(e){const t=(0,p.checkIsNewNotification)(e),i=this._readNotificationsIds.includes(e.id),a=this._buckets.some((t=>t.get().received.includes(e.id)));return!t&&!a||i}markAsRead(e){const t=[];this._readNotificationsIds.push(e.id),this._buckets.forEach((i=>{const a=i.getGroup();i.get().received.includes(e.id)&&(t.push(a),this.setState((t=>({...t,received:t.received.filter((t=>t!==e.id))})),a))})),t.forEach((e=>this.emit(e)))}_createBuckets(e){const t=[];return e.forEach((e=>{t.push(new h(e))})),t}_getBucket(e){return(0,a.ensureDefined)(this._buckets.find((t=>t.getGroup()===e)))}}class h{constructor(e){this._state={notifications:[],next:null,received:[]},this._group=e}set(e){this._state=e}get(){return this._state}getGroup(){return this._group}}class f{constructor(e){this._pushStreamChannel="notification:user",this._messageReceived=new d.Delegate,
this._onMessage=e=>{this._messageReceived.fire(e),this._storage.addNotification(e)},this._storage=new _(this.groups(),e)}init(){this._connect()}destroy(){this._disconnect()}storage(){return this._storage}markAsRead(e){this._storage.markAsRead(e)}groups(){const e=[g.NotificationsGroup.All,g.NotificationsGroup.Comments,g.NotificationsGroup.Mentions,g.NotificationsGroup.Follows,g.NotificationsGroup.Boosts,g.NotificationsGroup.Streams];return window.user.is_broker&&e.push(g.NotificationsGroup.Broker),e}async getNotifications(e){const t=new URL("/api/v1/user/onsite_notifications/",window.location.origin),i=(0,p.getSubtypesByGroup)(e);t.searchParams.append("type","user"),i.length&&t.searchParams.append("subtypes",i.join(","));const a=await(0,m.fetch)(t.href,{method:"GET"}),n=await a.json();this._storage.setState((e=>({...e,notifications:[...e.notifications,...n.results],next:n.next})),e),this._storage.emit(e)}async getNext(e,t){const i=await(0,m.fetch)(e,{method:"GET"}),a=await i.json();this._storage.setState((e=>({...e,notifications:[...e.notifications,...a.results],next:a.next})),t),this._storage.emit(t)}async resetCounter(){await(0,m.fetch)("/api/v1/user/onsite_notifications/reset/?type=user",{method:"POST",credentials:"include"})}onMessageReceived(){return this._messageReceived}_connect(){c.pushStreamMultiplexer.on(this._pushStreamChannel,this._onMessage)}_disconnect(){c.pushStreamMultiplexer.off(this._pushStreamChannel,this._onMessage)}}class w{constructor(){this._counter=new u.WatchedValue(0),this._groupChangeDelegate=new d.Delegate,this._activeGroup=new u.WatchedValue(g.NotificationsGroup.All),this._model=null,this._xEventPrefix="notification-center-",this._xEventReadNotification=this._xEventPrefix+"read-notification",this._xEventResetNotificationsCount=this._xEventPrefix+"reset-notifications-count",this._isDialogOpen=!1,this._onMessage=e=>{const t=c.pushStreamMultiplexer.ownPushStream();window.user.notification_popup&&t&&this._showDesktopNotification(e),this._isDialogOpen||(window.user.notification_sound&&t&&(0,o.play)(o.DEFAULT_SOUNDS.sound),this._counter.setValue(this.counter().value()+1))},this._onLoginStateChange=()=>{var e;window.is_authenticated?(this._counter.setValue((null===(e=window.user.notification_count)||void 0===e?void 0:e.user)||0),this._creteModel()):(this._counter.setValue(0),this._closeDialog&&this._closeDialog(),this._destroyModel())},this._afterRead=e=>{var t,i,a;s.TVXWindowEvents.emit(this._xEventReadNotification,JSON.stringify(e));(null!==(i=null===(t=this._model)||void 0===t?void 0:t.storage().getState(g.NotificationsGroup.All).received.length)&&void 0!==i?i:0)||(null===(a=this._model)||void 0===a||a.resetCounter(),this._setLastVisitTime())},this._onSelectGroup=e=>{this._activeGroup.setValue(e)},this._onNotificationReadFromOtherTab=e=>{var t;const i=JSON.parse(e);null===(t=this._model)||void 0===t||t.markAsRead(i);const a=this._counter.value()-1;this._counter.setValue(a>=0?a:0)},this._onNotificationCounterReset=()=>{this._counter.setValue(0)},(0,
l.isFeatureEnabled)("enable_notifications_center_in_user_menu")&&(s.TVXWindowEvents.on(this._xEventReadNotification,this._onNotificationReadFromOtherTab),s.TVXWindowEvents.on(this._xEventResetNotificationsCount,this._onNotificationCounterReset),this._init())}destroy(){window.loginStateChange.unsubscribe(null,this._onLoginStateChange),s.TVXWindowEvents.off(this._xEventReadNotification,this._onNotificationReadFromOtherTab),s.TVXWindowEvents.off(this._xEventResetNotificationsCount,this._onNotificationCounterReset),this._destroyModel()}openNotificationCenter(){var e;this._isDialogOpen||(this._model||this._creteModel(),e={model:(0,a.ensureNotNull)(this._model),activeTabValue:this._activeGroup.value(),changeGroupDelegate:this._groupChangeDelegate,onSelectGroup:this._onSelectGroup,onClose:()=>{this._isDialogOpen=!1,this._closeDialog=void 0},onOpen:e=>{this._isDialogOpen=!0,this._reset(),this._closeDialog=e},afterOpen:()=>{this._setLastVisitTime()},onDestroy:()=>{this._activeGroup.setValue(g.NotificationsGroup.All),this._setLastVisitTime(),this._reset()}},Promise.all([i.e(22666),i.e(5993),i.e(72639),i.e(88548),i.e(76592),i.e(63987),i.e(48155),i.e(42244),i.e(35213),i.e(63830),i.e(1888),i.e(6744),i.e(94502),i.e(93014),i.e(25977),i.e(87520),i.e(5435)]).then(i.bind(i,988563)).then((t=>{new t.NotificationsDialog(e).open()})))}counter(){return this._counter.readonly()}static getInstance(){return this._instance||(this._instance=new w),this._instance}_creteModel(){const e={afterRead:this._afterRead};this._model=new f(e),this._model.init(),this._model.onMessageReceived().subscribe(null,this._onMessage)}_destroyModel(){var e,t;null===(e=this._model)||void 0===e||e.onMessageReceived().unsubscribe(null,this._onMessage),null===(t=this._model)||void 0===t||t.destroy(),this._model=null}_setLastVisitTime(){n.setValue(p.STORAGE_KEY,Date.now())}_reset(){var e;s.TVXWindowEvents.emit(this._xEventResetNotificationsCount),null===(e=this._model)||void 0===e||e.resetCounter(),this._counter.setValue(0)}_init(){this._onLoginStateChange(),window.loginStateChange.subscribe(null,this._onLoginStateChange)}_showDesktopNotification(e){if("visible"===document.visibilityState)return;const t=(0,p.getDesktopNotificationsData)(e),i=(0,p.getGroupByNotificationType)(e);(0,r.show)(t.title,t.text,e.user.mid_picture_url,(()=>{this._activeGroup.setValue(i,!0),this._groupChangeDelegate.fire(i),this._isDialogOpen||this.openNotificationCenter()}),[e.type,t.trackingLabel])}}w._instance=null;const b=w.getInstance()},64834:(e,t,i)=>{"use strict";var a;i.d(t,{NotificationsGroup:()=>a}),function(e){e.All="all",e.Comments="comments",e.Boosts="boosts",e.Mentions="mentions",e.Follows="follows",e.Streams="streams",e.Broker="broker"}(a||(a={}))},447699:(e,t,i)=>{"use strict";i.d(t,{STORAGE_KEY:()=>r,UNREAD_MARK_TIMER:()=>s,checkIsNewNotification:()=>u,getDesktopNotificationsData:()=>d,getGroupByNotificationType:()=>c,getSubtypesByGroup:()=>l});var a=i(284849),n=i(62802),o=i(64834);const s=7e3,r="notifications-last-check";function l(e){switch(e){case o.NotificationsGroup.All:
return[];case o.NotificationsGroup.Comments:return["broker_reply","mind_commented","comment","comment_pine"];case o.NotificationsGroup.Boosts:return["vote","vote_pine"];case o.NotificationsGroup.Mentions:return["mention_in_chat","mention_in_ideas_comment","mention_in_script_comment","mind_mentioned_in_comment"];case o.NotificationsGroup.Follows:return["follow_user"];case o.NotificationsGroup.Streams:return["stream_start"];case o.NotificationsGroup.Broker:return["broker_review","broker_review_update"];default:return[]}}function c(e){return["broker_reply","mind_commented","comment","comment_pine"].includes(e.type)?o.NotificationsGroup.Comments:["vote","vote_pine"].includes(e.type)?o.NotificationsGroup.Boosts:["mention_in_chat","mention_in_ideas_comment","mention_in_script_comment","mind_mentioned_in_comment"].includes(e.type)?o.NotificationsGroup.Mentions:"follow_user"===e.type?o.NotificationsGroup.Follows:"stream_start"===e.type?o.NotificationsGroup.Streams:["broker_review","broker_review_update"].includes(e.type)&&window.user.is_broker?o.NotificationsGroup.Broker:o.NotificationsGroup.All}function u(e){const t=1e3*e.timestamp,i=n.getInt(r,0,!0);return!i||t-i>0}function d(e){const t=function(e){const t=e.user.username;switch(e.type){case"access_to_script":return a.t(null,void 0,i(825241));case"broker_reply":return a.t(null,{replace:{username:t}},i(686916));case"broker_review":return a.t(null,{replace:{username:t}},i(239338));case"broker_review_update":return a.t(null,{replace:{username:t}},i(224589));case"comment":return a.t(null,{replace:{username:t,name:e.chart_title||""}},i(709697));case"vote":return a.t(null,{replace:{username:t}},i(778755));case"follow_user":return a.t(null,{replace:{username:t}},i(483440));case"mind_commented":return a.t(null,{replace:{username:t}},i(843997));case"stream_start":return a.t(null,{replace:{username:t}},i(258877));case"vote_pine":return a.t(null,{replace:{username:t,title:e.chart_title||""}},i(45664));case"mind_mentioned_in_comment":return a.t(null,{replace:{username:t}},i(670418));case"mention_in_script_comment":return a.t(null,{replace:{username:t}},i(60807));case"mention_in_ideas_comment":return a.t(null,{replace:{username:t}},i(11212));case"mention_in_chat":return a.t(null,{replace:{username:t}},i(544902));case"comment_pine":return a.t(null,{replace:{username:t,name:e.chart_title||""}},i(323752));case"donation":return a.t(null,{replace:{username:t}},i(885914));default:return""}}(e),n=function(e){var t,n,o,s;if("follow_user"===e.type)return a.t(null,void 0,i(495266));if(["vote","vote_pine"].includes(e.type))return null!==(t=e.chart_title)&&void 0!==t?t:"";if("access_to_script"===e.type)return null!==(n=e.script_name)&&void 0!==n?n:"";if("donation"===e.type)return null!==(o=e.donation_message)&&void 0!==o?o:"";return null!==(s=e.description)&&void 0!==s?s:""}(e).trim().slice(0,256);return{title:t,trackingLabel:"follow_user"===e.type?e.user.id.toString():"",text:n}}},155040:(e,t,i)=>{"use strict"
;var a=i(262078).pushStreamMultiplexer,n=i(226722).TVXWindowEvents,o=i(345848).trackEvent,s=function(){var e="tvdesktopnotifications.",t="tabs-hidden";n.on("desktop-notification-tab-visibility-request",(function(){"true"===TVLocalStorage.getItem(e+t)&&TVLocalStorage.setItem(e+t,document.hidden)}));function i(e){var t=e.split("\n");return t.length>1&&(e=t[0]),((e=e.trim()).length>30||t.length>1)&&(e=e.substring(0,30)+"..."),e}function s(){return window.Notification.permission}function r(e){var t=s();"granted"===t&&"function"==typeof e?e():"default"===t&&window.Notification.requestPermission((function(t){"granted"===t&&"function"==typeof e&&e()}))}return window.Notification?{show:function(l,c,u,d){a.ownPushStream()&&(o("Desktop Notifications","Notification Show Attempt"),"denied"!==s()&&r((function(){TVLocalStorage.setItem(e+t,document.hidden),n.emit("desktop-notification-tab-visibility-request"),setTimeout((function(){"false"!==TVLocalStorage.getItem(e+t)&&document.hidden?(function(e,t,a,n,s){var r=new window.Notification(e,{body:i(t),icon:a||"/static/images/desktop-notification.png"});r.onclick=function(){window.focus(),"function"==typeof n&&(s&&o.apply(null,["desktop-notification-interaction"].concat(s)),n())},setTimeout(r.close.bind(r),5e3)}(l,c,u,d),o("Desktop Notifications","Notification Show Success")):o("Desktop Notifications","Notification Show Tab Visible")}),100)})))},askPermission:r}:{show:function(){},askPermission:function(){}}}();e.exports=s},421448:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DEFAULT_SOUNDS:()=>y,alertSounds:()=>B,availableSounds:()=>E,enableAlertSoundsForMobile:()=>x,enableForMobile:()=>T,isPlaying:()=>z,onStopped:()=>F,play:()=>k,stop:()=>S});var a=i(444372),n=i(314802),o=i(201089),s=i(129025);const r=i.p+"alarm_clock.ba219c712b5dce956b08.mp3",l=i.p+"beep_beep.cddbb5d281594d0b4b8d.mp3",c=i.p+"alert_calling.205c6b5ccb0a10decbc1.mp3",u=i.p+"chat_calling.067c844a001001872f78.mp3",d=i.p+"call.6d2888370f40fbb8cd8d.mp3",m=i.p+"chirpy.bcc136ad76d4496efe29.mp3",g=i.p+"fault.ca1f77478c28a528be67.mp3",p=i.p+"fired.aaee45a643068df3a94b.mp3",_=i.p+"hand_bell.bd1c77bbd21a64aa4fe8.mp3",h=i.p+"hangup.0a486c8d934145d68c11.mp3",f=i.p+"message.c44275a460737d0d50ff.mp3",w=i.p+"notification.01a81746825289ed9423.mp3",b=i.p+"popup.184287feaec7efccbb27.mp3",v=i.p+"3_notes_reverb.dc905347b1eda03c1db2.mp3",N=(0,o.getLogger)("Lib.Sound",{color:"#dea433"}),y={sound:"notification/notification",alert:"alert/fired"},E=[{title:a.t(null,void 0,i(792586)),path:"alert/alarm_clock",soundForAlerts:!0,filePath:r}];E.unshift({path:y.sound,title:a.t(null,void 0,i(204329)),common:!0,filePath:w},{title:a.t(null,void 0,i(274471)),path:"chat/message",filePath:f,common:!0},{title:a.t(null,void 0,i(307769)),path:"chat/popup",filePath:b,common:!0},{title:a.t(null,void 0,i(514561)),path:"chat/call",filePath:d},{title:a.t(null,void 0,i(74210)),path:"chat/calling",filePath:u},{title:a.t(null,void 0,i(719791)),path:"chat/hangup",filePath:h},{title:a.t(null,void 0,i(7246)),path:y.alert,filePath:p,soundForAlerts:!0},{
title:a.t(null,void 0,i(829406)),path:"alert/3_notes_reverb",filePath:v,soundForAlerts:!0}),E.push({title:a.t(null,void 0,i(476002)),path:"alert/beep_beep",filePath:l,soundForAlerts:!0},{title:a.t(null,void 0,i(115390)),path:"alert/calling",filePath:c,soundForAlerts:!0},{title:a.t(null,void 0,i(114579)),path:"alert/chirpy",filePath:m,soundForAlerts:!0},{title:a.t(null,void 0,i(926559)),path:"alert/fault",filePath:g,soundForAlerts:!0},{title:a.t(null,void 0,i(120021)),path:"alert/hand_bell",filePath:_,soundForAlerts:!0});const P={};function B(){return E.filter((e=>!!e.soundForAlerts))}function k(e=y.sound,t){if((0,n.isOnMobileAppPage)("any"))return Promise.resolve();N.logNormal(`Sound play attempt for "${e}" duration-${t||0}s;`);return A(e).play(t)}function S(e,t=!1){if((0,n.isOnMobileAppPage)("any"))return;let i=[];e?i.push(A(e)):i=Object.values(P),i.forEach((e=>{e.stop(t)}))}function F(e,t){(0,n.isOnMobileAppPage)("any")||A(e).playing.subscribe((e=>{e||t()}),{once:!0})}function z(e){return!(0,n.isOnMobileAppPage)("any")&&A(e).playing.value()}function x(){T(B().map((e=>e.path)))}function T(e){if((0,n.isOnMobileAppPage)("any"))return;if(!e)return;if(!/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent))return;if(Array.isArray(e)||(e=[e]),0===(e=e.filter((e=>{const t=A(e);return!(!t||!t.el.load||t._mobilePreloadActive)&&(t._mobilePreloadActive=!0,!0)}))).length)return void N.logNormal("enableForMobile no sounds passed");const t=()=>{const a=[];Array.isArray(e)&&e.forEach((e=>{const t=A(e);t.el.load();const i=t.play().catch((e=>{if("AbortError"!==e.name)throw N.logError(`enableForMobile for "${t.el.src}" preload error: - ${e.message}`),e}));t.el.pause(),a.push(i)})),Promise.all(a).then((()=>{N.logNormal("enableForMobile sounds initialized")})),i.forEach((e=>{document.removeEventListener(e,t,!0)}))},i=["click","touchend","keydown"];i.forEach((e=>{document.addEventListener(e,t,!0)}))}const A=e=>{if(e in P)return P[e];N.logNormal(`requested sound  ${e} not cached, building a new audio element`);const t=E.find((t=>t.path===e));if(void 0===t)throw new Error(`Cannot find sound "${e}"`);const i=new Audio(t.filePath),a={el:i,playing:new s.WatchedValue(!1),play:(t=0)=>a.playing.value()?(N.logNormal("sound already playing"),Promise.reject("already playing")):(a.playing.setValue(!0),new Promise(((i,n)=>{let o=t>0;const s=()=>{const t=function(e){try{N.logNormal(`"${e.el.src}" triggering html5 play method, readyState - ${e.el.readyState}; muted - ${e.el.muted}; volume - ${e.el.volume}; currentTime - ${e.el.currentTime}`);let t=e.el.play();return t||(t=Promise.resolve()),t}catch(t){return N.logError(`play method for "${e.el.src}" catch error - ${t.message}`),Promise.reject(t)}}(a);t.catch((t=>{N.logNormal(`stop counting sound "${e}"; as playing due to an error: ${t.message}`),a.stop(),n(t)}))};a._onEnded=()=>{o?s():(a.stop(),i())},a.el.addEventListener("ended",a._onEnded),o&&setTimeout((()=>{N.logNormal(`"${e}" repeat timeout - ${t}s off`),o=!1}),1e3*t),s()}))),stop:(e=!1)=>{a.el.pause(),
e&&(a.el.currentTime=0),a.playing.setValue(!1),a._onEnded&&a.el.removeEventListener("ended",a._onEnded)}};P[e]=a;return["canplaythrough","error"].forEach((t=>{i.addEventListener(t,(()=>{N.logNormal(`for sound "${e}", event - ${t} is fired`)}),!1)})),N.logNormal(`canPlayType - ${i.canPlayType("audio/mp3")}`),P[e]};T(E.filter((e=>!!e.common)).map((e=>e.path)))},812352:(e,t,i)=>{"use strict";i.d(t,{getLocale:()=>r,getLocaleIso:()=>l,getLocales:()=>s});var a=i(650151),n=i(148970);const o=function(){const e=document.querySelectorAll("link[rel~=link-locale][data-locale]");if(0===e.length)return n;const t={};return e.forEach((e=>{const i=(0,a.ensureNotNull)(e.getAttribute("data-locale"));t[i]={...n[i],href:e.href}})),t}();function s(){return o}function r(e){return e=e||window.locale,o[e]}function l(e){var t;return e=e||window.locale,null===(t=o[e])||void 0===t?void 0:t.iso}},540935:(e,t,i)=>{"use strict";var a;i.d(t,{BadgeUserNames:()=>a}),function(e){e.Moderator="moderator",e.Employee="employee",e.PineWizard="pine_wizard",e.TradingViewWizard="tradingview_wizard",e.ProPremium="pro:pro_premium",e.ProPremiumTrial="pro:pro_premium_trial",e.ProRealTime="pro:pro_realtime",e.ProRealTimeTrial="pro:pro_realtime_trial",e.Pro="pro:pro",e.ProTrial="pro:pro_trial",e.ProExpert="pro:pro_expert",e.ProRealtimeExpert="pro:pro_realtime_expert",e.ProPremiumExpert="pro:pro_premium_expert"}(a||(a={}))},716847:(e,t,i)=>{"use strict";i.d(t,{BadgeUser:()=>c,getUserBadgeText:()=>m});var a=i(50959),n=i(497754),o=i(359984),s=i(558470);const r=i.p+"logo-tradingview-white.a83d359146c5c1ec4e05.svg";var l=i(946417);function c(e){const{name:t,size:i=s.BadgeSize.Small,href:n,title:c,className:g,isShort:p,..._}=e,h=(0,o.isPaid)(t),f=h&&p,w=f&&((0,o.isProPremiumExpert)(t)||(0,o.isProExpert)(t)||(0,o.isProRealtimeExpert)(t)),b=(0,o.isEmployee)(t)&&(0,o.isBadgeUserWithTitle)(t)||f?c:void 0,v=(0,o.isBadgeUserWithTitle)(t)||f?c:void 0,N=()=>a.createElement(a.Fragment,null,m(t,f),(0,o.isEmployee)(t)&&a.createElement("img",{src:r,className:l["employee-logo-icon"],role:"presentation",loading:"lazy"}));return n?a.createElement(s.AnchorBadge,{..._,className:d({badge:t,size:i,title:c,className:g,isPaidBadge:h,isShortBadge:f}),title:v,"aria-label":b,size:i,href:n,target:"_blank",contentClassName:u({badge:t,size:i,isDoubleSlashBadge:w,isPaidBadge:h,isShortBadge:f}),dir:"ltr",lang:"en"},a.createElement(N,null)):a.createElement(s.Badge,{className:d({badge:t,size:i,title:c,className:g,isPaidBadge:h,isShortBadge:f}),title:v,"aria-label":b,size:i,contentClassName:u({badge:t,size:i,isDoubleSlashBadge:w,isPaidBadge:h,isShortBadge:f}),dir:"ltr",lang:"en",..._},a.createElement(N,null))}function u(e){const{isPaidBadge:t,isShortBadge:i,size:a,isDoubleSlashBadge:s,badge:r}=e;return n(i?[l["slash-badge-content"],l[`content-${s?"double":"single"}-slash`],l[`content-${s?"double":"single"}-slash-${a}`],(0,o.isTrial)(r)&&l["plan-trial"]]:t&&l.content)}function d(e){const{badge:t,size:i=s.BadgeSize.Small,title:a,className:r,isPaidBadge:c,isShortBadge:u}=e
;return n(u?[l["slash-badge"],l[`slash-size-${i}`]]:[l["badge-user"],l[`size-${i}`],(0,o.isProPremiumExpert)(t)&&l["pro-premium-expert"],(0,o.isProPremium)(t)&&l["pro-premium"],(0,o.isProRealtimeExpert)(t)&&l["pro-realtime-expert"],(0,o.isProRealtime)(t)&&l["pro-realtime"],(0,o.isProExpert)(t)&&l["pro-expert"],(0,o.isPro)(t)&&l.pro,(0,o.isModerator)(t)&&l.moderator,(0,o.isEmployee)(t)&&l.employee,(0,o.isPineWizard)(t)&&l["pine-wizard"],(0,o.isTradingViewWizard)(t)&&l["tv-wizard"],(0,o.isTrial)(t)&&l.trial,c&&l["account-badge"]],a&&"apply-common-tooltip",r)}function m(e,t){return t?"":(0,o.isProExpert)(e)?"Expert":(0,o.isProRealtimeExpert)(e)?"Elite":(0,o.isProPremiumExpert)(e)?"Ultimate":(0,o.isProPremium)(e)?"Premium":(0,o.isProRealtime)(e)?"Plus":(0,o.isPro)(e)?"Essential":(0,o.isModerator)(e)?"Mod":(0,o.isPineWizard)(e)||(0,o.isTradingViewWizard)(e)?"Wizard":""}},359984:(e,t,i)=>{"use strict";i.d(t,{isBadgeUser:()=>r,isBadgeUserWithTitle:()=>o,isEmployee:()=>_,isModerator:()=>l,isPaid:()=>b,isPineWizard:()=>h,isPro:()=>p,isProExpert:()=>c,isProPremium:()=>m,isProPremiumExpert:()=>d,isProRealtime:()=>g,isProRealtimeExpert:()=>u,isTradingViewWizard:()=>f,isTrial:()=>w});var a=i(540935);const n=new Set([a.BadgeUserNames.Employee,a.BadgeUserNames.PineWizard,a.BadgeUserNames.TradingViewWizard,a.BadgeUserNames.Moderator,a.BadgeUserNames.ProPremiumTrial,a.BadgeUserNames.ProRealTimeTrial,a.BadgeUserNames.ProTrial,a.BadgeUserNames.ProExpert,a.BadgeUserNames.ProRealtimeExpert,a.BadgeUserNames.ProPremiumExpert]);function o(e){return n.has(e)}const s=new Set(Object.values(a.BadgeUserNames));function r(e){return s.has(e)}function l(e){return a.BadgeUserNames.Moderator===e}function c(e){return a.BadgeUserNames.ProExpert===e}function u(e){return a.BadgeUserNames.ProRealtimeExpert===e}function d(e){return a.BadgeUserNames.ProPremiumExpert===e}function m(e){return a.BadgeUserNames.ProPremium===e||a.BadgeUserNames.ProPremiumTrial===e}function g(e){return a.BadgeUserNames.ProRealTime===e||a.BadgeUserNames.ProRealTimeTrial===e}function p(e){return a.BadgeUserNames.Pro===e||a.BadgeUserNames.ProTrial===e}function _(e){return a.BadgeUserNames.Employee===e}function h(e){return a.BadgeUserNames.PineWizard===e}function f(e){return a.BadgeUserNames.TradingViewWizard===e}function w(e){return a.BadgeUserNames.ProPremiumTrial===e||a.BadgeUserNames.ProRealTimeTrial===e||a.BadgeUserNames.ProTrial===e}function b(e){return p(e)||m(e)||g(e)||c(e)||u(e)||d(e)||w(e)}},558470:(e,t,i)=>{"use strict";i.d(t,{AnchorBadge:()=>a.AnchorBadge,Badge:()=>a.Badge,BadgeSize:()=>a.BadgeSize});var a=i(774465)},93916:(e,t,i)=>{"use strict";i.d(t,{PopupMenuSeparator:()=>r});var a=i(50959),n=i(497754),o=i.n(n),s=i(92910);function r(e){const{size:t="normal",className:i,ariaHidden:n=!1}=e;return a.createElement("div",{className:o()(s.separator,"small"===t&&s.small,"normal"===t&&s.normal,"large"===t&&s.large,i),role:"separator","aria-hidden":n})}},443549:(e,t,i)=>{"use strict";i.d(t,{Spinner:()=>a.Spinner});var a=i(818612)},840670:e=>{e.exports={
wrapper:"wrapper-bl9AR3Gv",hovered:"hovered-bl9AR3Gv",withIcon:"withIcon-bl9AR3Gv",labelRow:"labelRow-bl9AR3Gv",label:"label-bl9AR3Gv",switchWrap:"switchWrap-bl9AR3Gv",icon:"icon-bl9AR3Gv",labelHint:"labelHint-bl9AR3Gv",labelOn:"labelOn-bl9AR3Gv",accessible:"accessible-bl9AR3Gv"}},210511:(e,t,i)=>{"use strict";i.d(t,{DEFAULT_MENU_ITEM_SWITCHER_THEME:()=>g,MenuItemSwitcher:()=>p});var a=i(50959),n=i(497754),o=i.n(n),s=i(694553),r=i(83436),l=i(580602),c=i(591800),u=i(263361),d=i(8626),m=i(840670);const g=m;function p(e){const{className:t,checked:i,id:n,label:g,labelDescription:p,value:_,preventLabelHighlight:h,reference:f,switchReference:w,theme:b=m,disabled:v,icon:N}=e,[y,E]=(0,u.useRovingTabindexElement)(null),P=o()(b.label,i&&!h&&b.labelOn),B=o()(t,b.wrapper,i&&b.wrapperWithOnLabel,p&&b.wrapperWithDescription);return a.createElement("label",{className:o()(B,N&&b.withIcon,l.PLATFORM_ACCESSIBILITY_ENABLED&&m.accessible),htmlFor:n,ref:f,onKeyDown:function(e){if(!l.PLATFORM_ACCESSIBILITY_ENABLED||e.target!==e.currentTarget)return;const t=(0,c.hashFromEvent)(e);13!==t&&32!==t||(e.preventDefault(),y.current instanceof HTMLElement&&y.current.click())},tabIndex:E,"data-role":l.PLATFORM_ACCESSIBILITY_ENABLED?"menuitem":void 0,"aria-disabled":l.PLATFORM_ACCESSIBILITY_ENABLED&&e.disabled||void 0},void 0!==N&&a.createElement(r.Icon,{className:b.icon,icon:N}),a.createElement("div",{className:b.labelRow},a.createElement("div",{className:P},g),p&&a.createElement("div",{className:b.labelHint},p)),a.createElement("div",{className:m.switchWrap},a.createElement(s.Switch,{disabled:v,className:b.switch,reference:function(e){y(e),null==w||w(e)},checked:i,onChange:function(t){const i=t.target.checked;void 0!==e.onChange&&e.onChange(i)},value:_,tabIndex:-1,id:n,role:e.switchRole,"aria-disabled":l.PLATFORM_ACCESSIBILITY_ENABLED,...(0,d.filterDataProps)(e)})))}},752940:(e,t,i)=>{"use strict";i.d(t,{showPartnerProgramDialog:()=>n});var a=i(550525);function n(e){Promise.all([i.e(76592),i.e(63987),i.e(35213),i.e(63830),i.e(1888),i.e(94502),i.e(25977),i.e(10564),i.e(79013)]).then(i.bind(i,314304)).then((t=>{const{page:i=a.PartnerProgramPages.Links,...n}=e||{};new t.TVPartnerDialog({page:i,...n}).open()}))}},608636:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'},990498:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M8.5 14v2H10v-2h1.13a2.88 2.88 0 0 0 0-5.75H10V5.5h1c.83 0 1.5.67 1.5 1.5H14a3 3 0 0 0-3-3h-1V2H8.5v2H6.87a2.87 2.87 0 1 0 0 5.75H8.5v2.75H7A1.5 1.5 0 0 1 5.5 11H4a3 3 0 0 0 3 3h1.5Zm1.5-1.5h1.13a1.37 1.37 0 1 0 0-2.75H10v2.75ZM8.5 8.25V5.5H6.87a1.38 1.38 0 0 0 0 2.75H8.5Z"/></svg>'},148970:e=>{"use strict"
;e.exports=JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"sa","geoip_code":"sa","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"global_name":"Portuguese"},"ca_ES":{"language":"ca_ES","language_name":"Català","flag":"es","geoip_code":"es","priority":745,"iso":"ca","iso_639_3":"cat","disabled":true,"show_on_widgets":true,"global_name":"Catalan"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"deu","show_on_widgets":true,"global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":false,"global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"ron","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
}}]);