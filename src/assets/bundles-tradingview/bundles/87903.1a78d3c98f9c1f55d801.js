(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[87903],{345350:e=>{e.exports={"nav-button":"nav-button-znwuaSC1",link:"link-znwuaSC1",background:"background-znwuaSC1",icon:"icon-znwuaSC1","flip-icon":"flip-icon-znwuaSC1","size-large":"size-large-znwuaSC1","preserve-paddings":"preserve-paddings-znwuaSC1","size-medium":"size-medium-znwuaSC1","size-small":"size-small-znwuaSC1","size-xsmall":"size-xsmall-znwuaSC1","size-xxsmall":"size-xxsmall-znwuaSC1","visually-hidden":"visually-hidden-znwuaSC1"}},645300:e=>{e.exports={}},540191:e=>{e.exports={menuWrap:"menuWrap-Kq3ruQo8",isMeasuring:"isMeasuring-Kq3ruQo8",scrollWrap:"scrollWrap-Kq3ruQo8",momentumBased:"momentumBased-Kq3ruQo8",menuBox:"menuBox-Kq3ruQo8",isHidden:"isHidden-Kq3ruQo8"}},789768:(e,t,n)=>{"use strict";n.d(t,{BackButton:()=>v});var r=n(50959),o=n(897782),s=n(295694),i=n(249498),l=n(560176),a=n(935369),u=n(758478),c=n(773063),d=n(914127),h=n(218073),p=n(124097),m=n(142576);function f(e="large",t="1.2"){switch(e){case"large":return"1.2"===t?s:c;case"medium":return"1.2"===t?i:d;case"small":return"1.2"===t?l:h;case"xsmall":return"1.2"===t?a:p;case"xxsmall":return"1.2"===t?u:m;default:return i}}const v=r.forwardRef(((e,t)=>{const{"aria-label":n,flipIconOnRtl:s,...i}=e;return r.createElement(o.NavButton,{...i,"aria-label":n,ref:t,icon:f(e.size,e.iconStrokeWidth),flipIconOnRtl:s})}))},4908:(e,t,n)=>{"use strict";n.d(t,{CloseButton:()=>d});var r=n(50959),o=n(897782),s=n(117105),i=n(315130),l=n(238822),a=n(663346),u=n(534983);function c(e="large"){switch(e){case"large":return s;case"medium":default:return i;case"small":return l;case"xsmall":return a;case"xxsmall":return u}}const d=r.forwardRef(((e,t)=>r.createElement(o.NavButton,{...e,ref:t,icon:c(e.size)})))},897782:(e,t,n)=>{"use strict";n.d(t,{NavButton:()=>u});var r=n(50959),o=n(497754),s=n(83436),i=n(345350);function l(e){const{size:t="large",preservePaddings:n,isLink:r,flipIconOnRtl:s,className:l}=e;return o(i["nav-button"],i[`size-${t}`],n&&i["preserve-paddings"],s&&i["flip-icon"],r&&i.link,l)}function a(e){const{children:t,icon:n}=e;return r.createElement(r.Fragment,null,r.createElement("span",{className:i.background}),r.createElement(s.Icon,{icon:n,className:i.icon,"aria-hidden":!0}),t&&r.createElement("span",{className:i["visually-hidden"]},t))}const u=(0,r.forwardRef)(((e,t)=>{const{icon:n,type:o="button",preservePaddings:s,flipIconOnRtl:i,size:u,"aria-label":c,...d}=e;return r.createElement("button",{...d,className:l({...e,children:c}),ref:t,type:o},r.createElement(a,{icon:n},c))}));u.displayName="NavButton";var c=n(14388),d=n(551080);(0,r.forwardRef)(((e,t)=>{const{icon:n,renderComponent:o,"aria-label":s,...i}=e,u=null!=o?o:c.CustomComponentDefaultLink;return r.createElement(u,{...i,className:l({...e,children:s,isLink:!0}),reference:(0,d.isomorphicRef)(t)},r.createElement(a,{icon:n},s))})).displayName="NavAnchorButton"},834995:(e,t,n)=>{"use strict";function r(e){const{reference:t,...n}=e;return{...n,ref:t}}n.d(t,{renameRef:()=>r})},14388:(e,t,n)=>{"use strict";n.d(t,{
CustomComponentDefaultLink:()=>s});var r=n(50959),o=n(834995);function s(e){return r.createElement("a",{...(0,o.renameRef)(e)})}r.PureComponent},283657:(e,t,n)=>{"use strict";n.d(t,{useComposedKeyboardActionHandlers:()=>l,useKeyboardActionHandler:()=>i,useKeyboardClose:()=>c,useKeyboardEventHandler:()=>a,useKeyboardOpen:()=>d,useKeyboardToggle:()=>u});var r=n(50959),o=n(591800);const s=()=>!0;function i(e,t,n=s,o){return(0,r.useCallback)((r=>{if(o){if("horizontal"===o&&(40===r||38===r))return;if("vertical"===o&&(37===r||39===r))return}const s=e.map((e=>"function"==typeof e?e():e));return!(!n(r)||!s.includes(r))&&(t(r),!0)}),[...e,t,n])}function l(...e){return(0,r.useCallback)((t=>{for(const n of e)if(n(t))return!0;return!1}),[...e])}function a(e,t=!0){const n=l(...e);return(0,r.useCallback)((e=>{n((0,o.hashFromEvent)(e))&&t&&e.preventDefault()}),[n])}function u(e,t=!0){return i([13,32],e,(function(e){if(13===e)return t;return!0}))}function c(e,t){return i([9,(0,r.useCallback)((()=>o.Modifiers.Shift+9),[]),27],t,(0,r.useCallback)((()=>e),[e]))}function d(e,t){return i([40,38],t,(0,r.useCallback)((()=>!e),[e]))}},774218:(e,t,n)=>{"use strict";n.d(t,{useIsomorphicLayoutEffect:()=>o});var r=n(50959);function o(e,t){("undefined"==typeof window?r.useEffect:r.useLayoutEffect)(e,t)}},507017:(e,t,n)=>{"use strict";n.d(t,{useItemsKeyboardNavigation:()=>i});var r=n(50959),o=n(283657);function s(e,t){return e>=0?e%t:(t-Math.abs(e)%t)%t}function i(e,t,n,i,l,a,u={},c){const d=(0,r.useCallback)((e=>{const t=n.findIndex(i);if(t===n.length-1&&!a)return void((null==c?void 0:c.onFailNext)&&c.onFailNext(e));const r=s(t+1,n.length);l&&l(n[r],"next")}),[n,i,l,a]),h=(0,r.useCallback)((e=>{const t=n.findIndex(i);if(0===t&&!a)return void((null==c?void 0:c.onFailPrev)&&c.onFailPrev(e));const r=s(t-1,n.length);l&&l(n[r],"previous")}),[n,i,l,a]),p=(0,r.useCallback)((()=>{l&&l(n[0],"first")}),[l,n]),m=(0,r.useCallback)((()=>{l&&l(n[n.length-1],"last")}),[l,n]),f=(0,r.useMemo)((()=>(e=>({next:[40,()=>e()?37:39],previous:[38,()=>e()?39:37],first:[33,()=>e()?35:36],last:[34,()=>e()?36:35]}))(t)),[t]),{next:v=f.next,previous:g=f.previous,first:w=f.first,last:x=f.last}=u;return(0,o.useComposedKeyboardActionHandlers)((0,o.useKeyboardActionHandler)(v,d,(()=>!0),e),(0,o.useKeyboardActionHandler)(g,h,(()=>!0),e),(0,o.useKeyboardActionHandler)(w,p,(()=>!0),e),(0,o.useKeyboardActionHandler)(x,m,(()=>!0),e))}},940194:(e,t,n)=>{"use strict";function r(e,t,n,r,o){function s(o){if(e>o.timeStamp)return;const s=o.target;void 0!==n&&null!==t&&null!==s&&s.ownerDocument===r&&(t.contains(s)||n(o))}return o.click&&r.addEventListener("click",s,!1),o.mouseDown&&r.addEventListener("mousedown",s,!1),o.touchEnd&&r.addEventListener("touchend",s,!1),o.touchStart&&r.addEventListener("touchstart",s,!1),()=>{r.removeEventListener("click",s,!1),r.removeEventListener("mousedown",s,!1),r.removeEventListener("touchend",s,!1),r.removeEventListener("touchstart",s,!1)}}n.d(t,{addOutsideEventListener:()=>r})},385806:(e,t,n)=>{"use strict";n.d(t,{useOutsideEvent:()=>s})
;var r=n(50959),o=n(940194);function s(e){const{click:t,mouseDown:n,touchEnd:s,touchStart:i,handler:l,reference:a,ownerDocument:u=document}=e,c=(0,r.useRef)(null),d=(0,r.useRef)(new CustomEvent("timestamp").timeStamp);return(0,r.useLayoutEffect)((()=>{const e={click:t,mouseDown:n,touchEnd:s,touchStart:i},r=a?a.current:c.current;return(0,o.addOutsideEventListener)(d.current,r,l,u,e)}),[t,n,s,i,l]),a||c}},600586:(e,t,n)=>{"use strict";n.d(t,{MenuWidthContext:()=>r});const r=n(50959).createContext({setMenuMaxWidth:!1})},906481:(e,t,n)=>{"use strict";n.d(t,{SubmenuContext:()=>o,SubmenuHandler:()=>s});var r=n(50959);const o=r.createContext(null);function s(e){const[t,n]=(0,r.useState)(null),s=(0,r.useRef)(null),i=(0,r.useRef)(new Map);return(0,r.useEffect)((()=>()=>{null!==s.current&&clearTimeout(s.current)}),[]),r.createElement(o.Provider,{value:{current:t,setCurrent:function(e){null!==s.current&&(clearTimeout(s.current),s.current=null);null===t?n(e):s.current=setTimeout((()=>{s.current=null,n(e)}),100)},registerSubmenu:function(e,t){return i.current.set(e,t),()=>{i.current.delete(e)}},isSubmenuNode:function(e){return Array.from(i.current.values()).some((t=>t(e)))}}},e.children)}},692822:(e,t,n)=>{"use strict";n.d(t,{Slot:()=>o,SlotContext:()=>s});var r=n(50959);class o extends r.Component{shouldComponentUpdate(){return!1}render(){return r.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const s=r.createContext(null)},8626:(e,t,n)=>{"use strict";function r(e){return s(e,i)}function o(e){return s(e,l)}function s(e,t){const n=Object.entries(e).filter(t),r={};for(const[e,t]of n)r[e]=t;return r}function i(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function l(e){return 0===e[0].indexOf("aria-")}n.d(t,{filterAriaProps:()=>o,filterDataProps:()=>r,filterProps:()=>s,isAriaAttribute:()=>l,isDataAttribute:()=>i})},551080:(e,t,n)=>{"use strict";function r(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}function o(e){return r([e])}n.d(t,{isomorphicRef:()=>o,mergeRefs:()=>r})},763341:(e,t,n)=>{"use strict";function r(...e){return t=>{for(const n of e)void 0!==n&&n(t)}}n.d(t,{createSafeMulticastEventHandler:()=>r})},531327:(e,t,n)=>{"use strict";function r(e){return o()?0:s()?45:Math.min(Math.max(e,45),450)}n.d(t,{getWidgetBarPadding:()=>r,isWidgetBarFullscreen:()=>o});const o=()=>!window.matchMedia("screen and (min-width: 768px)").matches,s=()=>!window.matchMedia("screen and (min-width: 1280px)").matches},495217:(e,t,n)=>{"use strict";n.d(t,{CircleLogo:()=>i,hiddenCircleLogoClass:()=>s});var r=n(50959),o=n(783036);n(645300);const s="tv-circle-logo--visually-hidden";function i(e){var t,n;const s=(0,o.getStyleClasses)(e.size,e.className),i=null!==(n=null!==(t=e.alt)&&void 0!==t?t:e.title)&&void 0!==n?n:"";return(0,o.isCircleLogoWithUrlProps)(e)?r.createElement("img",{className:s,src:e.logoUrl,alt:i,title:e.title,loading:e.loading,"aria-label":e["aria-label"],"aria-hidden":e["aria-hidden"]}):r.createElement("span",{className:s,
title:e.title,"aria-label":e["aria-label"],"aria-hidden":e["aria-hidden"]},e.placeholderLetter)}},783036:(e,t,n)=>{"use strict";n.d(t,{getStyleClasses:()=>o,isCircleLogoWithUrlProps:()=>s});var r=n(497754);function o(e,t){return r("tv-circle-logo",`tv-circle-logo--${e}`,t)}function s(e){return"logoUrl"in e&&void 0!==e.logoUrl&&0!==e.logoUrl.length}},574823:(e,t,n)=>{"use strict";n.d(t,{useKeyboardActionHandler:()=>r.useKeyboardActionHandler,useKeyboardClose:()=>r.useKeyboardClose,useKeyboardEventHandler:()=>r.useKeyboardEventHandler,useKeyboardOpen:()=>r.useKeyboardOpen,useKeyboardToggle:()=>r.useKeyboardToggle});var r=n(283657)},631078:(e,t,n)=>{"use strict";n.d(t,{useWatchedValueReadonly:()=>o});var r=n(50959);const o=(e,t=!1)=>{const n="watchedValue"in e?e.watchedValue:void 0,o="defaultValue"in e?e.defaultValue:e.watchedValue.value(),[s,i]=(0,r.useState)(n?n.value():o);return(t?r.useLayoutEffect:r.useEffect)((()=>{if(n){i(n.value());const e=e=>i(e);return n.subscribe(e),()=>n.unsubscribe(e)}return()=>{}}),[n]),s}},377318:(e,t,n)=>{"use strict";n.d(t,{MenuContext:()=>r});const r=n(50959).createContext(null)},175071:(e,t,n)=>{"use strict";n.d(t,{DEFAULT_MENU_THEME:()=>v,Menu:()=>g});var r=n(50959),o=n(497754),s=n.n(o),i=n(650151),l=n(678515),a=n(777466),u=n(670797),c=n(224743),d=n(351290),h=n(799786),p=n(906481),m=n(377318),f=n(540191);const v=f;class g extends r.PureComponent{constructor(e){super(e),this._containerRef=null,this._scrollWrapRef=null,this._raf=null,this._scrollRaf=null,this._scrollTimeout=void 0,this._manager=new d.OverlapManager,this._hotkeys=null,this._scroll=0,this._handleContainerRef=e=>{this._containerRef=e,this.props.reference&&("function"==typeof this.props.reference&&this.props.reference(e),"object"==typeof this.props.reference&&(this.props.reference.current=e))},this._handleScrollWrapRef=e=>{this._scrollWrapRef=e,"function"==typeof this.props.scrollWrapReference&&this.props.scrollWrapReference(e),"object"==typeof this.props.scrollWrapReference&&(this.props.scrollWrapReference.current=e)},this._handleCustomRemeasureDelegate=()=>{this._resizeForced(),this._handleMeasure()},this._handleMeasure=({callback:e,forceRecalcPosition:t}={})=>{var n,r,o,s,a,u,c,d,h,p,m,f;if(this.state.isMeasureValid&&!t)return;const{position:v}=this.props,g=(0,i.ensureNotNull)(this._containerRef);let w=g.getBoundingClientRect();const x=document.documentElement.clientHeight,C=document.documentElement.clientWidth,b=null!==(n=this.props.closeOnScrollOutsideOffset)&&void 0!==n?n:0;let _=x-0-b;const y=w.height>_;if(y){(0,i.ensureNotNull)(this._scrollWrapRef).style.overflowY="scroll",w=g.getBoundingClientRect()}const{width:k,height:E}=w,M="function"==typeof v?v({contentWidth:k,contentHeight:E,availableWidth:C,availableHeight:x}):v,S=null!==(o=null===(r=null==M?void 0:M.indentFromWindow)||void 0===r?void 0:r.left)&&void 0!==o?o:0,R=C-(null!==(s=M.overrideWidth)&&void 0!==s?s:k)-(null!==(u=null===(a=null==M?void 0:M.indentFromWindow)||void 0===a?void 0:a.right)&&void 0!==u?u:0),W=(0,
l.clamp)(M.x,S,Math.max(S,R)),N=(null!==(d=null===(c=null==M?void 0:M.indentFromWindow)||void 0===c?void 0:c.top)&&void 0!==d?d:0)+b,O=x-(null!==(h=M.overrideHeight)&&void 0!==h?h:E)-(null!==(m=null===(p=null==M?void 0:M.indentFromWindow)||void 0===p?void 0:p.bottom)&&void 0!==m?m:0);let z=(0,l.clamp)(M.y,N,Math.max(N,O));if(M.forbidCorrectYCoord&&z<M.y&&(_-=M.y-z,z=M.y),t&&void 0!==this.props.closeOnScrollOutsideOffset&&M.y<=this.props.closeOnScrollOutsideOffset)return void this._handleGlobalClose(!0);const L=null!==(f=M.overrideHeight)&&void 0!==f?f:y?_:void 0;this.setState({appearingMenuHeight:t?this.state.appearingMenuHeight:L,appearingMenuWidth:t?this.state.appearingMenuWidth:M.overrideWidth,appearingPosition:{x:W,y:z},isMeasureValid:!0},(()=>{this._restoreScrollPosition(),e&&e()}))},this._restoreScrollPosition=()=>{const e=document.activeElement,t=(0,i.ensureNotNull)(this._containerRef);if(null!==e&&t.contains(e))try{e.scrollIntoView()}catch(e){}else(0,i.ensureNotNull)(this._scrollWrapRef).scrollTop=this._scroll},this._resizeForced=()=>{this.setState({appearingMenuHeight:void 0,appearingMenuWidth:void 0,appearingPosition:void 0,isMeasureValid:void 0})},this._resize=()=>{null===this._raf&&(this._raf=requestAnimationFrame((()=>{this.setState({appearingMenuHeight:void 0,appearingMenuWidth:void 0,appearingPosition:void 0,isMeasureValid:void 0}),this._raf=null})))},this._handleGlobalClose=e=>{this.props.onClose(e)},this._handleSlot=e=>{this._manager.setContainer(e)},this._handleScroll=()=>{this._scroll=(0,i.ensureNotNull)(this._scrollWrapRef).scrollTop},this._handleScrollOutsideEnd=()=>{clearTimeout(this._scrollTimeout),this._scrollTimeout=setTimeout((()=>{this._handleMeasure({forceRecalcPosition:!0})}),80)},this._handleScrollOutside=e=>{e.target!==this._scrollWrapRef&&(this._handleScrollOutsideEnd(),null===this._scrollRaf&&(this._scrollRaf=requestAnimationFrame((()=>{this._handleMeasure({forceRecalcPosition:!0}),this._scrollRaf=null}))))},this.state={}}componentDidMount(){this._handleMeasure({callback:this.props.onOpen});const{customCloseDelegate:e=c.globalCloseDelegate,customRemeasureDelegate:t}=this.props;e.subscribe(this,this._handleGlobalClose),null==t||t.subscribe(null,this._handleCustomRemeasureDelegate),window.addEventListener("resize",this._resize);const n=null!==this.context;this._hotkeys||n||(this._hotkeys=h.createGroup({desc:"Popup menu"}),this._hotkeys.add({desc:"Close",hotkey:27,handler:()=>{this.props.onKeyboardClose&&this.props.onKeyboardClose(),this._handleGlobalClose()}})),this.props.repositionOnScroll&&window.addEventListener("scroll",this._handleScrollOutside,{capture:!0})}componentDidUpdate(){this._handleMeasure()}componentWillUnmount(){const{customCloseDelegate:e=c.globalCloseDelegate,customRemeasureDelegate:t}=this.props;e.unsubscribe(this,this._handleGlobalClose),null==t||t.unsubscribe(null,this._handleCustomRemeasureDelegate),window.removeEventListener("resize",this._resize),window.removeEventListener("scroll",this._handleScrollOutside,{capture:!0}),this._hotkeys&&(this._hotkeys.destroy(),
this._hotkeys=null),null!==this._raf&&(cancelAnimationFrame(this._raf),this._raf=null),null!==this._scrollRaf&&(cancelAnimationFrame(this._scrollRaf),this._scrollRaf=null),this._scrollTimeout&&clearTimeout(this._scrollTimeout)}render(){const{id:e,role:t,"aria-label":n,"aria-labelledby":o,"aria-activedescendant":i,"aria-hidden":l,"aria-describedby":c,"aria-invalid":d,children:h,minWidth:v,theme:g=f,className:x,maxHeight:C,onMouseOver:b,onMouseOut:_,onKeyDown:y,onFocus:k,onBlur:E}=this.props,{appearingMenuHeight:M,appearingMenuWidth:S,appearingPosition:R,isMeasureValid:W}=this.state,N={"--ui-kit-menu-max-width":`${R&&R.x}px`,maxWidth:"calc(100vw - var(--ui-kit-menu-max-width) - 6px)"};return r.createElement(m.MenuContext.Provider,{value:this},r.createElement(p.SubmenuHandler,null,r.createElement(u.SlotContext.Provider,{value:this._manager},r.createElement("div",{id:e,role:t,"aria-label":n,"aria-labelledby":o,"aria-activedescendant":i,"aria-hidden":l,"aria-describedby":c,"aria-invalid":d,className:s()(x,g.menuWrap,!W&&g.isMeasuring),style:{height:M,left:R&&R.x,minWidth:v,position:"fixed",top:R&&R.y,width:S,...this.props.limitMaxWidth&&N},"data-name":this.props["data-name"],ref:this._handleContainerRef,onScrollCapture:this.props.onScroll,onContextMenu:a.preventDefaultForContextMenu,tabIndex:this.props.tabIndex,onMouseOver:b,onMouseOut:_,onKeyDown:y,onFocus:k,onBlur:E},r.createElement("div",{className:s()(g.scrollWrap,!this.props.noMomentumBasedScroll&&g.momentumBased),style:{overflowY:void 0!==M?"scroll":"auto",maxHeight:C},onScrollCapture:this._handleScroll,ref:this._handleScrollWrapRef},r.createElement(w,{className:g.menuBox},h)))),r.createElement(u.Slot,{reference:this._handleSlot})))}update(e){e?this._resizeForced():this._resize()}focus(e){var t;null===(t=this._containerRef)||void 0===t||t.focus(e)}blur(){var e;null===(e=this._containerRef)||void 0===e||e.blur()}}function w(e){const t=(0,i.ensureNotNull)((0,r.useContext)(p.SubmenuContext)),n=r.useRef(null);return r.createElement("div",{ref:n,className:e.className,onMouseOver:function(e){if(!(null!==t.current&&e.target instanceof Node&&(r=e.target,null===(o=n.current)||void 0===o?void 0:o.contains(r))))return;var r,o;t.isSubmenuNode(e.target)||t.setCurrent(null)},"data-name":"menu-inner"},e.children)}g.contextType=p.SubmenuContext},320116:(e,t,n)=>{"use strict";n.d(t,{CloseDelegateContext:()=>s});var r=n(50959),o=n(224743);const s=r.createContext(o.globalCloseDelegate)},45968:(e,t,n)=>{"use strict";n.d(t,{PopupMenu:()=>h});var r=n(50959),o=n(500962),s=n(162942),i=n(636098),l=n(175071),a=n(320116),u=n(685715),c=n(385806),d=n(600586);function h(e){const{controller:t,children:n,isOpened:h,closeOnClickOutside:p=!0,doNotCloseOn:m,onClickOutside:f,onClose:v,onKeyboardClose:g,"data-name":w="popup-menu-container",...x}=e,C=(0,r.useContext)(a.CloseDelegateContext),b=r.useContext(d.MenuWidthContext),_=(0,r.useContext)(u.RemeasureDelegateContext),y=(0,c.useOutsideEvent)({handler:function(e){f&&f(e);if(!p)return;const t=(0,s.default)(m)?m():null==m?[]:[m]
;if(t.length>0&&e.target instanceof Node)for(const n of t){const t=o.findDOMNode(n);if(t instanceof Node&&t.contains(e.target))return}v()},mouseDown:!0,touchStart:!0});return h?r.createElement(i.Portal,{top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none"},r.createElement("span",{ref:y,style:{pointerEvents:"auto"}},r.createElement(l.Menu,{...x,onClose:v,onKeyboardClose:g,onScroll:function(t){const{onScroll:n}=e;n&&n(t)},customCloseDelegate:C,customRemeasureDelegate:_,ref:t,"data-name":w,limitMaxWidth:b.setMenuMaxWidth},n))):null}},685715:(e,t,n)=>{"use strict";n.d(t,{RemeasureDelegateContext:()=>r});const r=n(50959).createContext(void 0)},636098:(e,t,n)=>{"use strict";n.d(t,{Portal:()=>a,PortalContext:()=>u});var r=n(50959),o=n(500962),s=n(925931),i=n(351290),l=n(692822);class a extends r.PureComponent{constructor(){super(...arguments),this._uuid=(0,s.nanoid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",this.props.className&&e.classList.add(this.props.className),this.props["aria-hidden"]&&e.setAttribute("aria-hidden","true"),o.createPortal(r.createElement(u.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?(0,i.getRootOverlapManager)():this.context}}a.contextType=l.SlotContext;const u=r.createContext(null)},670797:(e,t,n)=>{"use strict";n.d(t,{Slot:()=>r.Slot,SlotContext:()=>r.SlotContext});var r=n(692822)},117105:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>'},315130:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>'},238822:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>'},663346:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>'},534983:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>'},295694:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M17 22.5 6.85 12.35a.5.5 0 0 1 0-.7L17 1.5"/></svg>'},249498:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 16.5 4.85 9.35a.5.5 0 0 1 0-.7L12 1.5"/></svg>'},560176:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M9.5 12.5 3.9 7.37a.5.5 0 0 1 0-.74L9.5 1.5"/></svg>'},935369:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M8 10.5 3.85 6.35a.5.5 0 0 1 0-.7L8 1.5"/></svg>'},758478:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 8.5 3.85 5.35a.5.5 0 0 1 0-.7L7 1.5"/></svg>'},773063:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22.5 6.85 12.35a.5.5 0 0 1 0-.7L17 1.5"/></svg>'},914127:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16.5 4.85 9.35a.5.5 0 0 1 0-.7L12 1.5"/></svg>'},218073:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 12.5 3.9 7.37a.5.5 0 0 1 0-.74L9.5 1.5"/></svg>'},124097:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.5 3.85 6.35a.5.5 0 0 1 0-.7L8 1.5"/></svg>'},142576:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 8.5 3.85 5.35a.5.5 0 0 1 0-.7L7 1.5"/></svg>'}}]);