(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[5824],{486141:e=>{e.exports={wrapper:"wrapper-k5swolgQ",text:"text-k5swolgQ"}},793361:(e,t,r)=>{"use strict";r.d(t,{splitThousands:()=>o});var n=r(150335);function o(e,t="&nbsp;"){let r=e+"";-1!==r.indexOf("e")&&(r=function(e){return(0,n.fixComputationError)(e).toFixed(10).replace(/\.?0+$/,"")}(Number(e)));const o=r.split(".");return o[0].replace(/\B(?=(\d{3})+(?!\d))/g,t)+(o[1]?"."+o[1]:"")}},112235:(e,t,r)=>{"use strict";r.d(t,{OfflineScreen:()=>a,renderOfflineScreen:()=>s});var n=r(50959),o=r(500962),i=r(509806),u=r(486141);function a(){return n.createElement("div",{className:u.wrapper},n.createElement("p",{className:u.text},i.t(null,void 0,r(394021))))}function s(e){o.render(n.createElement(a,null),e)}},656846:(e,t,r)=>{"use strict";var n,o,i,u,a,s,c,l,d,p,T,f,m,g,S;r.d(t,{AccountType:()=>f,BracketType:()=>l,DisconnectType:()=>m,OrderOrPositionMessageType:()=>T,PipValueType:()=>g,RestrictionType:()=>S,TradingEntityType:()=>s}),function(e){e[e.CONNECTED=1]="CONNECTED",e[e.CONNECTING=2]="CONNECTING",e[e.DISCONNECTED=3]="DISCONNECTED",e[e.ERROR=4]="ERROR"}(n||(n={})),function(e){e[e.LIMIT=1]="LIMIT",e[e.MARKET=2]="MARKET",e[e.STOP=3]="STOP",e[e.STOPLIMIT=4]="STOPLIMIT"}(o||(o={})),function(e){e[e.BUY=1]="BUY",e[e.SELL=-1]="SELL"}(i||(i={})),function(e){e[e.CANCELED=1]="CANCELED",e[e.FILLED=2]="FILLED",e[e.INACTIVE=3]="INACTIVE",e[e.PLACING=4]="PLACING",e[e.REJECTED=5]="REJECTED",e[e.WORKING=6]="WORKING"}(u||(u={})),function(e){e[e.ALL=0]="ALL",e[e.CANCELED=1]="CANCELED",e[e.FILLED=2]="FILLED",e[e.INACTIVE=3]="INACTIVE",e[e.REJECTED=5]="REJECTED",e[e.WORKING=6]="WORKING"}(a||(a={})),function(e){e[e.Order=1]="Order",e[e.Position=2]="Position"}(s||(s={})),function(e){e[e.ORDER=1]="ORDER",e[e.POSITION=2]="POSITION"}(c||(c={})),function(e){e[e.StopLoss=0]="StopLoss",e[e.TakeProfit=1]="TakeProfit",e[e.TrailingStop=2]="TrailingStop"}(l||(l={})),function(e){e[e.LIMITPRICE=1]="LIMITPRICE",e[e.STOPPRICE=2]="STOPPRICE",e[e.TAKEPROFIT=3]="TAKEPROFIT",e[e.STOPLOSS=4]="STOPLOSS"}(d||(d={})),function(e){e[e.ERROR=0]="ERROR",e[e.SUCCESS=1]="SUCCESS"}(p||(p={})),function(e){e.Information="information",e.Warning="warning",e.Error="error"}(T||(T={})),function(e){e.Demo="demo",e.Live="live"}(f||(f={})),function(e){e[e.LogOut=0]="LogOut",e[e.FailedRestoring=1]="FailedRestoring",e[e.Offline=2]="Offline",e[e.APIError=3]="APIError",e[e.TwoFactorRequired=4]="TwoFactorRequired",e[e.CancelAuthorization=5]="CancelAuthorization",e[e.TimeOutForAuthorization=6]="TimeOutForAuthorization",e[e.OauthError=7]="OauthError",e[e.BrokenConnection=8]="BrokenConnection",e[e.FailedSignIn=9]="FailedSignIn"}(m||(m={})),function(e){e[e.None=0]="None",e[e.Pips=1]="Pips",e[e.Ticks=2]="Ticks"}(g||(g={})),function(e){e.Halted="HALTED",e.NotShortable="NOT-SHORTABLE",e.HardToBorrow="HARD-TO-BORROW"}(S||(S={}))},282729:(e,t,r)=>{"use strict";var n;r.d(t,{StopType:()=>n}),function(e){e[e.StopLoss=0]="StopLoss",e[e.TrailingStop=1]="TrailingStop"}(n||(n={}))},484095:(e,t,r)=>{"use strict"
;function n(e){return e instanceof o}r.d(t,{UserFriendlyError:()=>o,isUserFriendlyError:()=>n});class o extends Error{constructor({detailedErrorMessage:e,userFriendlyMessage:t,cause:r}){super(t),this.name="UserFriendlyError",this.detailedErrorMessage=e,this.cause=r}}},637401:(e,t,r)=>{"use strict";r.d(t,{getErrorCauses:()=>L,getErrorMessage:()=>P,getLoggerMessage:()=>D,isFinalOrderStatus:()=>k,makeNonTradableSymbolText:()=>I,orderStatusToText:()=>g,orderTypeToText:()=>v,positionSideToText:()=>C,roundDownToPowerOf10:()=>O,roundToStepByPriceTypeAndSide:()=>y,sideToText:()=>E});var n=r(509806),o=r(960521),i=r(656846),u=r(282729),a=(r(793361),r(372605),r(6835)),s=r(311757),c=r(484095);const l={2:{},1:{}},d={2:{},1:{}},p={},T={},f={};let m=!1;(0,a.getLogger)("Trading.Utils");function g(e){return S(),f[e]}function S(){m||(m=!0,l[2][2]=n.t(null,{context:"Market order"},r(610952)),l[2][1]=n.t(null,{context:"Limit order"},r(382377)),l[2][3]=n.t(null,{context:"order"},r(608921)),l[2][4]=n.t(null,{context:"Stop limit order"},r(779062)),l[1][2]=n.t(null,void 0,r(359758)),l[1][1]=n.t(null,void 0,r(398157)),l[1][3]=n.t(null,{context:"order"},r(7122)),l[1][4]=n.t(null,void 0,r(900853)),d[2][i.BracketType.TakeProfit]=n.t(null,{context:"Take profit order"},r(347947)),d[2][i.BracketType.StopLoss]=n.t(null,{context:"Stop loss order"},r(15307)),d[2][i.BracketType.TrailingStop]=n.t(null,{context:"Trailing stop order"},r(154462)),d[1][i.BracketType.TakeProfit]=n.t(null,void 0,r(129266)),d[1][i.BracketType.StopLoss]=n.t(null,void 0,r(241648)),d[1][i.BracketType.TrailingStop]=n.t(null,void 0,r(86430)),p[1]=n.t(null,{context:"trading"},r(63470)),p[-1]=n.t(null,{context:"trading"},r(742259)),T[1]=n.t(null,{context:"trading"},r(274771)),T[-1]=n.t(null,{context:"trading"},r(951219)),f[2]=n.t(null,void 0,r(885323)),f[1]=n.t(null,void 0,r(767207)),f[6]=n.t(null,void 0,r(328231)),f[3]=n.t(null,void 0,r(614841)),f[4]=n.t(null,void 0,r(373425)),f[5]=n.t(null,void 0,r(442060)))}function E(e,t){S();const r=p[e];return t?r.toUpperCase():r}function v(e){const{orderType:t,uppercase:r,shorten:n,parentId:o,stopType:a}=e;S();const s=n?2:1;let c=l,p=t;return void 0!==o&&(c=d,3===t&&(p=a===u.StopType.TrailingStop?i.BracketType.TrailingStop:i.BracketType.StopLoss),1===t&&(p=i.BracketType.TakeProfit)),r?c[s][p].toUpperCase():c[s][p]}function y(e,t,r,n){const i=(0,o.Big)(e).div(t);return 1===r&&1===n||2===r&&-1===n?i.round(0,0).mul(t).toNumber():1===r&&-1===n||2===r&&1===n?i.round(0,3).mul(t).toNumber():0}n.t(null,void 0,r(609372));function O(e){return(0,o.Big)(10).pow(Math.floor(Math.log10(e))).toNumber()}function k(e){return-1!==[2,1,5].indexOf(e)}function C(e){return S(),T[e]}function I(e,t){return n.t(null,void 0,r(221456)).replace("{symbol}",e).replace("{broker}",t)}function P(e){if(void 0===e)return n.t(null,void 0,r(328523));let t;return t=e instanceof Error?e.message:"object"==typeof e?JSON.stringify(e):e.toString(),(0,s.removeTags)(t)}function D(e){return e instanceof c.UserFriendlyError?(0,s.removeTags)(e.detailedErrorMessage):P(e)}
i.BracketType.StopLoss,n.t(null,void 0,r(241648)),i.BracketType.TakeProfit,n.t(null,void 0,r(129266)),i.BracketType.TrailingStop,n.t(null,void 0,r(86430)),i.BracketType.StopLoss,i.BracketType.TakeProfit,i.BracketType.TrailingStop;new Set(["date","dateOrDateTime","default","fixed","variablePrecision","formatQuantity","formatPrice","formatPriceForexSup","integerSeparated","localDate","localDateOrDateTime","percentage","pips","profit","profitInInstrumentCurrency","side","positionSide","status","symbol","text","type","marginPercent","empty"]);function L(e){return(0,c.isUserFriendlyError)(e)&&void 0!==e.cause?[...L(e.cause),e.cause]:[e]}},481330:(e,t,r)=>{"use strict";r.d(t,{adjustSavedCustomFieldsValues:()=>A,bottomTradingTabClassName:()=>l,brokersListFromPlans:()=>p,checkIsExistingPosition:()=>q,convertActionDescriptionsToActions:()=>g,executionText:()=>m,filterDurationsByOrderType:()=>R,filterDurationsBySymbolDurations:()=>B,findDurationMetaInfo:()=>L,getAsk:()=>F,getBid:()=>U,getCurrency:()=>y,getDefaultOrderType:()=>M,getLast:()=>G,getOrderDuration:()=>N,getPriceStep:()=>Q,getQuotePrice:()=>K,getTimestamp:()=>x,isBatsQuotes:()=>I,isDefined:()=>P,isMintickMultiple:()=>w,isModifyOrderSupported:()=>k,isMoveOrderSupported:()=>C,isNoQuotes:()=>H,isOAuthAuthType:()=>f,isOrderActive:()=>S,makeBrokerSideMaintananceFeatureToggleName:()=>E,makeDatePlus24UTCHours:()=>D,makeInitialOrderDuration:()=>b,makeMaintananceFeatureToggleName:()=>v,makeOrderDuration:()=>h,orderStatusToText:()=>c.orderStatusToText,roundToStepRequired:()=>V});var n=r(960521),o=r(650151),i=r(372605),u=r(282729),a=r(973602),s=r(807107),c=r(637401);const l="js-bottom-trading-tab";const d=["Paper"];function p(e,t){const r=e.map((e=>e.id)),n=t.map((e=>e.slug_name)),o=t.filter((e=>r.includes(e.slug_name))).map((t=>({metainfo:T(e,t.slug_name),brokerPlan:t}))),i=e.filter((e=>!n.includes(e.id)&&!d.includes(e.id))).map((e=>({metainfo:e}))),u=d.map((t=>({metainfo:T(e,t)})));return u.length>0&&o.splice(0,0,...u),[...o,...i]}function T(e,t){return(0,o.ensureDefined)(e.find((e=>e.id.toLowerCase()===t.toLowerCase())))}function f(e){return void 0!==e&&["oauth","oauth2-implicit-flow","oauth2-code-flow"].includes(e)}function m(e,t){const r=(0,c.sideToText)(e.side)+" "+e.qty+" @ "+t.format(e.price);return r.substring(0,1).toUpperCase()+r.substring(1).toLowerCase()}function g(e){return e?e.map((e=>"-"===e.text||e.separator?new a.Separator:new a.Action({actionId:"Trading.CustomActionId",name:e.name,checkable:e.checkable,checked:e.checked,disabled:void 0!==e.enabled&&!e.enabled,label:e.text,statName:e.statName,icon:e.icon,onExecute:t=>{const r=t.getState();e.action({checkable:r.checkable,checked:r.checked,enabled:!r.disabled,text:r.label})}}))):[]}function S(e){return 6===e||3===e}function E(e){return`${e}-brokers-side-maintenance`.toLowerCase()}function v(e){return`${e}-maintenance`.toLowerCase()}function y(e,t){return!t&&e.currencySign||e.currency||""}function O(e,t){
return Boolean(void 0!==e.parentId&&t.supportModifyBrackets&&(t.supportTrailingStop&&t.supportModifyTrailingStop||e.stopType!==u.StopType.TrailingStop))}function k(e,t){const r=2!==e.type&&void 0===e.parentId&&(t.supportModifyOrderPrice||t.supportEditAmount||t.supportModifyBrackets),n=O(e,t);return Boolean(r||n)}function C(e,t){const r=void 0===e.parentId&&t.supportModifyOrderPrice,n=O(e,t);return Boolean(r||n)}function I(e){var t;return"BATS"===(null===(t=e.originalName)||void 0===t?void 0:t.split(":")[0])}function P(e){return null!=e}function D(){const e=new Date;return e.setUTCHours(e.getUTCHours()+24),e}function L(e,t){return e.find((e=>e.value===t))}function N(e){const{orderDuration:t,orderType:r,savedDuration:n,orderDurations:o,symbolDurations:i}=e;if(void 0!==t)return t;const u=function(e){const{duration:t,orderDurations:r,orderType:n,symbolDurations:o}=e;if(null===t||void 0===r)return null;const i=B(r,o),u=L(R(i,null!=n?n:null),t.type);if(void 0===u)return null;if(void 0!==t.datetime&&(u.hasDatePicker||u.hasTimePicker)){const e=864e5,r=u.hasTimePicker?t.datetime<Date.now():Math.floor((t.datetime-Date.now())/e)<0;t.datetime=r?D().getTime():t.datetime}return t}({duration:n,orderType:r,orderDurations:o,symbolDurations:i});return null!==u?{...u}:b(r,o,i)}function b(e,t,r){var n;if(void 0===t)return null;const o=R(B(t,r),e);if(0===o.length)return null;return h(null!==(n=o.find((e=>e.default)))&&void 0!==n?n:o[0])}function h(e){const t={type:e.value};return Boolean(e.hasTimePicker||e.hasDatePicker)&&(t.datetime=x(D())),t}function B(e,t){return 0===e.length||void 0===t||0===t.length?e:e.filter((({value:e})=>t.includes(e)))}function R(e,t){const r=[1,3,4];return e.filter((e=>{var n;const o=null!==(n=e.supportedOrderTypes)&&void 0!==n?n:r;return null===t||o.includes(t)}))}function x(e){return e.valueOf()}function A(e,t){if(void 0===t.customFields)return{};const r={};return t.customFields.forEach((t=>{var n;const o="ComboBox"===t.inputType;if(o&&t.forceUserEnterInitialValue)return;const i=o?t.items[0].value:t.value,u=null!==(n=e[t.id])&&void 0!==n?n:i;void 0!==u&&(r[t.id]=u)})),r}function M(e){return e.supportLimitOrders?1:e.supportMarketOrders?2:e.supportStopLimitOrders?4:e.supportStopOrders?3:void 0}function w(e,t){if(0===t)return!1;const r=Math.round(1e12*t)/1e12,o=new n.Big(e),i=new n.Big(r);return o.mod(i).eq(0)}function F(e){return(0,i.isNumber)(e.ask)?e.ask:(0,i.isNumber)(e.trade)?e.trade:0}function U(e){return(0,i.isNumber)(e.bid)?e.bid:(0,i.isNumber)(e.trade)?e.trade:0}function G(e){return(0,i.isNumber)(e.trade)?e.trade:0}function H(e){return null===e||void 0===e.ask||void 0===e.bid}function K(e,t){return 1===t?F(e):U(e)}function Q(e){const{priceType:t,minTick:r,price:n,variableMinTickData:o,limitPriceStep:i,stopPriceStep:u}=e;return 1===t&&void 0!==i?i:2===t&&void 0!==u?u:void 0!==o&&void 0!==n?(0,s.getMinTick)({minTick:r,price:n,variableMinTickData:o}):r}function V(e){const{priceType:t,minTick:r,limitPriceStep:n,stopPriceStep:o}=e;return 1===t&&void 0!==n?n!==r:2===t&&void 0!==o&&o!==r}function q(e){
return void 0!==e&&(0!==e.qty||0!==e.longQty||0!==e.shortQty)}}}]);