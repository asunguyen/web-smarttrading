(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[93196],{860015:e=>{e.exports={wrap:"wrap-ne5qGlZh",icon:"icon-ne5qGlZh",text:"text-ne5qGlZh",disabled:"disabled-ne5qGlZh"}},369006:e=>{e.exports={hasTooltip:"hasTooltip-DcvaoxPU",uppercase:"uppercase-DcvaoxPU"}},102746:e=>{e.exports={wrap:"wrap-Q2NZ0gvI"}},525679:e=>{e.exports={checkbox:"checkbox-FG0u1J5p",title:"title-FG0u1J5p"}},941125:e=>{e.exports={hintButton:"hintButton-qEI9XsjF"}},882112:e=>{e.exports={}},153209:e=>{e.exports={container:"container-PNiXwSz6",icon:"icon-PNiXwSz6",tooltip:"tooltip-PNiXwSz6",date:"date-PNiXwSz6",time:"time-PNiXwSz6"}},230247:e=>{e.exports={tooltip:"tooltip-RU08GcsY"}},678634:e=>{e.exports={wrap:"wrap-NsE0FV0Z",input:"input-NsE0FV0Z"}},543832:e=>{e.exports={icon:"icon-Rubz29lH"}},318383:(e,t,n)=>{"use strict";n.d(t,{EditButton:()=>i});var r=n(50959),o=n(497754),a=n(83436),l=n(610600),s=n(860015);function i(e){const{value:t,onClick:n,className:i,startSlot:u,disabled:c=!1}=e;return r.createElement("div",{className:o(s.wrap,c&&s.disabled,i),onClick:n,"data-name":"edit-button"},r.createElement("div",{className:o(s.text,"apply-overflow-tooltip")},void 0!==u&&u,r.createElement("span",null,t)),r.createElement(a.Icon,{icon:l,className:s.icon}))}},364979:(e,t,n)=>{"use strict";n.d(t,{SymbolInputsButton:()=>E});var r=n(50959),o=n(497754),a=n.n(o),l=n(444372),s=n(650151),i=n(670797),u=n(8629),c=n(77122),d=n(413744),p=n(972680),m=n(831350),f=n(318383),h=n(545566),g=n(419471),v=n(889267),y=n(296652),b=n(494966),C=n(369006);function S(e){const{symbol:t,onSymbolChanged:o,disabled:s,className:d}=e,[h,g]=(0,r.useState)(t),S=(0,r.useContext)(i.SlotContext),E=(0,r.useContext)(u.PopupContext);return r.createElement(f.EditButton,{value:h,onClick:function(){const e=function(e){const t=(0,v.tokenize)(e);return(0,y.isSpread)(t)}(h)?h:(0,b.safeShortName)(h),t=(0,p.getSymbolSearchCompleteOverrideFunction)();(0,m.showSymbolSearchItemsDialog)({onSearchComplete:e=>{t(e[0].symbol,e[0].result).then((e=>{o(e.symbol),g(e.name)}))},dialogTitle:l.t(null,void 0,n(423398)),defaultValue:e,manager:S,onClose:()=>{E&&E.focus()},showSpreadActions:c.enabled("show_spread_operators")&&c.enabled("studies_symbol_search_spread_operators")})},disabled:s,className:a()(d,c.enabled("uppercase_instrument_names")&&C.uppercase)})}function E(e){if("definition"in e){const{propType:t,properties:n,id:o,title:a="",solutionId:l}=e.definition,i=n[t],u=i.value()||"",c=e=>{i.setValue(e)};return r.createElement(h.CommonSection,{id:o,title:a,solutionId:l},r.createElement(g.CellWrap,null,r.createElement(S,{symbol:(0,s.ensureDefined)(u),onSymbolChanged:c})))}{const{study:t,value:n,input:{id:o,name:l},onChange:i,disabled:u,hasTooltip:c}=e,p=e=>{const n=(0,d.getInternalSymbolName)(e,t);i(n,o,l)};return r.createElement(S,{symbol:(0,s.ensureDefined)(n),onSymbolChanged:p,disabled:u,className:a()(c&&C.hasTooltip)})}}},831350:(e,t,n)=>{"use strict";n.d(t,{showSymbolSearchItemsDialog:()=>u});var r=n(50959),o=n(500962),a=n(670797),l=n(322654),s=n(781666),i=n(950186);function u(e){
const{initialMode:t="symbolSearch",autofocus:n=!0,defaultValue:u,showSpreadActions:c,selectSearchOnInit:d,onSearchComplete:p,dialogTitle:m,placeholder:f,fullscreen:h,initialScreen:g,wrapper:v,dialog:y,contentItem:b,onClose:C,onOpen:S,footer:E,symbolTypes:w,searchInput:D,emptyState:N,hideMarkedListFlag:x,dialogWidth:T="auto",manager:M,shouldReturnFocus:_,onSymbolFiltersParamsChange:I,onEmptyResults:F}=e;if(l.dialogsOpenerManager.isOpened("SymbolSearch")||l.dialogsOpenerManager.isOpened("ChangeIntervalDialog")||(0,s.isSignModalOpen)())return;const Y=document.createElement("div"),B=r.createElement(a.SlotContext.Provider,{value:null!=M?M:null},r.createElement(i.SymbolSearchItemsDialog,{onClose:$,initialMode:t,defaultValue:u,showSpreadActions:c,hideMarkedListFlag:x,selectSearchOnInit:d,onSearchComplete:p,dialogTitle:m,placeholder:f,fullscreen:h,initialScreen:g,wrapper:v,dialog:y,contentItem:b,footer:E,symbolTypes:w,searchInput:D,emptyState:N,autofocus:n,dialogWidth:T,shouldReturnFocus:_,onSymbolFiltersParamsChange:I,onEmptyResults:F}));function $(){o.unmountComponentAtNode(Y),l.dialogsOpenerManager.setAsClosed("SymbolSearch"),C&&C()}return o.render(B,Y),l.dialogsOpenerManager.setAsOpened("SymbolSearch"),S&&S(),{close:$}}},52498:(e,t,n)=>{"use strict";n.d(t,{createAdapter:()=>a});var r=n(617540),o=n(373017);function a(e){if((0,r.isLineTool)(e))return{isPine:()=>!1,isStandardPine:()=>!1,canOverrideMinTick:()=>!1,resolvedSymbolInfoBySymbol:()=>{throw new TypeError("Only study is supported.")},symbolsResolved:()=>{throw new TypeError("Only study is supported.")},parentSources:()=>{throw new TypeError("Only study is supported.")},getAllChildren:()=>[],sourceId:()=>{throw new TypeError("Only study is supported.")},inputs:()=>({}),parentSourceForInput:()=>{throw new TypeError("Only study is supported.")}};if((0,o.isStudy)(e))return e;if("isInputsStudy"in e)return e;throw new TypeError("Unsupported source type.")}},822300:(e,t,n)=>{"use strict";n.d(t,{useDefinitionProperty:()=>a});var r=n(50959),o=n(898005);const a=e=>{const t="property"in e?e.property:void 0,n="defaultValue"in e?e.defaultValue:e.property.value(),[a,l]=(0,r.useState)(t?t.value():n);(0,r.useEffect)((()=>{if(t){const n={};return l(t.value()),t.subscribe(n,(t=>{const n=t.value();e.handler&&e.handler(n),l(n)})),()=>{t.unsubscribeAll(n)}}return()=>{}}),[t]);return[a,e=>{if(void 0!==t){const n=t.value();o.logger.logNormal(`Changing property value from "${n}" to "${e}"`),t.setValue(e)}}]}},419471:(e,t,n)=>{"use strict";n.d(t,{CellWrap:()=>s});var r=n(50959),o=n(497754),a=n.n(o),l=n(102746);function s(e){return r.createElement("div",{className:a()(l.wrap,e.className)},e.children)}},451505:(e,t,n)=>{"use strict";n.d(t,{CheckableTitle:()=>u});var r=n(50959),o=n(182120),a=n(822300);function l(e){const{property:t,...n}=e,[l,s]=(0,a.useDefinitionProperty)({property:t}),i="mixed"===l;return r.createElement(o.Checkbox,{...n,name:"toggle-enabled",checked:i||l,indeterminate:i,onChange:function(){s("mixed"===l||!l)}})}var s=n(419471),i=n(525679);function u(e){
const{property:t,disabled:n,title:o,className:a,name:u}=e,c=r.createElement("span",{className:i.title},o);return r.createElement(s.CellWrap,{className:a},t?r.createElement(l,{name:u,className:i.checkbox,property:t,disabled:n,label:c,labelAlignBaseline:!0}):c)}},545566:(e,t,n)=>{"use strict";n.d(t,{CommonSection:()=>i});var r=n(50959),o=n(253059),a=n(451505),l=n(330213),s=n(941125);function i(e){const{id:t,offset:n,disabled:i,checked:u,title:c,children:d,solutionId:p}=e;return r.createElement(o.PropertyTable.Row,null,r.createElement(o.PropertyTable.Cell,{placement:"first",verticalAlign:"adaptive",offset:n,"data-section-name":t,colSpan:Boolean(d)?void 0:2,checkableTitle:!0},r.createElement(a.CheckableTitle,{name:`is-enabled-${t}`,title:c,disabled:i,property:u}),p&&!Boolean(d)&&r.createElement(l.HintButton,{solutionId:p,className:s.hintButton})),Boolean(d)&&r.createElement(o.PropertyTable.Cell,{placement:"last","data-section-name":t},d,p&&r.createElement(l.HintButton,{solutionId:p,className:s.hintButton})))}},898005:(e,t,n)=>{"use strict";n.d(t,{logger:()=>r});const r=(0,n(201089).getLogger)("Platform.GUI.PropertyDefinitionTrace")},495450:(e,t,n)=>{"use strict";n.d(t,{getChartTimezoneOffsetMs:()=>l,getChartTimezoneOffsetSec:()=>s,getTimezoneName:()=>a});var r=n(988124),o=n.n(r);function a(e){const t=e.model().timezone();if("exchange"!==t)return t;const n=e.model().mainSeries().symbolInfo();return null==n?void 0:n.timezone}function l(e,t){if(void 0===t)return 0;return o().get_timezone(t).offset_utc(e)}function s(e,t){return l(1e3*e,t)/1e3}},46926:(e,t,n)=>{"use strict";n.d(t,{CircleLogoPair:()=>a});var r=n(50959),o=n(439378);n(882112);function a(e){const{primaryLogoUrl:t,secondaryLogoUrl:n,size:a,className:s}=e;return r.createElement("span",{className:(0,o.getBlockStyleClasses)(a,s),title:e.title},r.createElement(l,{logoUrl:n,size:a}),r.createElement(l,{logoUrl:t,size:a}))}function l(e){const{logoUrl:t,size:n}=e,a=(0,o.getLogoStyleClasses)(n);return void 0===t?r.createElement("span",{className:a}):r.createElement("img",{className:a,src:t,alt:""})}},439378:(e,t,n)=>{"use strict";n.d(t,{getBlockStyleClasses:()=>o,getLogoStyleClasses:()=>a});var r=n(497754);function o(e,t){return r("tv-circle-logo-pair",`tv-circle-logo-pair--${e}`,t)}function a(e,t){return r("tv-circle-logo-pair__logo",`tv-circle-logo-pair__logo--${e}`,!t&&"tv-circle-logo-pair__logo-empty")}},523663:(e,t,n)=>{"use strict";n.d(t,{CalendarViewType:()=>y,DECADES_YEARS_AMOUNT:()=>S,MONTHS:()=>l,MONTHS_SHORT:()=>s,SUB_HEADER_DECADES:()=>b,SUB_HEADER_YEAR:()=>C,WEEKDAYS_MIN:()=>o,getCurrentAriaLabel:()=>N,getCurrentVisibleTitle:()=>x,getDayAriaLabel:()=>E,getNextAriaLabel:()=>D,getNextLiveRegionConfirmation:()=>M,getNextMonth:()=>I,getPrevAriaLabel:()=>w,getPrevLiveRegionConfirmation:()=>T,getViewTypeLiveRegionConfirmation:()=>_});var r=n(444372);const o=[r.t(null,{context:"day_of_week"},n(11268)),r.t(null,{context:"day_of_week"},n(831533)),r.t(null,{context:"day_of_week"},n(226230)),r.t(null,{context:"day_of_week"},n(24793)),r.t(null,{context:"day_of_week"
},n(519801)),r.t(null,{context:"day_of_week"},n(963331)),r.t(null,{context:"day_of_week"},n(85954))],a=[r.t(null,void 0,n(272149)),r.t(null,void 0,n(561199)),r.t(null,void 0,n(944979)),r.t(null,void 0,n(107147)),r.t(null,void 0,n(107951)),r.t(null,void 0,n(772970)),r.t(null,void 0,n(101144))],l=[r.t(null,void 0,n(926910)),r.t(null,void 0,n(316467)),r.t(null,void 0,n(684675)),r.t(null,void 0,n(997637)),r.t(null,void 0,n(668327)),r.t(null,void 0,n(49385)),r.t(null,void 0,n(323230)),r.t(null,void 0,n(486797)),r.t(null,void 0,n(661132)),r.t(null,void 0,n(290784)),r.t(null,void 0,n(171194)),r.t(null,void 0,n(55669))],s=[r.t(null,void 0,n(795425)),r.t(null,void 0,n(835050)),r.t(null,void 0,n(651369)),r.t(null,void 0,n(442762)),r.t(null,void 0,n(668327)),r.t(null,void 0,n(715224)),r.t(null,void 0,n(6215)),r.t(null,void 0,n(38465)),r.t(null,void 0,n(757902)),r.t(null,void 0,n(73546)),r.t(null,void 0,n(671230)),r.t(null,void 0,n(92203))],i=r.t(null,void 0,n(502587)),u=r.t(null,void 0,n(39752)),c=r.t(null,void 0,n(239329)),d=r.t(null,void 0,n(383771)),p=r.t(null,void 0,n(127004)),m=r.t(null,void 0,n(275385)),f=r.t(null,void 0,n(583583)),h=r.t(null,void 0,n(680879)),g=r.t(null,void 0,n(806244)),v={setMonth:r.t(null,void 0,n(692702)),setYear:r.t(null,void 0,n(952051)),setDecades:r.t(null,void 0,n(499990))};var y;!function(e){e.Month="month",e.Year="year",e.Decades="decades"}(y||(y={}));const b=r.t(null,void 0,n(669325)),C=r.t(null,void 0,n(695543)),S=20;function E(e){return`${a[e.getDay()]} ${e.getDate()} ${l[e.getMonth()]} ${e.getFullYear()}`}function w(e,t){switch(e){case y.Month:{const e=new Date(t);return e.setMonth(e.getMonth()-1),`${i}, ${l[e.getMonth()]} ${e.getFullYear()}`}case y.Year:return`${c}, ${t.getFullYear()-1}`;case y.Decades:return`${p}, ${t.getFullYear()-S} - ${t.getFullYear()-1}`}}function D(e,t){switch(e){case y.Month:{const e=new Date(t);return e.setMonth(e.getMonth()+1),`${u}, ${l[e.getMonth()]} ${e.getFullYear()}`}case y.Year:return`${d}, ${t.getFullYear()+1}`;case y.Decades:return`${m}, ${t.getFullYear()+S} - ${t.getFullYear()+2*S-1}`}}function N(e,t){switch(e){case y.Month:return`${f}, ${t.getFullYear()}`;case y.Year:return`${h}, ${t.getFullYear()} - ${t.getFullYear()+S-1}`;case y.Decades:return`${g}, ${l[t.getMonth()]} ${t.getFullYear()}`}}function x(e,t){switch(e){case y.Month:return`${l[t.getMonth()]} ${t.getFullYear()}`;case y.Year:return`${t.getFullYear()}`;case y.Decades:return`${t.getFullYear()} - ${t.getFullYear()+S-1}`}}function T(e,t){switch(e){case y.Month:{const e=new Date(t);return e.setMonth(e.getMonth()-1),v.setMonth.format({month:l[e.getMonth()]})}case y.Year:return v.setYear.format({year:""+(t.getFullYear()-1)});case y.Decades:return v.setDecades.format({year_start:""+(t.getFullYear()-S),year_end:""+(t.getFullYear()-1)})}}function M(e,t){switch(e){case y.Month:{const e=I(t);return v.setMonth.format({month:l[e.getMonth()]})}case y.Year:return v.setYear.format({year:`${t.getFullYear()+1}`});case y.Decades:return v.setDecades.format({year_start:`${t.getFullYear()+S}`,
year_end:""+(t.getFullYear()+2*S-1)})}}function _(e,t){switch(e){case y.Month:return v.setYear.format({year:`${t.getFullYear()}`});case y.Year:return v.setDecades.format({year_start:`${t.getFullYear()}`,year_end:""+(t.getFullYear()+S-1)});case y.Decades:return v.setMonth.format({month:l[t.getMonth()]})}}function I(e){return 11===e.getMonth()?new Date(e.getFullYear()+1,0,1):new Date(e.getFullYear(),e.getMonth()+1,1)}},668669:(e,t,n)=>{"use strict";n.d(t,{DEFAULT_INPUT_DATE_THEME:()=>m,DateInput:()=>f});var r=n(50959),o=n(444372),a=n(83436),l=n(514420),s=n(342353),i=n(497754),u=n.n(i),c=n(230247);function d(e){const{className:t,text:n}=e;return r.createElement("span",{className:u()(c.tooltip,t)},n)}var p=n(598475);const m=n(153209);function f(e){const{hasErrors:t,onClick:i,errors:u,className:c,theme:f=m,...h}=e;return r.createElement("div",{className:f.container,onClick:i},r.createElement(s.FormInput,{...h,className:f.date,hasErrors:t,errors:[],endSlot:!t&&r.createElement(l.EndSlot,{icon:!0,interactive:!1},r.createElement(a.Icon,{icon:p,className:f.icon}))}),t&&r.createElement(d,{text:o.t(null,void 0,n(732457)),className:f.tooltip}))}},274210:(e,t,n)=>{"use strict";n.d(t,{addLocalTime:()=>D,addOneDay:()=>y,addOneWeek:()=>g,formatTimezoneOffset:()=>k,getCloneDateWithOffset:()=>B,getDateInTabOrder:()=>$,getDecades:()=>M,getDecadesStart:()=>N,getFirstEnabledDay:()=>I,getFirstEnabledMonth:()=>F,getFirstEnabledYear:()=>Y,getMonths:()=>T,getWeeks:()=>x,isDayDisabled:()=>_,isInRange:()=>C,isInvalidDateObj:()=>S,isSameDay:()=>d,isSameMonth:()=>m,isSameYear:()=>f,isYesterday:()=>p,range:()=>o,resetToDayEnd:()=>s,resetToDayStart:()=>l,resetToWeekStart:()=>i,subtractLocalTime:()=>w,subtractOneDay:()=>v,twoDigitsFormat:()=>a});var r=n(523663);function o(e,t,n=1){const r=Math.max(Math.ceil((t-e)/n),0),o=Array(r);for(let t=0;t<r;t++)o[t]=e,e+=n;return o}function a(e){return("0"+e).slice(-2)}function l(e){const t=new Date(e);return t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(0),t}function s(e){const t=new Date(e);return t.setMilliseconds(999),t.setSeconds(59),t.setMinutes(59),t.setHours(23),t}function i(e,t=!1){const n=l(e),r=t?function(e){if(e>6)throw new Error("Invalid day is provided");return 0===e?6:e-1}(n.getDay()):n.getDay();return n.setDate(n.getDate()-r),n}function u(e){const t=l(e);return t.setDate(1),t}function c(e){const t=u(e);return t.setMonth(1),t}function d(e,t){return!!t&&Number(l(e))===Number(l(t))}function p(e){return d(e,v(new Date))}function m(e,t){return!!t&&Number(u(e))===Number(u(t))}function f(e,t){return!!t&&Number(c(e))===Number(c(t))}function h(e){const t=new Date(e.getFullYear(),0,1),n=(Number(e)-Number(t))/864e5;return Math.ceil((n+t.getDay()+1)/7)}function g(e){const t=new Date(e);return t.setDate(t.getDate()+7),t}function v(e){const t=new Date(e);return t.setDate(t.getDate()-1),t}function y(e){const t=new Date(e);return t.setDate(t.getDate()+1),t}const b={day:l,month:u,year:c};function C(e,t,n,r="day"){const o=b[r],a=!t||Number(o(t))-Number(o(e))<=0
;return(!n||Number(o(n))-Number(o(e))>=0)&&a}function S(e){return Number.isNaN(Number(e))}function E(e){return new Date(e).getTimezoneOffset()/60}function w(e){const t=new Date(e);return t.setHours(t.getHours()+E(t)),t}function D(e){const t=new Date(e);return t.setHours(t.getHours()-E(t)),t}function N(e){const t=e.getFullYear()%10*-1,n=new Date(e);return n.setFullYear(e.getFullYear()+t),n}function x(e){const t=[];let n=i(u(e),!0);for(let r=0;r<6;r++){const r=[];for(let t=0;t<7;t++){const o=new Date(n);o.setDate(o.getDate()+t),m(o,e)&&r.push(o)}r.length&&t.push({week:h(n),days:r}),n=new Date(g(n))}return t}function T(e){return r.MONTHS_SHORT.map(((t,n)=>{const o=u(e);return o.setMonth(n),{title:t,ariaLabel:r.MONTHS[n],date:o}}))}function M(e){const t=[];for(let n=0;n<r.DECADES_YEARS_AMOUNT;n++){const r=new Date(e);r.setFullYear(e.getFullYear()+n),t.push(r)}return t}function _({day:e,minDate:t,maxDate:n,disableWeekends:r=!1}){if(!C(e,t,n))return!0;const o=[6,0].includes(e.getDay());return!!r&&o}function I(e,t){return function n(r=0,o=0){if(!e[r]||!e[r].days[o])return;const a=e[r].days,l=a[o];return t(l)?o+1<a.length?n(r,o+1):n(r+1,0):l}()}function F(e,t){return function n(r=0){if(!e[r])return;const o=e[r].date;return t(o)?n(r+1):o}()}function Y(e,t){return function n(r=0){if(!e[r])return;const o=e[r];return t(o)?n(r+1):o}()}function B({dateFrom:e,offset:t,level:n="day",maxIterations:r=6,isDisabledDate:o=(()=>!1)}){return function e(a,l=0){const s=new Date(a);switch(n){case"day":s.setDate(s.getDate()+t);break;case"month":s.setMonth(s.getMonth()+t);break;case"year":s.setFullYear(s.getFullYear()+t)}const i=o(s);return l>r||!i?i?null:s:e(s,l+1)}(e)}function $({selectedDate:e,dateToFocus:t,currentlyFocused:n,firstEnabledDate:r,getFirstDate:o,getLastDate:a,isDisabledDate:l}){const s=C(e,o(),a(),"day")&&!l(e)?e:null,i=t&&C(t,o(),a(),"day")&&!l(t)?t:null;return(n&&C(n,o(),a(),"day")&&!l(n)?n:null)||s||i||r}function k(e){if(0===e)return"UTC";const t=Math.abs(e/6e4),n=Math.floor(t/60),r=t-60*n;return`UTC${Math.sign(e)<=0?"-":"+"}${n}${r>0?`:${r}`:""}`}},330213:(e,t,n)=>{"use strict";n.d(t,{HintButton:()=>s});var r=n(50959),o=n(444372),a=n(137982),l=n(860037);function s(e){const{solutionId:t,title:s=o.t(null,void 0,n(576273)),className:i,tabIndex:u}=e,c=(0,r.useMemo)((()=>function(e){return(0,r.forwardRef)(((n,o)=>r.createElement("a",{...n,ref:o,href:`?solution=${e}`,onClick:t})));function t(t){t.preventDefault(),(0,l.showSupportDialog)({solutionId:e})}}(t)),[t]);return r.createElement(a.IconQuestionInformation,{icon:"question",ariaLabel:s,tooltip:s,className:i,renderComponent:c,tabIndex:u})}},170140:(e,t,n)=>{"use strict";n.d(t,{TimeInput:()=>k});var r=n(638456),o=n(50959),a=n(497754),l=n.n(a),s=n(650151),i=n(763341),u=n(514420),c=n(142135),d=n(83436),p=n(543832),m=n(595096);function f(e){return o.createElement(d.Icon,{className:p.icon,icon:m})}var h=n(405964),g=n(678634);var v=n(385806),y=n(678515);const b={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{
pattern:/[a-zA-Z]/}};function C(e,t,n){const r=[],o=n;let a=0,l=0;const s=e.length,i=o.length;let u=-1,c=0;const d=[],p=s-1,m=[];let f;for(;a<s&&l<i;){const n=e.charAt(a),s=o.charAt(l),i=b[n];i?(s.match(i.pattern)?(r.push(s),i.recursive&&(-1===u?u=a:a===p&&a!==u&&(a=u-1),p===u&&(a-=1)),a+=1):s===f?(c--,f=void 0):i.optional?(a+=1,l-=1):i.fallback?(r.push(i.fallback),a+=1,l-=1):m.push({p:l,v:s,e:i.pattern}),l+=1):(t||r.push(n),s===n?(d.push(l),l+=1):(f=n,d.push(l+c),c++),a+=1)}const h=e.charAt(p);s!==i+1||b[h]||r.push(h);const g=r.join(""),v=function(e,t){const n=0,r={};for(let e=0;e<t.length;e++)r[t[e]+n]=1;return r}(0,d);return[g,v,m]}function S(e,t,n){const r=function(e){let t=!0;for(let n=0;n<e.length;n++){const r=b[e.charAt(n)];if(r&&r.recursive){t=!1;break}}return t?e.length:void 0}(e),[a,l]=C(e,!1,t),[i,u]=(0,o.useState)(a),[c,d]=(0,o.useState)(0),[p,m]=(0,o.useState)(!1),f=(0,o.useRef)(l),h=(0,o.useRef)(i);return(0,o.useEffect)((()=>{const[n,r]=C(e,!1,t);u(n),g(r)}),[t,e]),(0,o.useLayoutEffect)((()=>{const e=(0,s.ensureNotNull)(n.current);p&&(e.setSelectionRange(c,c),m(!1)),d(E(e))}),[p]),[t,h,{onChange:function(){const t=(0,s.ensureNotNull)(n.current),r=t.value,[o,a]=C(e,!1,r);u(o),h.current=o;const l=g(a),p=function(e,t,n,r,o,a){if(e!==t){const l=t.length,s=e.length;let i=0,u=0,c=0,d=0,p=0;for(p=r;p<l&&o[p];p++)u++;for(p=r-1;p>=0&&o[p];p--)i++;for(p=r-1;p>=0;p--)o[p]&&c++;for(p=n-1;p>=0;p--)a[p]&&d++;if(r>s)r=10*l;else if(n>=r&&n!==s){if(a[r]){const e=r;r-=d-c,o[r-=i]&&(r=e)}}else r>n&&(r+=c-d,r+=u)}return r}(i,o,c,E(t),a,l);d(p),m(!0)},onSelect:function(){const e=(0,s.ensureNotNull)(n.current);d(E(e))},maxLength:r}];function g(e){const t=f.current;return f.current=e,t}}function E(e){return e.selectionStart||0}function w(e){const{value:t,mask:n,onChange:r,...a}=e,l=(0,o.useRef)(null),[s,i,u]=S(n,t,l);return(0,o.useLayoutEffect)((()=>{void 0!==e.reference&&(e.reference.current=l.current)}),[e.reference]),o.createElement(c.InputControl,{...a,maxLength:u.maxLength,value:s,autoComplete:"off",reference:function(e){l.current=e},onChange:function(){u.onChange(),r(i.current)},onSelect:u.onSelect})}var D=n(470316),N=n(45968),x=n(634993),T=n(674981);const M=(()=>{const e=[];for(let t=0;t<24;++t)for(let n=0;n<60;n+=15){const[r,o]=[B(t.toString()),B(n.toString())],a=`${r}:${o}`,l=F(a)?a:Y(a);e.push(l)}return e})();function _(e){let t=!1;const n=(0,o.useRef)(null),r=(0,o.useRef)(null),a=(0,o.useRef)(null),i=(0,o.useRef)(null),[c,d]=(0,h.useFocus)(),[p,m]=(0,o.useState)(e.value),g=I(p),b=F(g)?g:Y(g),[C,S]=(0,o.useState)(b),E=c||R().some((e=>null!==e&&e.contains(document.activeElement)));(0,o.useLayoutEffect)((()=>m(e.value)),[e.value]),(0,o.useLayoutEffect)((()=>S(b)),[p,E]),(0,o.useEffect)((()=>z(C===b?"auto":"smooth")),[C]);const _=(0,T.lowerbound)(M,b,((e,t)=>e<t));let B=M;M[_]!==b&&(B=[...M],B.splice(_,0,b));const $=(0,v.useOutsideEvent)({mouseDown:!0,touchStart:!0,handler:function(e){null!==r.current&&E&&e.target instanceof Node&&null!==a.current&&!a.current.contains(e.target)&&r.current.blur()}})
;return o.createElement("div",{className:l()(e.className),onKeyDown:function(e){if(e.defaultPrevented)return;const t=(0,D.hashFromEvent)(e.nativeEvent);if(38===t){e.preventDefault();const t=(B.indexOf(C)+B.length-1)%B.length;S(B[t])}if(40===t){e.preventDefault();const t=(B.indexOf(C)+B.length+1)%B.length;S(B[t])}},onFocus:function(e){P(e)||d.onFocus(e)},onBlur:function(e){P(e)||d.onBlur(e)},ref:$},o.createElement(w,{disabled:e.disabled,name:e.name,endSlot:o.createElement(u.EndSlot,{icon:!0},o.createElement(f,null)),reference:r,containerReference:n,mask:"09:00",value:p,onFocus:function(t){var n;setTimeout(L,0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(e){P(e)||k(p)},onChange:function(t){m(t),e.onInput&&e.onInput(t)},onKeyDown:function(e){if(e.defaultPrevented)return;const t=(0,D.hashFromEvent)(e.nativeEvent);13===t&&(e.preventDefault(),k(C),(0,s.ensureNotNull)(r.current).blur());27===t&&(e.preventDefault(),(0,s.ensureNotNull)(r.current).blur())}}),o.createElement(N.PopupMenu,{onOpen:function(){z()},onClose:function(){},position:function(){const e=(0,s.ensureNotNull)(n.current).getBoundingClientRect(),t=window.innerHeight-e.bottom,r=e.top;let o=231,a=e.bottom;if(o>r&&o>t){const n=(0,y.clamp)(o,0,r),l=(0,y.clamp)(o,0,t);o=Math.max(n,l),a=n>l?e.top-n:e.bottom}else o>t&&(a=e.top-o);return{x:e.left,y:a,overrideWidth:e.width,overrideHeight:o}},closeOnClickOutside:!1,isOpened:E,tabIndex:-1,reference:a},B.map((e=>o.createElement(x.PopupMenuItem,{key:e,label:e,isActive:e===b,isHovered:e===C,reference:e===C?O:void 0,onClick:V,onClickArg:e})))));function k(n){const r=I(n),o=F(r)?r:Y(r);m(o),t||(t=!0,e.onChange(o))}function O(e){i.current=e}function V(e){k((0,s.ensureDefined)(e)),(0,s.ensureNotNull)(a.current).blur()}function P(e){return c&&(null!==A(document.activeElement)||null!==A(e.relatedTarget))}function A(e){return e instanceof Node&&R().find((t=>null!==t&&t.contains(e)))||null}function R(){return[a.current,r.current]}function z(e="auto"){if(null!==i.current){const t=(0,s.ensureNotNull)(a.current).getBoundingClientRect(),n=i.current.getBoundingClientRect();(t.top>n.top||t.bottom<n.bottom)&&i.current.scrollIntoView({behavior:e})}}function L(){const e=r.current;if(null!==e){const t=e.value||"";e.setSelectionRange(0,t.length)}}}function I(e){const[t="",n=""]=e.split(":"),[r,o]=[B(t),$(n)];return`${r}:${o}`}function F(e){return/^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g.test(e)}function Y(e){const[t,n]=e.split(":"),[r,o]=[(0,y.clamp)(parseInt(t),0,23),(0,y.clamp)(parseInt(n),0,59)],[a,l]=[B(r.toString()),$(o.toString())];return`${a}:${l}`}function B(e){return e.slice(0,2).padStart(2,"0")}function $(e){return e.slice(0,2).padEnd(2,"0")}const k=r.CheckMobile.any()?function(e){const{onChange:t,onFocus:n,value:r,className:a,...d}=e,p=(0,o.useRef)(null),[m,v]=(0,h.useFocus)(),y=(0,i.createSafeMulticastEventHandler)(v.onBlur,(function(){p.current&&r&&(p.current.defaultValue=r)}));return(0,o.useLayoutEffect)((()=>{p.current&&r&&(p.current.defaultValue=r)}),[]),(0,o.useLayoutEffect)((()=>{
p.current&&r&&(p.current.value=r)}),[r]),o.createElement("div",{className:l()(g.wrap,a)},o.createElement(c.InputControl,{...d,type:"text",endSlot:o.createElement(u.EndSlot,{icon:!0},o.createElement(f,null)),value:r,highlight:m,intent:m?"primary":void 0,onFocus:function(e){(0,s.ensureNotNull)(p.current).focus(),n&&n(e)},onChange:function(){}}),o.createElement("input",{...v,disabled:e.disabled,className:g.input,type:"time",onBlur:y,onChange:function(e){const{value:n}=e.currentTarget;t&&n&&t(n)},ref:p}))}:_},727698:e=>{e.exports={input:"input-ZOx_CVY3",symbol:"symbol-ZOx_CVY3",checkbox:"checkbox-ZOx_CVY3",label:"label-ZOx_CVY3",dropdownMenu:"dropdownMenu-ZOx_CVY3",sessionStart:"sessionStart-ZOx_CVY3",sessionEnd:"sessionEnd-ZOx_CVY3",sessionInputContainer:"sessionInputContainer-ZOx_CVY3",sessionDash:"sessionDash-ZOx_CVY3",inputGroup:"inputGroup-ZOx_CVY3",textarea:"textarea-ZOx_CVY3",inlineGroup:"inlineGroup-ZOx_CVY3",hasTooltip:"hasTooltip-ZOx_CVY3"}},924712:e=>{e.exports={content:"content-tBgV1m0B",cell:"cell-tBgV1m0B",inner:"inner-tBgV1m0B",first:"first-tBgV1m0B",inlineCell:"inlineCell-tBgV1m0B",fill:"fill-tBgV1m0B",top:"top-tBgV1m0B",topCenter:"topCenter-tBgV1m0B",offset:"offset-tBgV1m0B",inlineRow:"inlineRow-tBgV1m0B",grouped:"grouped-tBgV1m0B",separator:"separator-tBgV1m0B",groupSeparator:"groupSeparator-tBgV1m0B",big:"big-tBgV1m0B",adaptive:"adaptive-tBgV1m0B",checkableTitle:"checkableTitle-tBgV1m0B"}},520642:(e,t,n)=>{"use strict";n.d(t,{bind:()=>l,setter:()=>s});var r=n(50959),o=n(212050),a=n(495450);function l(e){var t;return t=class extends r.PureComponent{constructor(){super(...arguments),this._onChange=(e,t,n)=>{const{setValue:r}=this.context,{onChange:o}=this.props;s(r,o)(e,t,n)}}render(){const{input:t}=this.props,{values:n,model:o}=this.context;return r.createElement(e,{...this.props,value:n[t.id],tzName:(0,a.getTimezoneName)(o),onChange:this._onChange})}},t.contextType=o.PropertyContext,t}function s(e,t){return(n,r,o)=>{e(r,n,o),t&&t(n,r,o)}}},212050:(e,t,n)=>{"use strict";n.d(t,{PropertyContainer:()=>c,PropertyContext:()=>u});var r=n(50959),o=n(650151),a=n(444372),l=n(809796);const s=(0,n(201089).getLogger)("Platform.GUI.StudyInputPropertyContainer"),i=new l.TranslatedString("change {propertyName} property",a.t(null,void 0,n(18567))),u=r.createContext(null);class c extends r.PureComponent{constructor(e){super(e),this._setValue=(e,t,r)=>{const{property:u,model:c}=this.props,d=(0,o.ensureDefined)(u.child(e));s.logNormal(`Changing property "${e}" value from "${u.value()}" to "${t}"`);const p=new l.TranslatedString(r,function(e){return a.t(e,{context:"input"},n(788601))}(r));c.setProperty(d,t,i.format({propertyName:p}))};const{property:t}=e,r={};t.childNames().forEach((e=>{const n=(0,o.ensureDefined)(t.child(e));r.hasOwnProperty(e)||(r[e]=n.value())})),this.state=r}componentDidMount(){const{property:e,onStudyInputChange:t}=this.props;e.childNames().forEach((n=>{(0,o.ensureDefined)(e.child(n)).subscribe(this,(e=>{const r=e.value();s.logNormal(`Property "${n}" updated to value "${r}"`),this.setState({[n]:r}),
null==t||t(r,n)}))}))}componentWillUnmount(){const{property:e}=this.props;e.childNames().forEach((t=>{(0,o.ensureDefined)(e.child(t)).unsubscribeAll(this)}))}render(){const{study:e,model:t,children:n}=this.props,o={study:e,model:t,values:this.state,setValue:this._setValue};return r.createElement(u.Provider,{value:o},n)}}},227695:(e,t,n)=>{"use strict";n.d(t,{getInputGroups:()=>l,isGroup:()=>o,isInputInlines:()=>a});var r=n(650151);function o(e){return e.hasOwnProperty("groupType")}function a(e){return o(e)&&"inline"===e.groupType}function l(e){const t=[],n=new Map,o=new Map;return o.set(void 0,new Map),e.forEach((e=>{const{group:a,inline:l}=e;if(void 0!==a||void 0!==l)if(void 0!==a)if(void 0!==l)if(n.has(a)){const t=(0,r.ensureDefined)(n.get(a));let i;o.has(t)?i=(0,r.ensureDefined)(o.get(t)):(i=new Map,o.set(t,i)),s(e,"inline",l,i,t.children)}else{const r={id:l,groupType:"inline",children:[e]},s={id:a,groupType:"group",children:[r]},i=new Map;i.set(l,r),o.set(s,i),n.set(a,s),t.push(s)}else s(e,"group",a,n,t);else{const n=(0,r.ensureDefined)(o.get(void 0));s(e,"inline",(0,r.ensureDefined)(l),n,t)}else t.push(e)})),t}function s(e,t,n,o,a){if(o.has(n))(0,r.ensureDefined)(o.get(n)).children.push(e);else{const r={id:n,groupType:t,children:[e]};o.set(n,r),a.push(r)}}},643470:(e,t,n)=>{"use strict";n.d(t,{InputGroup:()=>s});var r=n(50959),o=n(497754),a=n(253059),l=n(727698);function s(e){const{className:t}=e,n=(0,r.useContext)(a.PropertyTable.InlineRowContext);return r.createElement("div",{className:o(l.inputGroup,n&&l.inlineGroup,t)},e.children)}},841262:(e,t,n)=>{"use strict";n.d(t,{SessionInput:()=>m,parseValue:()=>d});var r=n(50959),o=n(497754),a=n.n(o),l=n(650151),s=n(520642),i=n(643470),u=n(170140),c=n(727698);function d(e=""){const[,t="",n="",r="",o=""]=Array.from(e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/)||[]);return[`${t}:${n}`,`${r}:${o}`]}class p extends r.PureComponent{constructor(e){super(e),this._onStartPick=e=>{this.setState({startTime:e},this._onChange)},this._onEndPick=e=>{this.setState({endTime:e},this._onChange)},this._onChange=()=>{const{input:{id:e,name:t},onChange:n}=this.props,{startTime:r,endTime:o}=this.state;n(r.replace(":","")+"-"+o.replace(":",""),e,t)};const t=e.value||e.input.defval,[n,r]=d(t);this.state={prevValue:t,startTime:n,endTime:r}}render(){const{startTime:e,endTime:t}=this.state,{hasTooltip:n,disabled:o}=this.props;return r.createElement(i.InputGroup,{className:a()(n&&c.hasTooltip)},r.createElement("div",{className:c.sessionStart},r.createElement(u.TimeInput,{className:a()(c.input,c.sessionInputContainer),name:"start",value:(0,l.ensureDefined)(e),onChange:this._onStartPick,disabled:o}),r.createElement("span",{className:c.sessionDash}," — ")),r.createElement("div",{className:c.sessionEnd},r.createElement(u.TimeInput,{className:a()(c.input,c.sessionInputContainer),name:"end",value:(0,l.ensureDefined)(t),onChange:this._onEndPick,disabled:o})))}static getDerivedStateFromProps(e,t){if(e.value===t.prevValue)return t;const[n,r]=d(e.value);return{prevValue:e.value,startTime:n,endTime:r}}}
const m=(0,s.bind)(p)},413744:(e,t,n)=>{"use strict";n.d(t,{SymbolInput:()=>d,getInternalSymbolName:()=>u});var r=n(50959),o=n(650151),a=n(212050),l=n(520642),s=n(52498),i=n(364979);function u(e,t){const n=(0,s.createAdapter)(t).resolvedSymbolInfoBySymbol(e);return n&&(n.ticker||n.full_name)?n.ticker||n.full_name:e}function c(e,t){return u(e,t)}const d=(0,l.bind)((function(e){const t=(0,r.useContext)(a.PropertyContext),{study:n}=(0,o.ensureNotNull)(t),{input:{defval:l},value:s}=e;return r.createElement(i.SymbolInputsButton,{...e,value:c(s||l||"",n),study:n})}))},253059:(e,t,n)=>{"use strict";n.d(t,{PropertyTable:()=>i});var r=n(50959),o=n(497754),a=n(8626),l=n(924712);const s=r.createContext(!1);class i extends r.PureComponent{render(){return r.createElement("div",{ref:this.props.reference,className:o(l.content,this.props.className)},this.props.children)}}i.InlineRowContext=s,i.Row=function(e){const{children:t}=e;return(0,r.useContext)(s)?r.createElement("span",{className:l.inlineRow},t):r.createElement(r.Fragment,null,t)},i.Cell=function(e){const t=(0,r.useContext)(s),n=o(l.cell,e.offset&&l.offset,e.grouped&&l.grouped,t&&l.inlineCell,"top"===e.verticalAlign&&l.top,"topCenter"===e.verticalAlign&&l.topCenter,"adaptive"===e.verticalAlign&&l.adaptive,e.checkableTitle&&l.checkableTitle,2===e.colSpan&&l.fill,"first"===e.placement&&2!==e.colSpan&&l.first,"last"===e.placement&&2!==e.colSpan&&l.last),i=(0,a.filterDataProps)(e);return r.createElement("div",{...i,className:n},r.createElement("div",{className:o(l.inner,e.className)},e.children))},i.Separator=function(e){return r.createElement(i.Row,null,r.createElement("div",{className:o(l.cell,l.separator,l.fill)}))},i.GroupSeparator=function(e){const t=e.size||0;return r.createElement(i.Row,null,r.createElement("div",{className:o(l.cell,l.groupSeparator,l.fill,1===t&&l.big)}))}},972680:(e,t,n)=>{"use strict";n.d(t,{getSymbolSearchCompleteOverrideFunction:()=>o});let r=(e,t)=>Promise.resolve({symbol:e,name:e});function o(){return r}},610600:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M13.5 7l1.65-1.65a.5.5 0 0 0 0-.7l-1.8-1.8a.5.5 0 0 0-.7 0L11 4.5M13.5 7L11 4.5M13.5 7l-8.35 8.35a.5.5 0 0 1-.36.15H2.5v-2.3a.5.5 0 0 1 .15-.35L11 4.5"/></svg>'},598475:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5C6.67 7 6 7.67 6 8.5v11c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>'},595096:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="currentColor" d="M1 8.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zM8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM9 9V3H8v5H5v1h4z"/></svg>'}}]);