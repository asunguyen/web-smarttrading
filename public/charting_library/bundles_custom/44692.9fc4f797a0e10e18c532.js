"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[44692],{377953:(t,e,s)=>{s.d(e,{setCollapsedSeparators:()=>i});var o=s(120780),l=s(421907),n=s(77117);async function i(t){const{list:{id:e,type:s,symbols:i},separators:r,value:a,signal:c}=t;if(1===r.length){const[t]=r,o=(0,n.separatorRemoteRepresentation)(t,!a),i=(0,n.separatorRemoteRepresentation)(t,a);return(0,l.commonRenameSeparator)(e,s,o,i)}const u=new Set(r),m=(0,n.remoteSymbolsFormLocalState)(e,i).map(((t,e)=>{const s=i[e];return u.has(s)?(0,n.separatorRemoteRepresentation)(s,a):t})),d=await(0,o.fetch)(`/api/v1/symbols_list/${s}/${e}/replace/?unsafe=true`,{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json"},signal:c});if(!d.ok){const{detail:t}=await d.json();throw Error(t)}}},244692:(t,e,s)=>{s.r(e),s.d(e,{addSymbolsThunk:()=>N,addSymbolsToCustomListThunk:()=>j,changeDescriptionThunk:()=>z,clearSymbolListThunk:()=>V,findInWatchlistThunk:()=>F,insertSymbolBeforeThunk:()=>$,markSymbolsThunk:()=>A,moveSymbolsToCustomListThunk:()=>U,openSectionBySymbolThunk:()=>K,removeSelectedSymbolsThunk:()=>E,removeSymbolsThunk:()=>x,renameSymbolListThunk:()=>G,reorderSymbolsThunk:()=>B,saveListAsThunk:()=>q,selectSymbolListThunk:()=>J,sortSymbolsThunk:()=>_,updateScrollToIdThunk:()=>Y,userCreateWatchlistThunk:()=>P});var o=s(650151),l=s(776324),n=s(296890),i=s(125226),r=s(546079),a=s(387506),c=s(651067),u=s(452528),m=s(822714),d=s(440498),y=s(795394),b=s(377953),h=s(934011),S=s(444372),f=s(345848),g=s(850935),p=s(15814),T=s(837657),L=s(456746),I=s(826939),k=s(38506),v=s(266325),W=s(494966),C=s(779923),D=s(436779),w=s(77122);function B(t,e){return(s,o)=>{const l=o(),{isMovable:n}=(0,p.widgetOptionsSelector)(l,t);if(!n)return;const r=(0,p.getCurrentViewableListByWidgetId)(l,t);if(null===r)return;if("hot"===r.type)return;const c=(0,i.isFeatureEnabled)("watchlist_collapsible_sections")?(0,u.displaySymbolsToActualSelector)(l,t,e):e;if("custom"===r.type){const t={...r,symbols:c};s((0,k.replaceWatchlistSymbolsThunk)(null,t,c))}else(0,a.getMarkedSymbolsListServiceInstance)().markMany({color:r.color,symbols:c,separators:!0})}}function _(t,e,s){return(n,i)=>{const r=i(),c=(0,p.getCurrentViewableListByWidgetId)(r,t);if(null===c)return;if("hot"===c.type)return;const{symbolsBeforeSorting:u}=(0,p.widgetSelector)(r,t),m=(0,p.sortingSelector)(r,t),d=c.symbols;let y;if(null===e)y=(0,o.ensureNotNull)(u);else{const{column:o,direction:l}=e;y=(0,L.sortSymbols)(t,d,o,l,s)}"custom"===c.type?(n((0,l.exact)({id:c.id,symbols:y})),n((0,k.replaceWatchlistSymbolsThunk)(null,c,y))):(0,a.getMarkedSymbolsListServiceInstance)().markMany({color:c.color,symbols:y,separators:!0}),n((0,g.updateWidget)(t,{symbolsBeforeSorting:null===m?[...d]:u,sortingListId:c.id,sorting:e}))}}function E(t){return(e,o)=>{const l=o(),i=(0,p.getCurrentViewableListByWidgetId)(l,t);if(null===i)return;if("hot"===i.type)return;const{isDeletable:r}=(0,p.widgetOptionsSelector)(l,t);if(!r)return;const a=(0,p.selectedSymbolsSelector)(l,t);if(0===a.length)return
;const c=a[a.length-1],u=i.symbols[i.symbols.length-1],m=i.symbols.some((t=>t===c)),y=()=>{if(e(m&&c!==u?(0,g.selectNextAvailableSymbol)(t,c,"next",!0):(0,g.updateWidget)(t,{selectedSymbols:[]})),"custom"===i.type)e(M(a,i));else{{const t=(0,n.remove)({symbols:a,color:i.color});e(t)}}if((0,L.trackRemoveEvent)(a.length>1),!(0,d.isDeletedSymbolsList)(i.id)){const t=(0,p.getCustomListById)(l,d.DELETED_SYMBOLS_LIST_ID),o=a.filter((t=>!(0,T.isSeparatorItem)(t)));e(t?(0,k.addWatchlistSymbolsThunk)(null,t,o):(0,k.createWatchlistThunk)({id:d.DELETED_SYMBOLS_LIST_ID,name:S.t(null,void 0,s(97458)),type:"custom",shared:!1,symbols:o}))}};if(1===a.length)return void y();const b=document.activeElement;(0,C.showConfirm)({text:(0,L.createConfirmRemoveText)(a.length),onConfirm:({dialogClose:t})=>{y(),t()},onClose:()=>{null==b||b.focus()}})}}function M(t,e){return(s,o)=>{if("colored"!==e.type)if("custom"!==e.type);else{const o={...e,symbols:e.symbols.filter((e=>!t.includes(e)))};s((0,k.removeWatchlistSymbolsThunk)(null,o,t))}else{(0,a.getMarkedSymbolsListServiceInstance)().setSymbolsColor(t,null)}}}function A(t,e,s,o){return(l,n)=>{const i=(0,p.selectedSymbolsSelector)(n(),t).filter((t=>!(0,T.isSeparatorItem)(t)));i.length>1&&(!e||i.includes(e))||o?((0,a.getMarkedSymbolsListServiceInstance)().adjustSymbolsColors(i),i.length>1?(0,f.trackEvent)("Watchlist","Multi select","Flag"):(0,f.trackEvent)("Watchlist","Flag")):s&&(s(),(0,f.trackEvent)("Watchlist","Flag"))}}function x(t,e,s,o){return(l,i)=>{const r=i(),a=s?(0,n.isListColor)(s)?(0,c.getMarkedListByColor)(r,s):(0,p.getCustomListById)(r,s):(0,p.getCurrentViewableListByWidgetId)(r,t);if(null===a)return;if("hot"===a.type)return;const u=new Set((0,p.selectedSymbolsSelector)(r,t)),m=u.has(e)&&!o?Array.from(u):[e],d=()=>{if("custom"===a.type)l((0,k.removeWatchlistSymbolsThunk)(null,a,m));else{{const t=(0,n.remove)({symbols:m,color:a.color});l(t)}}(0,L.trackRemoveEvent)(m.length>1),l(H(a.id,m))};if(1===m.length||Boolean(s))return void d();const y=document.activeElement;(0,C.showConfirm)({text:(0,L.createConfirmRemoveText)(m.length),onConfirm:({dialogClose:t})=>{d(),t()},onClose:()=>{null==y||y.focus()}})}}function N(t,e,s){return(o,l)=>{const n=l(),i=(0,p.getCurrentViewableListByWidgetId)(n,t);if(null===i)return;if("hot"===i.type)return;(0,y.resolveSymbolNameForAll)(e).then((e=>{var l,r;let u;if("custom"===i.type)o(O(e,i,s));else{const t=null!==(l=(0,c.getListSymbolsByColor)(n,i.color))&&void 0!==l?l:[],o=s?t.indexOf(s):-1,r=e.filter((t=>(0,a.getMarkedSymbolsListServiceInstance)().getSymbolColor(t)!==i.color));if(r.length){u=r[r.length-1];const e=-1!==o&&o!==t.length-1?t[o+1]:void 0;(0,a.getMarkedSymbolsListServiceInstance)().markMany({symbols:r,color:i.color,separators:!0,before:e})}}u||(u=null!==(r=e[e.length-1])&&void 0!==r?r:null),o(R(t,e,u))}))}}function R(t,e,s,o){return(l,n)=>{e=e.slice(0,10),(0,D.expandWatchlist)(),(t!==I.WATCHLIST_WIDGET_ID||n().widgets[I.WATCHLIST_WIDGET_ID])&&(s&&o&&l(K(s,t)),l((0,g.updateWidget)(t,{highlightedSymbols:[...e],scrollToId:s?{id:s}:null})),
setTimeout((()=>l((0,g.updateWidget)(t,{highlightedSymbols:null}))),500))}}function O(t,e,s,o){return(l,n)=>{const i=new Set(e.symbols),r=t.filter((t=>!i.has(t)&&!i.has((0,W.safeShortName)(t))));if(r.length){const t=[...e.symbols],n=s?e.symbols.indexOf(s):-1;-1===n?t.push(...r):t.splice(n+1,0,...r);const i={...e,symbols:t};l(-1===n?(0,k.addWatchlistSymbolsThunk)(null,i,r,o):(0,k.replaceWatchlistSymbolsThunk)(null,i,t,o))}}}function G(t,e){return(s,l)=>{const i=l();if((0,n.isListColor)(t)){if(null===(0,r.getMarkedListsState)(i))return;s((0,n.rename)({color:t,name:e}))}else{const l=(0,o.ensureNotNull)((0,p.getCustomListById)(i,t));s((0,k.renameWatchlistThunk)(null,l,e))}}}function V(t){return(e,s)=>{const o=s(),l=(0,n.isListColor)(t)?(0,c.getMarkedListByColor)(o,t):(0,p.getCustomListById)(o,t);if(null!==l&&0!==l.symbols.length){if("colored"===l.type){e((0,n.remove)({color:l.color,symbols:l.symbols}))}else e((0,k.replaceWatchlistSymbolsThunk)(null,{...l,symbols:[]},[]));e(H(t,l.symbols))}}}function H(t,e){return(o,l)=>{const n=l();if(!(0,d.isDeletedSymbolsList)(t)){const t=(0,p.getCustomListById)(n,d.DELETED_SYMBOLS_LIST_ID),l=e.filter((t=>!(0,T.isSeparatorItem)(t)));o(t?(0,k.addWatchlistSymbolsThunk)(null,t,l):(0,k.createWatchlistThunk)({id:d.DELETED_SYMBOLS_LIST_ID,name:S.t(null,void 0,s(97458)),type:"custom",shared:!1,symbols:l}))}}}function F(t,e){return R(t,[e],e,!0)}function Y(t,e){return(s,o)=>{const l=o(),n=(0,p.getCurrentViewableListByWidgetId)(l,t);if(!n)return;const{symbols:i}=n;i.includes(e)&&s((0,g.updateWidget)(t,{scrollToId:{id:e}}))}}function j(t,e,s,o,l=!0){return(n,i)=>{var r;const a=i(),c=(0,p.getCustomListById)(a,e);if(c){const i=s.filter((t=>!(0,T.isSeparatorItem)(t)));if(n(O(i,c,void 0,o)),(0,p.getGlobalActiveID)(a)===e&&l){const e=null!==(r=i[i.length-1])&&void 0!==r?r:null;n(R(t,i,e))}}}}function U(t,e,s){return async(o,l)=>{const n=l(),i=(0,p.getCustomListById)(n,e),r=s.filter((t=>!(0,T.isSeparatorItem)(t)));i&&o(O(r,i));const a=(0,p.getCustomListById)(n,t);a&&o((0,k.removeWatchlistSymbolsThunk)(null,a,s))}}function $(t,e,s){return(o,l)=>{const n=l(),i=(0,p.getCurrentViewableListByWidgetId)(n,t);if(null===i)return;if("hot"===i.type)return;const{symbols:r}=i;if(!r.includes(s))if("custom"===i.type){const t=r.indexOf(e),l=[...r.slice(0,t),s,...r.slice(t)],n={...i,symbols:l};o((0,k.replaceWatchlistSymbolsThunk)(null,n,l))}else"colored"===i.type&&(0,a.getMarkedSymbolsListServiceInstance)().markMany({color:i.color,before:e,symbols:[s],separators:!0})}}const J=(0,v.respectLatest)((function(t,e){return async(s,i)=>{try{const r=(0,n.isListColor)(e)?(0,o.ensureNotNull)((0,c.getMarkedListByColor)(i(),e)):(0,o.ensureNotNull)((0,p.getCustomListById)(i(),e));if(s((0,k.setActiveWatchlistThunk)(null,"custom"===r.type?r.id:r.color)),!i().widgets[I.WATCHLIST_WIDGET_ID])return void(0,D.expandWatchlist)();s((0,g.updateWidget)(I.WATCHLIST_WIDGET_ID,{isLoading:!1,listId:r.id,sorting:null,symbolsBeforeSorting:null,sortingListId:null,selectedSymbols:[],scrollToId:null})),"custom"===r.type&&await s(function(t,e){
return async(s,n)=>{{const n=(0,L.hasDuplicates)(e.symbols);n&&s((0,g.updateWidget)(I.WATCHLIST_WIDGET_ID,{isLoading:!0}));const i=await(0,v.respectAbort)(t,(0,k.validateWatchListSymbols)((0,o.ensureDefined)(e.symbols)));i.length!==e.symbols.length&&(e={...e,symbols:i}),s((0,l.exact)({id:e.id,symbols:e.symbols})),s((0,g.updateWidget)(I.WATCHLIST_WIDGET_ID,{listId:e.id,selectedSymbols:[]})),n&&s((0,g.updateWidget)(I.WATCHLIST_WIDGET_ID,{isLoading:!1}))}}}(t,r)),(0,D.expandWatchlist)()}catch(t){(0,v.skipAbortError)(t)}}}));const P=(0,v.respectLatest)((function(t,e,l,i){return async(r,a)=>{try{if(!(0,L.canUseMultipleLists)())return;if(!e||void 0===e.name){const o=await(0,v.respectAbort)(t,(0,L.createSaveRenameDialog)(S.t(null,void 0,s(279984)),void 0,i)());e={name:o,symbols:(null==e?void 0:e.symbols)||[]}}e.symbols=[...await(0,k.validateWatchListSymbols)((0,o.ensureDefined)(e.symbols))];const u=(0,k.createWatchlistThunk)(e),m=await(0,v.respectAbort)(t,r(u));if(null===m)return;if(r(J(null,m)),l){const t=(0,n.isListColor)(l)?(0,c.getMarkedListByColor)(a(),l):(0,p.getCustomListById)(a(),l);if(!t)return;await r(M((0,o.ensureDefined)(e.symbols),(0,o.ensureDefined)(t)))}}catch(t){(0,v.skipAbortError)(t)}}}));function q(t,e,l=!0,n){return async(t,i)=>{if(!(0,L.canUseMultipleLists)())return;const r=await(0,L.createSaveRenameDialog)(S.t(null,void 0,s(799217)),n)();if(!e){const t=(0,o.ensureNotNull)((0,p.getCurrentViewableListByWidgetId)(i(),I.WATCHLIST_WIDGET_ID));e=t.symbols}const a=(0,k.createWatchlistThunk)({name:r,symbols:e}),c=await t(a);null!==c&&l&&t(J(null,c))}}function z(t,e){return async(s,o)=>{(0,n.isListColor)(t)?s((0,n.changeDescription)({color:t,description:e})):(s((0,l.changeDescription)({id:t,description:e})),await(0,m.changeDescription)(t,e))}}function K(t,e){return async(o,l)=>{if(w.enabled("widget")||!(0,i.isFeatureEnabled)("watchlist_collapsible_sections"))return;const n=(0,p.getCurrentViewableWatchListByWidgetId)(l(),e);if(!n)return;let r="";for(let e=0;e<n.symbols.length;e++){const s=n.symbols[e];if((0,T.isSeparatorItem)(s)&&(r=s),s===t)break}if(r&&(0,u.separatorIsCollapsedSelector)(l(),e,r)){if(o((0,h.setSeparatorsCollapse)({listId:n.id,values:{[r]:!1}})),!window.is_authenticated)return;await(0,b.setCollapsedSeparators)({list:n,separators:[r],value:!1}).catch(v.skipAbortError).catch((t=>{(0,C.showWarning)({title:S.t(null,void 0,s(482751)),text:t.message}),o((0,h.setSeparatorsCollapse)({listId:n.id,values:{separator:!0}}))}))}}}}}]);